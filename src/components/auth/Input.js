import React from 'react'

const Input = ({type , name , setInput, value ,  ...props}) => {

  const [ error , setError ] = React.useState(false)

  const handleBlur = ({target}) => {
    if(target.value.length == 0) setError(true)
  }

  const handleChange = ({target}) => {
    if(target.value.length > 0) setError(false)
    setInput(target.value)
  }

  return (
    <>
        <label htmlFor={name} className="inputLabel">{name}</label>
        <input 
          type={type} 
          id={name} 
          className="inputForm"
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={value}
        />

        {error && <p style={{color: "red", margin: "0.4rem 0"}}>Preencha um valor.</p>}
    </>
    
  )
}

export default Input