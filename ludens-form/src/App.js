import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function sendQuestion(){
      console.log("Button was clicked");
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1>Ludens kontakt skjema</h1>

        <div class="container">
          <div class="questionFlex">
            <div class="questionBox">
              <p>SPØR OSS OM DET DU LURER PÅ*</p>
              <textarea autofocus placeholder="Spør oss om noe"></textarea>
            </div>
          </div>


          <div class="infoFlex">

            <div class="smallBox" id="prenameBox">
              <p>FORNAVN*</p>
              <input placeholder=" Fornavn" />
            </div>

            <div class="smallBox" id="surnameBox">
              <p>ETTERNAVN*</p>
              <input placeholder=" Etternavn" required/>
            </div>
   
            <div class="smallBox" id="phoneBox">
              <p>TELEFON</p>
              <input placeholder=" +00 (landskode + nummer)" />
            </div>

            <div class="smallBox" id="emailBox">
              <p>E-POST*</p>
              <input placeholder=" navn@email.com" />
            </div>
          </div>
          <button type="submit" id="button" onClick={sendQuestion}>
          SEND FORESPØRSEL <i class="fa fa-envelope-o"></i></button>


        </div>
      </div>
    );
  }
}

export default App;
