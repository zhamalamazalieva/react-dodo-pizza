import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// const result = [].concat.apply([], [[1],[2,3],[4]]);
// console.log(result); // [ 1, 2, 3, 4 ]

// const flattenDeep = (arr) => {
//   let result=[]
//   for (let i=0; i<arr.length; i++){
//     const value=arr[i] 
//       if(!Array.isArray(value)){
//         result.push(value);
//       }
//       else {
//         result = result.concat(flattenDeep(arr[i]))
//       }
//   }
//   return result;
// }
// console.log(flattenDeep([[1],[2,[3],4], [5]]))

// const flatten = (arr) => {
//   let result=[]
//   for (let i=0; i<arr.length; i++){
     
//       if(!Array.isArray(arr[i])){
//         result.push(arr[i]);
//       }
//       else {
//         result = [].concat(...arr) 

//       }
//   }
//   return result;
// }
// console.log(flatten([[1],[2,[[3],4]], [5]]))


// const pull = (arr1, arr2) => {
//   let result = [];
//   for (let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//       if(i==arr2[j])
//       result.push(arr1[i])
//     }
//   }
//   return result;
// }
// console.log(pull(['a', 'b','r','y','y'], [1,2]))