import React from 'react'
import Input from "../../auth/Input"
const Create = () => {
  return (
    <section className='animationLeft' >
      <form>
        <Input type="text" name="Nome" />
        <Input type="number" name="Peso"/>
        <Input type="number" name="Idade"/>
        <input type="file"/>
        <button className='defaultBtn'>Enviar</button>
      </form>
    </section>
  )
}

export default Create