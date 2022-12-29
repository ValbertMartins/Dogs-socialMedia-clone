/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { createStatisticsOptions } from '../../../services/api/requestOptions'
import { Auth } from "../../../context/Auth"
import axios from 'axios'
import styles from "../../../css/Statistics.module.css"
import Loading from '../../Loading'
const StatisticsGraphics = React.lazy(() => import('./StatisticsGraphics'))

const Statistics = () => {


  const [ totalAccess , setTotalAccess ] = React.useState(null)
  const [ dataAcess , setDataAcess ] = React.useState([])
  const [ isLoading , setIsLoading ] = React.useState(true)
  React.useEffect(() => { 
    document.title = `Statistics | Dogs`
  } , [])
  const { localToken } = React.useContext(Auth)
  
  React.useEffect(() => { 
    async function requestStatistics(){
      const requestConfig = createStatisticsOptions(localToken)
      const response = await axios(requestConfig)
      const { data } = response
      setTotalAccess(data.reduce( (acc,current) => acc + Number(current.acessos),0))
      setDataAcess(data.map( ({acessos, ...rest}) => ({...rest,acessos: Number(acessos)})))
      setIsLoading(false)
      
    }
    requestStatistics()
  },[])

  return (
    <>
    { isLoading ? <Loading/> : 
    
      <section className='animationLeft'>
        <div className={styles.statisticsCountContainer}>
          <h1 className={styles.acessosTotais}>Acessos: {totalAccess}</h1>
        </div>
        <React.Suspense fallback={<div></div>}> 
          <StatisticsGraphics data={dataAcess}/>
        </React.Suspense>
      </section>
    }
</>
  )
}

export default Statistics