import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const matchingAtom = atom({
  key: 'matchingAtom',
  default: {
    address: "",
    username: "",
    charId: "",
    weaponId: "",
    matchingChardata: "",
    matchingWeapondata: "",
    strength: "",
    userWinImage: "",
    userLoseImage: "",
    MwinImage: "",
    MloseImage: ""
  },
  effects_UNSTABLE: [persistAtom]
});

export const rewardScrollAtom = atom({
  key: 'rewardScroll',
  default: {
    scrollId: "",
  },
  effects_UNSTABLE: [persistAtom]
});