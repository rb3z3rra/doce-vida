import React from 'react'
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

    const handleOnSubmit =(e) => {
        e.preventDefault();
        navigate('/menu');
    };
  return (
    <fieldset className='w-36'>

    <form onSubmit={handleOnSubmit} >
    <div>
      <label htmlFor="">Nome:</label>
      <input type="text"/>
    </div>
    <div>
      <label htmlFor="">Email:</label>
      <input type="email"/>
    </div>
    <div>
      <label htmlFor="">Telefone:</label>
      <input type="text"/>
    </div>
    
    <button type="submit" className='bg-primary text-white p-3'>Enviar</button>
  </form>
    </fieldset>
  )
}

export default Contact