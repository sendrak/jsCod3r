let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('Os Verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os Falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN); //Not a mumber
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...');
console.log(!!('' || null || 0 || ' ' || 123));

let nome = '';
console.log(nome || 'Desconhecido');