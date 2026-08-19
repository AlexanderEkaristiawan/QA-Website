export function isProjectMember(
  project: FirebaseFirestore.DocumentData,
  userId: string
): boolean {
  if (project.ownerId === userId) return true
  const members = project.members as Record<string, string> | undefined
  return Boolean(members && userId in members)
}

export function canUploadBugAssets(
  project: FirebaseFirestore.DocumentData,
  userId: string
): boolean {
  return isProjectMember(project, userId)
}
