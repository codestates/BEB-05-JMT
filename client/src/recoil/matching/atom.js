import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const matchingAtom = atom({
  key: 'matchingImageAtom',
  default: {
    username: "",
    image: ""
  },
  effects_UNSTABLE: [persistAtom]
});