import React from 'react'
import Button from './Button.js'


const ButtonList = (props) => {
    const Buttons = props.types.map( button => {
    return <Button key={props.types.id} type={props.types.type}/>}
    ) 
    return Buttons
}
export default ButtonList;