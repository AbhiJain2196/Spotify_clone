import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState", //unique Id with respect to other atoms/selectors
  default: null, // default value i.e initial value
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
