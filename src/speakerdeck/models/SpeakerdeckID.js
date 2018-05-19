// @flow
export opaque type SpeakerdeckID = string;

export const toString = (id: SpeakerdeckID): string => id;
export const toSpeakerdeckID = (id: string): SpeakerdeckID => id;
