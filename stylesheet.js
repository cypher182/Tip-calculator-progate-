body {
    font-family: Roboto;
    background: #8E0E00;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #8E0E00, #1F1C18);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #8E0E00, #1F1C18);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  #container {
    height: 525px;
    width: 360px;
    margin: 100px auto;
    background: #f7f7f7;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
  }
  
  h1 {
    background: #1F030C;
    color: white;
    margin: 0;
    padding: 10px 100px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: normal;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  
  p {
    padding-left: 20px;
  }
  
  form input[type="text"] {
    width=90px;
  }
  
  input {
    padding-left: 20px;
  }
  
  #billamt {
    font-size: 14px;
    /*color: #2980b9;*/
    color: #red;
    background-color: #f7f7f7;
    width: 60%;
    padding: 5px 5px 8px 8px;
  }
  
  #billamt:focus {
    background: #fff;
    border: 3px solid #2980b9;
    outline: none;
  }
  
  #peopleamt {
    width: 60%;
    padding: 5px 5px 8px 8px;
    margin-left: 20px;
    color: #red;
    background-color: #f7f7f7;
    font-size: 14px;
  }
  
  .dollarSign {
    display: inline;
  }
  
  #serviceQual {
    padding: 13px 13px 20px 20px;
    margin-left: 20px;
    font-size: 25px;
  }
  
  button {
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin: 30px auto;
    background: #AD133A;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    font-size: 17px;
    color: white;
  }
  
  button:hover {
    background: #4c2827;
    border-bottom-color: #111;
  }
  
  button:active {
    position: relative;
    top: 1px;
  }
  
  #totalTip {
    font-size: 30px;
    margin-top: 5px;
    text-align: center;
  }
  
  #totalTip:before {
    content: "Tip amount";
    font-size: 20px;
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }
  
  #totalTip sup {
    font-size: 20px;
    top: -18px;
  }
  
  #totalTip small {
    font-size: 20px;
    font-weight: bold;
    display: block;
  }