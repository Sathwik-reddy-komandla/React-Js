import {useState} from 'react'
import "./style.css"


const Todo = () => {
  const [todos,setTodos]=useState([])
  const [input,setInput]=useState('')
  const handleSubmit=()=>{
    setTodos((prevTodos) => {
        return [...prevTodos, { text: input }];
      });
      setInput('')
   

  }
  const removeTodo=(id)=>{
    setTodos((prevtodos)=>prevtodos.filter((todo, index) => index !== id)
    )
}
    return (
        <>
            <div className="container">
            <input 
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder='New Todo'
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul className='todos-list'>
                {todos.map((todo,index)=>(
                    <li key={index} className='todo'>
                        <span>{todo.text}</span>
                        <button className='close' onClick={()=>removeTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
            </div>
        </>
        )
}

export default Todo