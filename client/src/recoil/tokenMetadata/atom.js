import { atom } from "recoil";

export const tokenMetadataAtom = atom({
  key: 'tokenMeta',
  default: {
    attributes: "",
    image: "",
    name: ""
  }
});

export const charMetadataAtom = atom({
  key: 'charMeta',
  default: {
    attributes: "",
    image: "",
    name: ""
  }
});

export const weaponMetadataAtom = atom({
  key: 'weaponMeta',
  default: {
    attributes: "",
    image: "",
    name: ""
  } 
})

export const charNameAtom = atom({
  key: 'charName',
  default: {
    skin: "",
    face: "",
    hair: "",
    clothes: "",
    shoes: "",
    eyeDecoration: "",
    faceAccessory: ""
  } 
})

export const weaponNameAtom = atom({
  key: 'weaponName',
  default: '',
})

export const strengthAtom = atom({
  key: 'strength',
  default: '',
})