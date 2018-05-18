// @flow
export opaque type FacebookID = string;

export const toString = (id: FacebookID): string => id;
export const toFacebookID = (id: string): FacebookID => id;
