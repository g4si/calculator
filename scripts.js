// functions for basic maths operators:
function add( num1, num2 ){
  return num1 + num2;
}
function subtract(num1, num2){
  return num1 - num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function divide(num1, num2){
  if (num2 === 0) return "can't devide";
  return num1/num2;
}

// choose which operate (functions above) must execute.
function operate( number1, operator, number2 ){
  let resault;
  switch (operator){
    case '+':
      resault = add( number1, number2 );
      break;
    case '-':
      resault = subtract( number1, number2 );
      break;
    case '*':
      resault = multiply( number1, number2 );
      break;
    case '/':
      resault = divide( number1, number2 );
      break;
  }
  return resault;
}

// displays changes and what's happening.
function displayer( strBtn, resault = null ){
  let displayer = document.getElementById("displayer");
  let str = displayer.textContent;
  let arrStr = str.split(' ');

  if ( strBtn === '=' )// '=' and 'clear'
    displayer.textContent = `= ${operate( Number(arrStr[0]), arrStr[1], Number(arrStr[2]) )}`;
  else if (strBtn === 'cl'){
    displayer.textContent = '';
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
  }
  else if ( strBtn >= '0' && strBtn <= '9' ){ // numbers
    if (arrStr[0] == '=')
      displayer.textContent = strBtn; // clears everything and sets new number
    else
      displayer.textContent += strBtn;
  } 
  // this works for +-*/
  else{
    if ( arrStr[2] !== undefined )
      displayer.textContent = `${operate( Number(arrStr[0]), arrStr[1], Number(arrStr[2]) )} ${strBtn} `; // example: 2 + 3 = 5 '/'
    else if ( arrStr[0] !== undefined ) // example: 2 '+' 3
      displayer.textContent += ` ${strBtn} `;
  }
  // and if you set a operator first it will do nothing.

  // arrStr.push( strBtn );
}

let number1, number2, operator;

let numbers = document.querySelectorAll( 'button' );

numbers.forEach(button => {
  button.addEventListener( "click", () => {
    displayer(button.textContent);
  });
})