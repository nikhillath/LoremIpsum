import { useState } from 'react'

import data from './data'
function App() {
const [count,setCount]=useState(1);
const [text,setText]=useState([]);

const handleChange=(e)=>{
  setCount(e.target.value)
}

const handleSubmit=(e)=>{
e.preventDefault();

let amount=parseInt(count);
setText(data.slice(0,amount))

}

  return (

    <article className='container'>
<h1 className='head'>tired of lorem ipsum</h1>

    <form className='form' onSubmit={handleSubmit}>

<label htmlFor="amount">Paragraph:</label>
<input className='input' type="number" name="amount" id="amount" value={count} min='1' max='8' onChange={handleChange} />
    <button className='btn'>Generate</button>
  
    </form>


 {text.map((para)=>{
return (
  <p key={nanoid()} className='para'>{para}</p>
)
 })}

    </article>
    
  )
}
import { nanoid } from 'nanoid';

export default App