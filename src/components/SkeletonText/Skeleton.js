import React from 'react'
import style from './style.module.scss'

export default function({width, height}){
    return <span 
        className={style.skeleton} 
        style={{width, height}} 
        ></span> 
} 