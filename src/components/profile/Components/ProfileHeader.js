import React from 'react'
import NavigateButtons from "./NavigateButtons"
import ButtonMobileNavigate from './ButtonMobileNavigate'
import styles from "../../../css/Profile.module.css"

const ProfileHeader = ({setTitle, title}) => {
  
  const [ widthWindow , setWidthWindow ] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthWindow(window.innerWidth)
    })
  }, [])

  return (
    <>
      <div className={styles.dashboardContainer}>
          <h1 className={styles.title}>{title}</h1>
        {
          widthWindow < 640 ? <ButtonMobileNavigate setTitle={setTitle}/> : 
            <article className={styles.navigateButtonsContainer}>
              <NavigateButtons setTitle={setTitle}/>
            </article>
        }        
        </div>
    </>
  )
}

export default ProfileHeader