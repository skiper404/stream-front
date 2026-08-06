import {
  ConnectionState,
  createLocalAudioTrack,
  createLocalVideoTrack,
  LocalAudioTrack,
  LocalVideoTrack,
  RemoteParticipant,
  RemoteTrack,
  Room,
  RoomEvent,
  Track
} from "livekit-client"

const room = shallowRef<Room>()

const connectionState = ref(ConnectionState.Disconnected)

const participants = ref<RemoteParticipant[]>([])
const localParticipant = computed(() => room.value?.localParticipant ?? null)

const videoTrack = shallowRef<RemoteTrack | null>(null)
const audioTrack = shallowRef<RemoteTrack | null>(null)

const localVideoTrack = shallowRef<LocalVideoTrack | null>(null)
const localAudioTrack = shallowRef<LocalAudioTrack | null>(null)

const isConnected = computed(() => connectionState.value === ConnectionState.Connected)
const hasVideoTrack = computed(() => videoTrack.value !== null)
const hasAudioTrack = computed(() => audioTrack.value !== null)

export const useLiveKitRoom = () => {
  const config = useRuntimeConfig()

  const updateParticipants = () => {
    participants.value = [...room.value!.remoteParticipants.values()]
  }

  const startCamera = async () => {
    if (localVideoTrack.value) return
    localVideoTrack.value = await createLocalVideoTrack()
    await room.value?.localParticipant.publishTrack(localVideoTrack.value)
  }

  const stopCamera = async () => {
    if (!localVideoTrack.value) return
    await room.value!.localParticipant.unpublishTrack(localVideoTrack.value)
    localVideoTrack.value.stop()
    localVideoTrack.value = null
  }

  const startMicrophone = async () => {
    if (localAudioTrack.value) return
    localAudioTrack.value = await createLocalAudioTrack()
    await room.value?.localParticipant.publishTrack(localAudioTrack.value)
  }

  const stopMicrophone = async () => {
    if (!localAudioTrack.value) return
    await room.value?.localParticipant.unpublishTrack(localAudioTrack.value)
    localAudioTrack.value.stop()
    localAudioTrack.value = null
  }

  if (!room.value) {
    room.value = new Room()

    room.value.on(RoomEvent.ConnectionStateChanged, state => {
      connectionState.value = state

      if (state === ConnectionState.Disconnected) {
        participants.value = []
        videoTrack.value = null
        audioTrack.value = null
        localVideoTrack.value = null
        localAudioTrack.value = null
      }
    })

    room.value.on(RoomEvent.ParticipantConnected, () => {
      updateParticipants()
    })

    room.value.on(RoomEvent.ParticipantDisconnected, () => {
      updateParticipants()
    })

    room.value.on(RoomEvent.TrackSubscribed, track => {
      if (track.kind === Track.Kind.Video) {
        videoTrack.value = track
      }

      if (track.kind === Track.Kind.Audio) {
        audioTrack.value = track
      }
    })

    room.value.on(RoomEvent.TrackUnsubscribed, track => {
      if (track.kind === Track.Kind.Video) {
        videoTrack.value = null
      }

      if (track.kind === Track.Kind.Audio) {
        audioTrack.value = null
      }
    })
  }

  const connect = async (token: string) => {
    await room.value!.connect(config.public.livekitUrl, token)
    updateParticipants()
  }

  const disconnect = () => {
    room.value?.disconnect()
    participants.value = []
    videoTrack.value = null
    audioTrack.value = null
    localVideoTrack.value = null
    localAudioTrack.value = null
  }

  return {
    room,
    connectionState,
    participants,
    videoTrack,
    audioTrack,
    hasVideoTrack,
    hasAudioTrack,
    isConnected,
    localParticipant,
    localAudioTrack,
    localVideoTrack,
    connect,
    disconnect,
    startCamera,
    startMicrophone,
    stopCamera,
    stopMicrophone
  }
}
