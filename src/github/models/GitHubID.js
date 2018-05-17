// @flow
export opaque type GitHubID = string;

export const toString = (id: GitHubID): string => id;
export const toGitHubID = (id: string): GitHubID => id;
