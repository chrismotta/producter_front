import React from 'react'
import './style.css'

function calendarCard({data}){
    return (
        <div className='card'>
            {data.longName}
        </div>
    )
}

export default calendarCard