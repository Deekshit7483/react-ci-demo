export function formatName(user) {
  if (!user || !user.name) return 'Unknown user'
  return user.name.trim()
}
