import { atom } from 'jotai'

type Person = {
  name: string,
  age: number
}

const personsAtom = atom<Person[]>([
  { name: 'Joe', age: 35 },
  { name: 'Jane', age: 21 },
  { name: 'Eve', age: 15 }
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
const adultPersonsAtom = atom((get) => {
  const persons = get(personsAtom)
  return persons.filter((person) => person.age >= 18)
})
const minorPersonsAtom = atom((get) => {
  const persons = get(personsAtom)
  return persons.filter((person) => person.age < 18)
})

export { personsAtom, firstPersonAtom, lastPersonAtom, numberOfPersonsAtom, adultPersonsAtom, minorPersonsAtom }