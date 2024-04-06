import { useAtom } from 'jotai'
import { countAtom, doubleCountAtom, timesTenAtom, combinedAtom, countTwoAtom, headingAtom, subtractAtom } from './atom-Counter'

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)
  const [doubleCount] = useAtom(doubleCountAtom)
  const [timesTen] = useAtom(timesTenAtom)
  const [combined] = useAtom(combinedAtom)
  const [countTwo, setCountTwo] = useAtom(countTwoAtom)
  const [heading, setHeading] = useAtom(headingAtom)
  const [difference] = useAtom(subtractAtom)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>

      <h2>Double Count: {doubleCount}</h2>
      <h2>Double Count Times 10: {timesTen}</h2>
      <h2>Count + Double Count: {combined}</h2>

      <h2>Count Two: {countTwo}</h2>
      <button onClick={() => setCountTwo(prevCountTwo => prevCountTwo + 10)}>Increment by 10</button>
      <h2>Count Two Minus 2: {difference}</h2>

      <h2>Heading: {heading}</h2>
      <input type="text" value={heading} onChange={(e) => setHeading(e.target.value)} />
      <button onClick={() => setHeading('Welcome')}>Change heading to 'Welcome'</button>
    </div>
  )
}

export default Counter