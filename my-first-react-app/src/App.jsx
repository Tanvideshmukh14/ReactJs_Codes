import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const data = [
  {
  id:"1",
  title : "Tiramisu",
  description: "The best tiramisu in town",
  image: "https://picsum.photos/200/300/?random",
  price:"$5.00",
}
,
{
  id:"2",
  title : "Lemon ice Cream",
  description: "Mind blowing taste",
  image: "https://picsum.photos/200/300/?random",
  price:"$4.50",
},
{
  id:"3",
  title : "Chocolate mousse",
  description: "Unexplored flavors",
  image: "https://picsum.photos/200/300/?random",
  price:"$6.00",
},

];
const topDesserts = data.map(dessert => {
  return{
    content: `${dessert.title}-${dessert.description}`,
    price: dessert.price, 
  }
})
const App = () => {
  console.log(topDesserts);
  return(
    <>
    </>
  )
}

export default App
