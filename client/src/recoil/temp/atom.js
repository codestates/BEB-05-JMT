import { atom } from "recoil";

export const tempRankAtom = atom({
    key: 'tempRank',
    default: 1,
  })

export const selectedCharAtom = atom({
    key: 'selectedChar',
    dafault: "",
})

export const selectedImgAtom = atom({
    key: 'selectedImg',
    dafault: "",
})