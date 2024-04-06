import { atom } from 'jotai'

const countAtom = atom<number>(0) // Initial value 0
const doubleCountAtom = atom((get) => {
  return get(countAtom) * 2
}) // double of countAtom
const timesTenAtom = atom((get) => {
  return get(doubleCountAtom) * 10
})
const combinedAtom = atom((get) => {
  return get(countAtom) + get(doubleCountAtom)
})
const countTwoAtom = atom<number>(5) // initial value 5
const headingAtom = atom<string>('Hello') // initial value 'Hello'
const subtractAtom = atom((get) => {
  return get(countTwoAtom) - 2
})

export { countAtom, doubleCountAtom, timesTenAtom, combinedAtom, subtractAtom, countTwoAtom, headingAtom }