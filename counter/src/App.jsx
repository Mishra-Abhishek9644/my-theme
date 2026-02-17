import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <div className='flex flex-col justify-center items-center gap-2 w-full py-4 my-2'>
       <h1>Vite + React</h1>
      <div className="card">
        <button className='px-3 py-2 rounded-2xl bg-black text-white hover:scale-105' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     </div>
    </>
  )
}

export default App
