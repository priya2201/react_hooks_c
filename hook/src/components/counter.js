import React from 'react'
import useCounter from '../hooks/useCounter'

function Counter() {
 const counter=useCounter();
 return <p> {counter}</p>
}

export default Counter