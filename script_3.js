function pyramid(n) {

 

    for(let i=1; i<= n; i++){
  
      let str = ' '.repeat(n-i);
  
      let str2 = '*'. repeat(i*2 -1)
  
   
  
      console.log(str + str2 + str);
  
    }
  
  }
  

const nombrie = prompt("Donne un nombre : ");
const resultatt = pyramid(parseInt(nombrie));
