// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './store/slices/counter';

function App({children}) {
  // const [count, setCount] = useState(0)
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      {/* <h2>{children}</h2> */}
      <div className="card">
        <button onClick={()=>dispatch(increment())}>
          Increment
        </button>
        <button onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={()=>dispatch(reset())}>
          Reset
        </button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
      
    </div>
  )
}

export default App
