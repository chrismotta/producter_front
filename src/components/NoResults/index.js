import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
library.add( faExclamationTriangle );

export default function(){
    return (
        <div className={style.no_results}>
            <div><FontAwesomeIcon icon={faExclamationTriangle} size="4x" /></div>
            <div>No hay ordenes para esta fecha</div>
        </div>
    )
}