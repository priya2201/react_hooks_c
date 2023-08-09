import React, { useEffect ,useState} from 'react'

function useCounter() {
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        const interval=setInterval(() => {
            setCounter((prevCounter => prevCounter + 2))
        }, 500);
        return ()=> clearInterval(interval)
    },[])
  return counter;
    
}

export default useCounter