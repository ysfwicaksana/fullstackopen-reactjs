import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Hello = (props) => {
  return (
    <div>
      <p>Hello world, {props.name } and age {props.age}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}


const App = () => {
  const name = 'Peter'
  const age = 10
   return (
    <>
      <p>Greeting</p>
      <Hello name="Yusuf" age={24 + 10}/>
      <Hello name={name} age={age}/>

      <Footer/>

    </>
   )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
