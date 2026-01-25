import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//class components
//eg. class ClassComponet extends React.Component{
// render(){
// return <h2>Class Component</h2>
//  }
// }

//
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function App(){
// }
const Card = ({title}) =>{
  return(
    <h2>{title}</h2>
  )
}
const App = () => {
  return(
    <>
    <h2>Functional Arrow Component</h2>
    <Card title="StarWars" rating={5} isCool={true} actors={[{name : 'Actors'},{name : 'Actors'}]}/>
    <Card title="Avatar"/>
    <Card title="The Lion King"/>
    </>
  )
}

export default App
