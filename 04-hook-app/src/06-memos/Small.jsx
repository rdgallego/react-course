import { memo } from "react"


export const Small = memo(({value}) => {
    console.log('Me renderizo')
  return (
    <small>{value}</small>
  )
})
