import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {
    console.log('me renderizo')
  return (
    <button className='btn btn-primary' onClick={() => increment()}>Incrementar</button>
  )
})
