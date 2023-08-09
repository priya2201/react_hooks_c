import React, { useState } from 'react'
function Post({post,index,completeList,deleteList}){
    const  handleClick1=()=>{
completeList(index) 
    }
    const handleClick2=()=>{
        deleteList(index)
    }
    return(
        <div className='todo'>
            <span onClick={handleClick1} className={post.isCompleted ? 'todo-text todo-completed' :'todo-text'}>{post.text}</span>
        <button onClick={handleClick2}><i class='far fa-trash-alt'></i></button>
        </div>
    )
}
function PostData({addData}) {
    const[value,setValue]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value) return;
        addData(value)
        setValue('')
    }

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

  return (
<form onSubmit={handleSubmit}>
    <input type='text'
    className='input'
    value={value}
    onChange={handleChange}
    placeholder='Add list.......'/>
</form>  )
}
function PostInfo(){
    const[posts,setPosts]=useState([
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
    ])
    const addData=(text)=>{
        const newList=[...posts,{text}]
        setPosts(newList)
    }

    const completeList=index=>{
        const newList=[...posts]
        newList(index).isCompleted = true ? newList[index].isCompleted= true : newList.isCompleted=false
    }
    const deleteList=index=>{
        const delList=[...posts]
        delList.splice(index,1)
        setPosts(delList)
    }
    return (
   
        <div className='app'>
            <h1>React to-do</h1>
            <div className='todo-list'>
              {posts.map((post, index) =>{
                return ( 
                  <Post 
                   completeList={completeList}
                   deleteList = {deleteList}
                   key={index}
                   index={index}
                   post={post}
                  />
                )
              })}
              <PostData addData={addData}/>
            </div>
        </div>
        )
}

export default PostInfo