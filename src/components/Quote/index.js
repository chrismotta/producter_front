import React from 'react'
import style from './style.module.scss'

function quote({text, user, date}){
    return (
        <div className={style.quote__container}>
            <div className={style.quote__text}>{text}</div>
            <hr/>
            <div className={style.quote}>{`${user} - ${date}`}</div>
        </div>
    )
}

export default quote