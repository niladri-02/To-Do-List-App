import React, { useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdDelete, MdDarkMode, MdLightMode } from "react-icons/md";

const App = () => {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false) // dark mode state

  const submitHandle = () => {
    if (!text.trim()) return;
    setTasks([...tasks, text])
    setText('')
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className='bg-slate-400 grid py-4 min-h-screen transition-colors duration-300'>
      <div className={`${darkMode ? 'bg-slate-500' : 'bg-blue-300'} w-11/12 place-self-center max-w-md flex flex-col p-7 min-h-[550px] rounded-md transition-colors duration-300`}>
        
        {/* Dark Mode Toggle Button */}
        <div className='flex justify-end mb-3'>
          <button onClick={toggleDarkMode} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 rounded-full transition-colors`}>
            {darkMode ? <MdLightMode className='text-xl' /> : <MdDarkMode className='text-xl' />}
          </button>
        </div>

        <div className='flex items-center mt-7 gap-2'>
          <LuListTodo className={`${darkMode ? 'text-white' : 'text-black'} text-3xl`} />
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-3xl font-semibold`}>To-Do List</h1>
        </div>

        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center my-7 rounded-full transition-colors`}>
          <input
            className={`bg-transparent border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-400 outline-none ${darkMode ? 'text-white' : 'text-black'}`}
            value={text}
            type="text"
            placeholder='Add your task'
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={submitHandle}
            className='border-none rounded-full bg-blue-700 text-white w-14 h-14 text-4xl cursor-pointer hover:bg-blue-900 transition-all'
          >
            <IoIosAddCircle className='ml-2.5' />
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          {tasks.map((task, index) => (
            <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-between p-3 rounded-md transition-colors`}>
              <div className='flex items-center'>
                <TiTick className={`${darkMode ? 'text-white' : 'text-black'} text-2xl`} />
                <p className={`${darkMode ? 'text-white' : 'text-slate-900'} ml-4`}>{task}</p>
              </div>
              <MdDelete
                className='text-2xl text-red-500 cursor-pointer hover:text-red-600 transition-all'
                onClick={() => deleteTask(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
