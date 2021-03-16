let num = [5, 8, 10]

num[3] = 7; // Cria a posião e Add o numero
num.push(9); // Add o numero na ultima posição
console.log(num.length); // Qntidade de elementos
console.log(num)
console.log(num.reverse()); // Poe em ordem contaria
console.log(num.sort()); // Poe em ordem crescente
console.indexOf(5) // Preocura o valor pelo index
// for(let pos = 0; pos < num.length; pos++){
//     console.log(num[pos]);
// }

for(let pos in num){
     console.log(num[pos]);
  
}
