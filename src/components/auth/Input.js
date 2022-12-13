import React from 'react'

const Input = ({type , name , setInput, value , ...props}) => {

  const [ error , setError ] = React.useState(false)
  const [ validateEmail , setValidateEmail ] = React.useState(false)


  const verifyEmail = target => {

    if(name === "Email"){
      
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(target.value)
      setValidateEmail(emailRegex)
      if(!emailRegex){
        setError(true)
      }
    }
    
  }

  const handleBlur = ({target}) => {
    verifyEmail(target)

    if(target.value.length === 0) setError(true)
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
          {...props}
        />

        {error && 
          <p 
            style={{
              color: "red",
               margin: "0.4rem 0"
            }}>
            {
              name === "Email" && validateEmail === false ? "Insira um email válido" : "Preencha um valor" 
            }
          </p>
        }
    </>
    
  )
}

export default Input