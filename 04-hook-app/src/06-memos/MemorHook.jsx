import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (number = 1000) => {
  for(let i=0; i<number; i++){
    console.log('Ahi vamos')
  }
  return('Done')
}
export const MemoHook = () => {

    const {counter, increment}=useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>

        <h4>{memorizeValue}</h4>

        <button className="btn btn-primary"
        onClick={() => increment(1)}>+1</button>
        <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show&hide {JSON.stringify(show)}</button>
    </>
  )
}
