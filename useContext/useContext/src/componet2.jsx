// import React from 'react'
import { useContext } from 'react'
import { countContext } from './context/context'

export default function Componet2() {
    const ok = useContext(countContext)
  return (
    <div>
      {ok}
    </div>
  )
}
