const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#d946ef",
  "#ec4899"
]

export const getUserColor = (id: string) => {
  let hash = 0

  for (const char of id) {
    hash += char.charCodeAt(0)
  }

  return colors[hash % colors.length]
}

export const getRandomColor = () => {
  let color = "#"
  const letters = "0123456789ABCDEF"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
