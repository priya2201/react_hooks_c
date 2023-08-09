import React ,{useState, useTransition,useDeferredValue}from 'react'

function Searchpage() {
    const[isPending,startTransition]=useTransition()
    const[input,setInput]=useState('')
    const[list,setList]=useState([])
    const listSize=30000

    function handleChange(e){
        setInput(e.target.value)
        
        startTransition(()=>{const listIems=[]
        for(let i=0;i< listSize;i++){
listIems.push(e.target.value)
        }
        setList(listIems)
    })
}
const deferredValue = useDeferredValue(input);
  return (
    <div><label>Search the web:</label>
    <input type="text" value={input} onChange={handleChange}/>
    {/* {isPending ? '.... loading' :list.map((item,index)=>{
        return <div key={index}>{item}</div>
    })} */}
     {list.map((item,index)=>{
        return <div key={index} input={deferredValue}>{item}</div>
    })}
    </div>
  )
}

export default Searchpage