var nome, cognome, eta, colore;

//prompt
// inseriamo il nome
nome = prompt('Inserisci il tuo nome: ');
// possiamo usare ad esempio charAt() e substring() per convertire il nome in un formato corretto
// trasformiamo la prima letter in maiuscolo
var primaLettera = nome.charAt(0).toUpperCase();
// //trasformiamo il resto del nome in minuiscolo
var restoNome = nome.substring(1).toLowerCase();
 // unisco il nome
var nome = primaLettera + restoNome;
console.log(nome);


// inseriamo il cognome
cognome = prompt('Inserisci il tuo cognome: ');
// possiamo usare ad esempio charAt() e substring() per convertire il cognome in un formato corretto
// trasformiamo la prima letter in maiuscolo
var primaLettera = cognome.charAt(0).toUpperCase();
// //trasformiamo il resto del cognome in minuiscolo
var restocognome = cognome.substring(1).toLowerCase();
 // unisco il cognome
var cognome = primaLettera + restocognome;
console.log(cognome);

//Quanti anni hai? Allora sei nato nel...
var eta = prompt('Inserisci la tua eta');
var annoInCorso = 2020;
var annoDiNascita = annoInCorso - eta;
console.log(eta);

// colore preferito
colore = prompt('Dimmi il tuo colore preferito: ');
// //trasformiamo il colore in maiuscolo
var coloreGrande = colore.substring().toUpperCase();
console.log(coloreGrande);

//document.getElementById('nome').innerHTML =nome;
//document.getElementById('cognome').innerHTML =cognome;
//document.getElementById('colore').innerHTML =colore;
//document.getElementById('eta').innerHTML =annoDiNascita;

document.getElementById('password').innerHTML +=nome+cognome+coloreGrande+annoDiNascita;