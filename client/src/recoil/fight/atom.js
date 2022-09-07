import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const fightAtom = atom({
  key: 'fight',
  default: {
    weapon: "",
    img: "",
    fightimg: "",
    winimg: "",
    loseimg: "",
  },
  effects_UNSTABLE: [persistAtom]
});