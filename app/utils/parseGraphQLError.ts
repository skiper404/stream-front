export const parseGraphQLError = (error: any) => {
  const originalError = error.errors[0].extensions.originalError

  return {
    status: originalError?.statusCode ?? 500,
    message: originalError?.message || "Unknown Error"
  }
}
