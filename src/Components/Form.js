// import React, { useState } from "react";


// const Form = (props) => {

//     const [formValues, setFormValues] = useState() // object
//     // const [formErrors, setFormErrors] = useState(initialFormErrors) // object
//     // const {change,values,submit } = props

//     const onChange = (e) => {
//         const { name, value, checked, type} = e.target
//         const realValue = type === 'checkbox' ? checked : value;
//         change(name, realValue)
// }
//     const onSubmit = (e) => {
//         e.preventDefault();
//   }
//     return (
//         <div className="Pizza-Form">
//                 <h1>Pizza Form</h1>
//                 <form onSubmit={onSubmit} id="pizza-form">
//                     <input
//                         name='name'
//                         id="name-input"
//                         />
//         <label>Size
//             <input   
//                 id='size-dropdown'/>
//                 <select>
//                     <option value=''>- Select an option -</option>
//                     <option value='small'>Student</option>
//                 </select>
//         </label>
//         <label>Toppings
//                 <input
//                     type='checkbox'
//                     name='chicken'
//                     checked={values.chicken}
//                     onChange={onChange}
//                     />
//         </label>

//                 </form>
//         </div>
//     );
// }

// export default Form;


import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';
import formSchema from "../Validation/formSchema";

const initialVal = {
  name: "",
  size: "",
  special: "",
  onions: false,
  spinach: false,
  chicken: false,
  olives: false,
  instructions: "",
}

function Form() {

const [isValid, setIsValid] = useState(true);

const [form, setForm] = useState(initialVal);

const [errorState, setError] = useState({
    name: "",
    size: "",
    special: "",
    onions: "",
    spinach: "",
    chicken: "",
    olives: "",
    instructions: "",
})

useEffect(() => {formSchema.isValid(form)
  .then(valid => {
    setIsValid(!valid)
  });
  }, [form]);

const validate = (e) => {
 yup.reach(formSchema, e.target.name)
 .validate(e.target.value)
 .then( valid => {
  setError({
      ...errorState,
      [e.target.name]: ""
    })

 })
 .catch(error => {
//    console.log(error.errors)
   setError({
     ...errorState,
     [e.target.name]: error.errors[0]
   })
 })
};

const onChange = e => {
//   e.persist();
  validate(e)
  let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
  setForm({...form, [e.target.name]: value });
};

const formSubmit = (e) => {
  e.preventDefault();
  axios.post('https://reqres.in/api/orders', form)
  .then(res => {console.log('RES', res)})
  .catch(err => console.log(err.response));
  setForm(initialVal)
};

return (
  <div>
    <h1>Order below</h1>

<form onSubmit={formSubmit} id="pizza-form">
  <label>Name: </label>
  <input 
    id="name-input" 
    name="name"
    type="text" 
    placeholder="Name" 
    value={form.name} 
    onChange={onChange} 
  />

  {errorState.name.length > 1 ? <p className="error">{errorState.name}</p> : null}

<p><label>Size </label>
  <select id="size-dropdown" name="size" value={form.size} onChange={onChange}>
      <option>Select One</option>
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Extra Large">Large</option>
    </select>
  </p>
<p className="error">{errorState.size}</p>

  <label>Toppings:</label>
<p>
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.onions} 
    onChange={onChange} 
    name="onions" 
  />onions
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.spinach} 
    onChange={onChange} 
    name="spinach" 
  />spinach
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.chicken} 
    onChange={onChange} 
    name="chicken" 
  />chicken
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.olives} 
    onChange={onChange} 
    name="olives" 
  />olives
  </p>

<p><label>Special Instructions </label>
  <textarea 
    name="instructions"
    id="special-text"
    placeholder="Instructions Here"
    value={form.instructions}
    onChange={onChange}
  /></p>

  <button name="order-button" id="order-button" disabled={isValid} type="submit">
    Submit Order
  </button>

</form>
</div>
);

}

export default Form; 
























// import React from 'react'

// function OrderForm (props) {

//     const {change,values,submit,disabled,errors } = props

//     const onChange = evt => {

//         const {name, value, checked, type} = evt.target

//         const valueToUse = type === 'checkbox' ? checked : value
//         change(name, valueToUse)
//     }

//     const onSubmit = evt => {
//         console.log(evt.target)
//         evt.preventDefault()
//         submit()
//     }

//     return (
//         <div>onSubmit={onSubmit}

//                     <div>
//                         <h2>Build Your Own Pizza</h2>
//                     </div>

//                     <div className='fullName'>
//                         <label> Full Name:
//                             <input
//                                 name='name'
//                                 type='text'
//                                 value={values.name}
//                                 onChange={onChange}
//                                 />
//                         </label>
//                     </div>

//                     <label> Choice of Size: 
//                         <select
//                             onChange={onChange}
//                             value={values.size}
//                             name='size'
//                         >
//                             <option value=''>---- select ----- </option>
//                             <option value='Small'>Small</option>
//                             <option value='Medium'>Medium</option>
//                         </select>
//                     </label>

//                         <h4>Toppings</h4>
//                         <div className='toppingColumn1'>


//                                 <label>onion
//                                     <input 
//                                         name='onion' 
//                                         type='checkbox'
//                                         checked={values.onion}
//                                         onChange={onChange}
//                                     />
//                                 </label>
//                         </div>
                   

//         </div>
//     )
// }  

// export default OrderForm; 
