import React from 'react'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';


function Read() {
    const [data , setData] = React.useState([])

    const navigat = useNavigate()
    const url = "https://64874e11beba629727906d25.mockapi.io/api/Login"
   React. useEffect(() => {
      axios.get(url).then(res=>{
         setData(res.data);
       // console.log(res.data);
        
      })
  
    }, [url])

 
    const deleteitem = async (id)=>{
   await   axios.delete(`https://64874e11beba629727906d25.mockapi.io/api/Login/${id}`)
   navigat("/read")
    }

    const handleDelete = (id) => {
      axios.delete(`https://64874e11beba629727906d25.mockapi.io/api/Login/${id}`).then(() => {
        setData(data.filter(item => item.id !== id));
      });
    };
  
  return (
    <div>
     
    Read

    <ul>
    {data.map((item,id)=>{
      return (
    
        <li key={id}>
        <br/> <br/>
        {item.userName}

        
        <br/> <br/>
        <Link to="/Update">
        <button onClick={()=>localStorage.setItem("id",item.id)}>Update</button></Link>
        <br/> <br/>
        <button onClick={()=>deleteitem(item.id)}>delete</button> <br/> 
        <div key={item.id}>
          <h1>{item.name}</h1>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
        </li>
        
      )
    })}
    </ul>
    </div>
  )
}

export default Read




