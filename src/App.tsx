import { useAtom } from "jotai"
import { countAtom } from './components/Counter/atom-Counter'
import Counter from "./components/Counter/Counter"
import Persons from "./components/Persons/Persons"

const App = () => {
  const [count] = useAtom(countAtom)

  return (
    <div>
      <Persons />
      <hr />
      <Counter />
      <hr />
      <h3>Count: {count}</h3>
    </div>
  )
}

export default App