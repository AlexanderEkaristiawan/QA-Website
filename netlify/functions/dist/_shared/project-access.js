"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProjectMember = isProjectMember;
exports.canUploadBugAssets = canUploadBugAssets;
function isProjectMember(project, userId) {
    if (project.ownerId === userId)
        return true;
    const members = project.members;
    return Boolean(members && userId in members);
}
function canUploadBugAssets(project, userId) {
    return isProjectMember(project, userId);
}
