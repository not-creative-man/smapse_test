import './App.css';
import './styles/active-button/active-button.css'
import './styles/button/button.css'
import './styles/button-text/button-text.css'
import './styles/link-button/link-button.css'
import './styles/nowrap/nowrap.css'

import Header from './modules/Header'
import Approdable from './modules/Approdable'
import Banner from './modules/Banner'
import $ from 'jquery'

function App() {

  $('#approdable__form').submit(function(e){
    e.preventDefault()
    alert('Button is pressed!!')
      // console.log('check');
      // $.post(
      //     'post.php',
      //     $('#approdable__form').serialize(),
      //     function(msg){
      //         if(msg){
      //             alert('Успешная отправка запроса!');
      //             document.getElementById("error-message").reset();
      //         } else{
      //             $('#error-message').style.display = 'block';
      //         }
      //     }
      // );
      return false;
  })

  return (
    <div className='main-wrapper'>
      <Header />
      <Banner />
      <Approdable />
    </div>
  );
}

export default App;
