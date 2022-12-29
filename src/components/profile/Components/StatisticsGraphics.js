import React from 'react'
import { VictoryPie , VictoryBar, VictoryChart , VictoryAxis} from "victory"
import styles from "../../../css/Statistics.module.css"


const StatisticsGraphics = ({data}) => {
  return (
    <div className={styles.statisticsContainer}>
      
      <VictoryPie data={data} x="title" y="acessos"
        innerRadius={70} 
        width={600}
        />  
      <VictoryChart domainPadding={40}>
        <VictoryAxis dependentAxis />
        <VictoryAxis 
          tickFormat={data.map( post => post.title)}/>
        <VictoryBar data={data} x="title" y="acessos" />
      </VictoryChart>
  </div>
  )
}

export default StatisticsGraphics