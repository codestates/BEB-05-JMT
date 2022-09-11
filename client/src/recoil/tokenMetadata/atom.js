import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const tokenMetadataAtom = atom({
  key: 'tokenMeta',
  default: {
    attributes: "",
    image: "",
    name: ""
  },
  effects_UNSTABLE: [persistAtom]
});

export const charMetadataAtom = atom({
  key: 'charMeta',
  default: {
    attributes: "",
    image: "",
    name: ""
  },
  effects_UNSTABLE: [persistAtom]  
});

export const weaponMetadataAtom = atom({
  key: 'weaponMeta',
  default: {
    attributes: "",
    image: "",
    name: ""
  },
  effects_UNSTABLE: [persistAtom]  
})