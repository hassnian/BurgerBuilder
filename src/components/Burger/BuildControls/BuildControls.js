import React from 'react'
import './BuildControls.css'
import BuildControl from'./BuildControl/BuildControl'
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]

export default function BuildControls(props) {
  return (
    <div className="BuildControls">
    <p>Current price:<strong> {props.price.toFixed(2)}€</strong></p>
      {controls.map(ctrl=>{
         return <BuildControl 
         added={()=>{props.ingredientAdded(ctrl.type)}} 
         removed={()=>{props.ingredientRemoved(ctrl.type)}} 
          disabled={props.disabled[ctrl.type]}
         key={ctrl.label} 
         label={ctrl.label}/>
      })}
      <button disabled={!props.purchasable} className="OrderButton" onClick={props.ordered}>ORDER NOW!</button>
    </div>
  )
}
