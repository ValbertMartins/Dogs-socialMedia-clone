import React from 'react'
import styles from "../../css/Modal.module.css"
import SendComent from '../svg/SendComent'


const Coment = () => {
  return (
    <section className={styles.comentContainer}>


      <article>
        Coments
      </article>


      <article className={styles.inputComentContainer}>
        <form>
          <input type="text" placeholder='Comente...' />
          <button>
            <SendComent/>
          </button>
        </form>
      </article>

    </section>
  )
}

export default Coment