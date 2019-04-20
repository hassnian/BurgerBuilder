import React from 'react'
import Button from'../../UI/Button/Button'
const OrderSummary=(props)=> {
    const ingredientsSummary=Object.keys(props.ingredients)
    .map((igKey,i)=>{
        return(
            <li key={igKey+i}>
               <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>
        )
    })
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>These are the ingredients that you have in your burger :</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue with Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </React.Fragment>
  )
}

export default  OrderSummary