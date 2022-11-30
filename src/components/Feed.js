import React from 'react'
import {useFetch} from '../hooks/useFetch'
import styles from "../css/PostCollection.module.css"
import { Link } from "react-router-dom"
import PostCollection from './PostCollection'
const Feed = () => {

    const [ feed, setFeed ] = React.useState([])
    const [ currentPage, setCurrentPage] = React.useState(1)


    React.useEffect(() => {
      fetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`)
        .then( response => response.json())
          .then( json => { 
            setFeed( oldFeed => [...oldFeed, json ] )
          })

    }, [currentPage])
 
   
    console.log(feed)
    const sentinel = React.useRef()
    
    // React.useEffect(() => {
    //   const observer = new IntersectionObserver((entries) => {
    //     if(entries[0].isIntersecting)  {
    //       setCurrentPage(oldValue => oldValue + 1)
    //     }
    //   })
    //   observer.observe(sentinel.current)
    // }, [])

    // console.log(currentPage)


    

  return (

    <section className={`container`}>
       
       {feed.map( (collectionPosts,index) => {
          return (
            <PostCollection collectionPosts={collectionPosts} index={index}/>
          )
        }
        
       )}



       <div onClick={() => setCurrentPage( old => old + 1)} ref={sentinel} style={{border:"1px solid red",marginTop: "15rem"}}>FOOTER</div>
       
    </section>

  )

}

export default Feed