import React,{useState} from 'react'

function Todo({todo,index,deleteList,completeTodo}) {

const handleClick=()=>{
    completeTodo(index)
}
const handleClick2=()=>{
    deleteList(index)
}
  return (
    <div>
    <div classname='todo'>
        <span onClick={handleClick} className={todo.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {todo.text}
            </span> 
            <button onClick={handleClick2}><i class="far fa-trash-alt"></i></button></div>
            </div>
  )
}
function TodoForm({addTodo}){
    const[value,setvalue]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setvalue('')
    }
    const handleChange=(e)=>{
        setvalue(e.target.value)
    }
    return(
       <form onSubmit={handleSubmit}>
      <input
      type='text'
      className='input'
      value={value}
      onChange={handleChange}
      placeholder='Add List....'/>
       </form> 
    )
}

function ReactTodo(){
    const[todos,setTodos]=useState([
        {
            text:'Testing Hooks with react',
            isCompleted:false
        },
        {
            text:'Build Portfolios and some websites',
            isCompleted:false
        },
        {
            text:'Build firebase-based web app',
            isCompleted:false
        }
    ]);
    const addTodo=(text)=>{
        const newList=[...todos,{text}]
        setTodos(newList)
    }
  
    const completeTodo=index=>{
        const newList=[...todos]
        newList[index].isCompleted = true ? newList[index].isCompleted = true : newList.isCompleted=false
        setTodos(newList)
    }

    const deleteList=index=>{
        const delList=[...todos]
        delList.splice(index,1)
        setTodos(delList)
    }
    return (
   
        <div className='app'>
            <h1>React to-do</h1>
            <div className='todo-list'>
              {todos.map((todo, index) =>{
                return ( 
                  <Todo 
                   completeTodo={completeTodo}
                   deleteList = {deleteList}
                   key={index}
                   index={index}
                   todo={todo}
                  />
                )
              })}
              <TodoForm addTodo={addTodo}/>
            </div>
        </div>
        )
}


export default ReactTodo