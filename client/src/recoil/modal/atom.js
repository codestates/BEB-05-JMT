import { atom } from "recoil";

export const modalAtom = atom({
  key: 'modal',
  default: {
    type: "",
    open: false,
    data: {}
  }
});
