import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, restart, decrement} = useCounter();



  return (
    <>
        <h1>Counter with hook: {counter}</h1>
        <hr />
        <button onClick={() => increment(2)}className="btn btn-primary">+1</button>
        <button onClick={restart}className="btn btn-primary">Reset</button>
        <button onClick={() => decrement(2)}className="btn btn-primary">-1</button>
    </>
  )
}
