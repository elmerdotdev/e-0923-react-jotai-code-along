import { FormEvent, useState } from 'react'
import { useAtom } from 'jotai'
import { personsAtom, numberOfPersonsAtom, firstPersonAtom, lastPersonAtom, adultPersonsAtom, minorPersonsAtom } from './atom-Persons'

const Persons = () => {
  const [persons, setPersons] = useAtom(personsAtom)
  const [numberOfPersons] = useAtom(numberOfPersonsAtom)
  const [firstPerson] = useAtom(firstPersonAtom)
  const [lastPerson] = useAtom(lastPersonAtom)
  const [adultPersons] = useAtom(adultPersonsAtom)
  const [minorPersons] = useAtom(minorPersonsAtom) 

  // States for input fields
  const [newName, setNewName] = useState<string>('')
  const [newAge, setNewAge] = useState<number>(20)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      age: newAge
    }
    
    setPersons([...persons, newPerson])
  }

  return (
    <div>
      <h3>Number of Persons: {numberOfPersons}</h3>
      <h2>All Persons:</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} - {person.age}</li>
        ))}
      </ul>
      
      <h4>First person: {firstPerson.name}</h4>
      <h4>Last person: {lastPerson.name}</h4>

      <h3>Adult Persons (18 and up):</h3>
      <ul>
        {adultPersons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>

      <h3>Minors (below 18):</h3>
      <ul>
        {minorPersons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <input type="number" value={newAge} onChange={(e) => setNewAge(Number(e.target.value))} />
        <button type="submit">Add Person</button>
      </form>
    </div>
  )
}

export default Persons