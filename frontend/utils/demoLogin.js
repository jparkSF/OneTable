
document.addEventListener('onLoad', () => {
  let email_selector = $('#demo-login-email');
  let password_selector = $('#demo-login-password');
  console.log(email_selector);
  console.log(password_selector);
  console.log("adf")
})
function demoLogin() {
  const EMAIL_PHRASE = "jpark830@me.com";
  const EMAIL_SELECTOR = $('#demo-login-email');
  const PASSWORD_PHRASE = "**************";
  const PASSWORD_SELECTOR = $('#demo-login-password');
  
  let PHRASE_COUNT = 0;

  function randDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  function printLetter(string, el) {
    let arr = string.split('');
    let input = el;
      
    let origString = string;
    let curPlace = $(input).attr("placeholder");
      
    let placeholder = curPlace + arr[PHRASE_COUNT];

    setTimeout(function () { 
      $(input).attr("placeholder", placeholder);
      PHRASE_COUNT++;
      
      if (PHRASE_COUNT < arr.length) {
        printLetter(origString, input);
      }     
    }, randDelay(50, 90));  
  }

  function placeholderEmail(callback) {

    printLetter(EMAIL_PHRASE, EMAIL_SELECTOR);

    setTimeout(() => callback(), 2000);
    
  }  
  function placeholderPassword() {
    printLetter(PASSWORD_PHRASE, PASSWORD_SELECTOR);
  }
  
  
  
  // placeholderEmail(placeholderPassword)

};

export default demoLogin;