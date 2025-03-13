import React from 'react'
import {IconData} from "../components/MockData/data"
import { data } from 'autoprefixer'
import { div } from 'motion/react-client'

const Icon = () => {
  return (
    <div>
        <div>
            <h1>FIND YOUR ICON</h1>
        </div>
        <div>
            <div>
                {IconData.map((data)=>(
                    <div key={data.id}>
                        <div>
                            <h1>{data.name}</h1>
                            <data.data/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Icon