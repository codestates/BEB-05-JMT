import { atom } from "recoil";

export const backgroundAtom = atom({
  key: 'background',
  default: {
    type: "default"
  }
});

