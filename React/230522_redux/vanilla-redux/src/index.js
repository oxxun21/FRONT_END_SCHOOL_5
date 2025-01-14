// import React from "react";
// import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

import {createStore} from 'redux';

const addNumber = () => {
  store.dispatch({ type: 'ADD' });
}

const substractNumber = () => {
  store.dispatch({ type: 'SUBSTRACT' });
}

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      minus.disabled = false;
      return state + 1;
    case 'SUBSTRACT':
      plus.disabled = false;
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// UI Update - text
const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerHTML = store.getState();
  totalPrice.innerHTML = store.getState() * PRICE;
};

store.subscribe(handleWrite);

// // State Change
// const addNumber = () => {
//   count += 1;
//   minus.disabled = false;
//   updateResult(count);
// };

// // State Change
// const substractNumber = () => {
//   count -= 1;
//   plus.disabled = false;
//   updateResult(count);
//   if(count === 0){
//     minus.disabled = true;
//   }
// };

// // Init
// number.innerHTML = count;
// updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);