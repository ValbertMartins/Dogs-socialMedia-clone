import React from 'react'
import Input from "../../auth/Input"
import {Auth} from "../../../context/Auth"
import styles from '../../../css/CreatePost.module.css'
import { useNavigate} from 'react-router-dom'
const Create = () => {

  const [ picture , setPicture ] = React.useState({})
  const [ name , setName ] = React.useState("")
  const [ weigth , setWeight ] = React.useState("")
  const [ age , setAge ] = React.useState("")
  const [ picturePreview , setPicturePreview ] = React.useState(null)
  const [ isLoading , setIsLoading ] = React.useState(false)

  const navigate = useNavigate()
  const { fetchApi , localToken } = React.useContext(Auth) 
  

  React.useEffect(() => { 
    document.title = `Create | Dogs`
  } , [])

  
  
  const handleShowPicturePreview = async (event) => {
    const image = event.target.files[0]
    if(image){
      setPicture(event.target.files[0])
      setPicturePreview(URL.createObjectURL(image))
    } else { 
      setPicturePreview(null)
    }
  
  }
  



  const handleSubmitPicture = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = new FormData()

    formData.append("img", picture)
    formData.append("nome", name)
    formData.append("peso", weigth)
    formData.append("idade", age)

    const [ , response ] = await fetchApi(`https://dogsapi.origamid.dev/json/api/photo`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localToken}`    
      },
      body: formData

    })
    setIsLoading(false)
    if(response.ok)
      return navigate("/profile")
    
  }

  return (
    <section className={`animationLeft ${styles.createPostContainer}`} >

      <div className={styles.createPostInputContainer}>
        <form onSubmit={handleSubmitPicture}>
          <Input type="text" name="Nome" setInput={setName} value={name} required/>
          <Input type="number" name="Peso" setInput={setWeight} value={weigth} required/>
          <Input type="number" name="Idade" setInput={setAge} value={age} required/>
          <input type="file" onChange={handleShowPicturePreview}/>
          <button className='defaultBtn' 
            style={ isLoading ? {
              cursor: "wait",
            } : {}
          }
          >Enviar</button>
        </form>
      </div>

    {
      picturePreview && 
        <div className={styles.pictureContainer}>
          <img src={picturePreview} alt="previewPicture"/>
        </div>
    }
    </section>
  )
}

export default Create