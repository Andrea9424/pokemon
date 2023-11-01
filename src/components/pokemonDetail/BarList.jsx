import React from 'react'
import BarProgress from './BarProgress'

const BarList = ({stats}) => {
  return (
    <section>
        <h2>Stats</h2>
        <section>
            {
                stats?.map((stat) => <BarProgress key={stat.name} stat={stat} />)
            }
        </section>
    </section>
  )
}

export default BarList