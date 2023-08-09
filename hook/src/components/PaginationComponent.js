import React, { useEffect } from 'react'

const renderData=(data)=>{

}
function PaginationComponent() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>response.json())
        .then((data)=> setData(data))
    },[])
  return (
    <div>PaginationComponent</div>
  )
}

export default PaginationComponent