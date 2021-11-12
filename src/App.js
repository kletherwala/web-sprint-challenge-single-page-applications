import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
      <Link to="/"><button id="home-button">Home</button></Link>
      <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
      <Switch>
      <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;





// import React, {useState} from "react";
// import { Link, Route, Switch } from "react-router-dom";
// import Home from "./Components/Home";
// import OrderForm from "./Components/Form";
// const initOrderList = [];

// const initOrderForm = {
//   name: '',
//   size: '',
//     onion: false,
// }

// const App = () => {

//   const [orderList, setOrderList] = useState(initOrderList)
//   const [orderForm, setOrderForm] = useState(initOrderForm)
//   const [buttonDisabled, setButtonDisabled] = useState()
  
//   const formSubmit = () => {
//     const newOrder = {
//       name: orderForm.name,
//       size: orderForm.size,
//       onion: orderForm.onion,
//     }
//   }

//   return (
//     <div>
//       <h1>Lambda Eats</h1>
//       <nav>
//       <Link to="/"><button id="home-button">Home</button></Link>
//       <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
//       </nav>
//       <Switch>
//       <Route path="/pizza"/> value={orderForm}
//         <Route path="/" component={Home} />
//       </Switch>
//     </div>
//   );
// };
// export default App;