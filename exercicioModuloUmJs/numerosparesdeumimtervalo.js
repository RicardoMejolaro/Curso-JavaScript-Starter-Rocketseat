
function numerosPares(num1, num2) {
  for(i = num1; i <= num2; i++) {
    resultado = Number(i%2);
    if(resultado == 0) {
       console.log(i);
    }
  }
}
numerosPares(32, 321);
