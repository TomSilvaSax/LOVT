let numeroPares = [2,4,6,8,10];

numeroPares.map(function(valor){
    console.log(valor *2)
});

//array-iii map

let numerosParesDobro = numeroPares.map(function(valor){
    return valor *2
});

console.log(numerosParesDobro);

//filter 

let numerosFiltrados = numeroPares.filter(function(valor){
    return valor < 6
});
console.log(numerosFiltrados);

//reduce

let somaPares = numeroPares.reduce(function(acum, valor){
    return acum + valor;
});
console.log(somaPares);

//forech

numeroPares.forEach(function(valor,  indice){
    console.log("O indice " + indice + " tem o valor: " + valor);
});

//find

let procura = numeroPares.find(function(valor){
    return valor < 8;
});
   console.log(procura);