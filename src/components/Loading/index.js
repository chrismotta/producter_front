import React from 'react'
import style from './style.module.scss'
import Spinner from 'react-bootstrap/Spinner'

export default function(){
    return (
        <div className={style.loading}>
            <Spinner animation="grow" className={style.dot} />
            <Spinner animation="grow" className={style.dot} />
            <Spinner animation="grow" className={style.dot} />
        </div>
    )
}