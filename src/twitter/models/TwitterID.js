// @flow
export opaque type TwitterID = string;

export const toString = (id: TwitterID): string => id;
export const toTwitterID = (id: string): TwitterID => id;
