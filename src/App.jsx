import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, settodo] = useState("") // store cureent todo
  const [todos, settodos] = useState([]) // store list of all todos


  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("todos")) {

      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (params) => {
    setshowFinished(!showFinished)
  }



  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    settodos(newTodos)

    saveToLS();
  }

  const handleDelete = (e, id) => {

    alert("Do you confirm for Deletion")
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    settodos(newTodos)
    // ask for a confirm fucntion

    saveToLS();

  }
  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")

    saveToLS();
  }
  const handleChange = (e) => {
    settodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    // console.log(index)
    newTodos[index].isCompleted = !(newTodos[index].isCompleted);
    settodos(newTodos)

    saveToLS();
  }
  return (
    <>
      <Navbar />
      <div className='container w-[70vw] mx-auto my-5 rounded-xl px-5 py-2 bg-violet-100 h-[80vh] overflow-y-scroll'>
        <div className="addTodo">
          <h2 className='text-lg font-bold text-center'>Add a Todo</h2>
        </div>
        <div className="input_wala flex justify-center items-center">
          <input onChange={handleChange} onKeyDown={(event) => event.key == "Enter" && handleAdd()} value={todo} type="text" className='w-[80%] bg-yellow-50 mx-2 rounded-lg px-3 py-1 min-h-10 active:border' />
          <button onClick={handleAdd} disabled={todo.length < 3} className="btn-primary-save">Save</button>

        </div>
        <input type="checkbox" checked={showFinished} onChange={toggleFinished} name="" id="" /> Show only Finished
        <h2 className='text-lg font-bold text-center'>Your todos</h2>
        <div className="todos flex flex-col justify-center items-center ">

          {todos.length === 0 && <div> No todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-center items-center ">
              <div className='flex gap-5 '>
                  <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                  <div className={` ${item.isCompleted ? "line-through opacity-50" : ""} text w-[30vw] bg-yellow-50 m-2 rounded-lg px-3 py-1 min-h-10 flex items-center`}>
                    {item.todo}
                  </div>
              </div>
              <div className="buttons">
                <button onClick={(e) => { handleEdit(e, item.id) }} className=" relative duration-1000 btn-primary-edit w-20 hover:bg-green-400 ">
                Edit
                </button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="btn-primary-delete w-20">Delete</button>
              </div>
            </div>
          })}

        </div>




      </div>
    </>
  )
}

export default App
