/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { createStatisticsOptions } from '../../../services/api/requestOptions'
import { Auth } from "../../../context/Auth"
import axios from 'axios'
import styles from "../../../css/Statistics.module.css"
import StatisticsGraphics from './StatisticsGraphics'


const Statistics = () => {


  const [ totalAccess , setTotalAccess ] = React.useState(null)
  const [ dataAcess , setDataAcess ] = React.useState([])
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
      
    }
    requestStatistics()
  },[])

  console.log(dataAcess)
  return (

    <section className='animationLeft'>
      <div className={styles.statisticsCountContainer}>
        <h1 className={styles.acessosTotais}>Acessos: {totalAccess}</h1>
      </div>
      <StatisticsGraphics data={dataAcess}/>
    </section>
  )
}

export default Statistics