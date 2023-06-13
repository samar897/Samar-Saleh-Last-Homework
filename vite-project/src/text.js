import React from 'react'
import './App.css'
function App() {
console.log("render in my component");
const [count , setCount]= React.useState(0)
const [info , setInfo]= React.useState("posts")
const [ data , setData]= React.useState([])

const url = `https://jsonplaceholder.typicode.com/${info}`

React. useEffect(() => {
console.log("render with effect");
fetch(url)
      .then(response => response.json())
      .then((data)=>setData(data))

  },[url]);
  // ...

  const deleteItem =(id)=>{
console.log(id);
    console.log("deleted");
  }
  
  return (
<>

{data.map(((item)=>{
  return (
    <>
    <p>{item.body}</p>
    <p>{item.title}</p>
    <button onClick={()=>deleteItem(item.id)}>delet</button>
    </>
  )
}))}
<p>hello</p>
<button onClick={()=>setCount(count+1)}>click</button><br></br>
<button onClick={()=>setInfo("users")}>users</button><br></br>
<button onClick={()=>setInfo("posts")}>Post</button>

{count}


</>
  )
}

export default App