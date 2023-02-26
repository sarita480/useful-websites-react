import React from 'react'
//const Button=({name})=>{return <a href="www.."><button className="button">{name}</button></a>}
//this is another way of doing this 
const Button = (props) =>
{
    return <a href={props.link}><button className="button">{props.name}</button></a>
}
export default Button