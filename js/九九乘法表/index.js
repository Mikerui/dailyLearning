// x*y = x*y
for (let i = 0; i <= 9; i++) {
  for (let j = 1; j <= i; j++) { 
    document.write(' '+ j+"*"+i+"="+i*j);
  }
  document.write(' <br>');
}