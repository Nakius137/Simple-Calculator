import React from 'react'
import Button from './Button.js'
import "../styles.css"

const ButtonList = props => {
    const Buttons = props.types.map( button => {
    return <Button key={button.id} content={button.content} click={props.click} result={props.result}/>}
    ) 
    return Buttons
}
export default ButtonList;