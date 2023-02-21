import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

$(document).ready(function(){
  $('#approdable__form').submit(function(){
    let email = $('#approdable__form').serialize();
    console.log(email);
    let regex = new RegExp(/\w*%40\w*\.\w*/);
    if(!regex.test(email)){
      $('#error-message').css('display', 'block');
      $('#subscribe-input').css('border', '1px solid red');
    }
    else {
      $('#error-message').css('display', 'none');
      $('#subscribe-input').css('border', '1px solid #E6E6E6');
      alert('Данные в нужном формате отправлены!');
      $('#subscribe-input').val('');
    }    
    return false;
  })
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
