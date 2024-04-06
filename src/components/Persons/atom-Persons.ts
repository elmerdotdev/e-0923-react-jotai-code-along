import { atom } from 'jotai'

type Person = {
  name: string,
  age: number
}

const personsAtom = atom<Person[]>([
  { name: 'Joe', age: 35 },
  { name: 'Jane', age: 21 }
])
const numberOfPersonsAtom = atom((get) => {
  return get(personsAtom).length
})
const firstPersonAtom = atom((get) => {
  return get(personsAtom)[0]
})
const lastPersonAtom = atom((get) => {
  return get(personsAtom)[get(personsAtom).length - 1]
})

export { personsAtom, firstPersonAtom, lastPersonAtom, numberOfPersonsAtom }