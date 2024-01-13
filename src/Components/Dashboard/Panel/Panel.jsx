import React from 'react'
import styles from './Panel.module.css'
import Midpanel from "../Midpanel/Midpanel"
import LastPanel from "../Lastpanel/Lastpanel"


function Panel() {
  return (
    <div className={styles.Panel}>
      <Midpanel/>
      <LastPanel/>
    </div>
  )
}


export default Panel
