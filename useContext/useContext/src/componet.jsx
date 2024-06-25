import {useContext} from 'react'
import { countContext } from './context/context'


export default function Componet() {
    const counter = useContext(countContext)
  return (
    <div>
      {counter}
    </div>
  )
}
