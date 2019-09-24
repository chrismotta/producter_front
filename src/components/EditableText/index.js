import React, { useState } from "react";
import moment from "moment";
import Cookie from "js-cookie";

import Quote from "../Quote";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "../SkeletonText/Skeleton";

export default function({ data }) {
    const [showAddButton, setShowAddButton] = useState(false)
    const [showAddInput, setShowAddInput] = useState(false)
    const [quotesList, setQuotesList] = useState(data)
    const [inputValue, setInputValue] = useState("")

    return (
        <div
            className={style.textContainer}
            onMouseEnter={() => {
                if (!showAddInput) setShowAddButton(true)
            }}
            onMouseLeave={() => {
                setShowAddButton(false)
            }}
        >
            {(showAddButton && quotesList) && (
                <button
                    className={`btn btn-info ${style.addButton}`}
                    onClick={() => {
                        setInputValue("")
                        setShowAddButton(false);
                        setShowAddInput(true);
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            )}

            <div className={style.text}>
                {showAddInput && (
                    <div className={style.addInput}>
                        <textarea 
                            autoFocus
                            rows="3"
                            className="form-control" 
                            onChange={e => {
                                setInputValue(e.target.value)
                            }}
                            value={inputValue}
                        />
                        <div className="text-right">
                            <button 
                                className={style.submitButton}
                                onClick={() => {
                                    let rows = inputValue.split(/\n/)
                                    let htmlText = <span>{
                                        rows.map(item => (<p>{item}</p>))
                                    }</span>
                                    setQuotesList([
                                        {
                                            text: htmlText,
                                            user: Cookie.get('user-name'),
                                            date: new Date()
                                        },
                                        ...quotesList 
                                    ])
                                    setShowAddInput(false)
                                    setShowAddButton(true)
                                }}
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button
                                className={style.cancelButton}
                                onClick={() => {
                                    setShowAddInput(false)
                                    setShowAddButton(true)
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )}
            
                <div className={style.quoteContainer}>
                    {
                        quotesList ?
                        quotesList.map((item, index) => (
                            <Quote
                                text={item.text}
                                user={item.user}
                                date={moment(item.date)
                                    .locale("es")
                                    .fromNow()}
                                key={index}
                            />
                        ))
                        :
                        <>
                            <Skeleton height="16px" width="100%"/>
                            <Skeleton height="16px" width="90%"/>
                            <Skeleton height="16px" width="60%"/>
                            <Skeleton height="16px" width="100%"/>
                            <Skeleton height="16px" width="90%"/>
                            <Skeleton height="16px" width="60%"/>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
