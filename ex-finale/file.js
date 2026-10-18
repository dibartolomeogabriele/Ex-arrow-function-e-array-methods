const prodotti = [
    { nome: 'cappello', prezzo: 25 },
    { nome: 'maglietta', prezzo: 20 },
    { nome: 'felpa', prezzo: 40 },
    { nome: 'giacca', prezzo: 55 },
];

prodotti.forEach(prodotto => {
    console.log(`Prodotto disponibile: ${prodotto.nome}`)
});

const applicaSconto = prezzo => (prezzo * 0.9);

const prodottiScontati = prodotti.map(prodotto => {
    nome: prodotto.nome;
    prezzo: applicaSconto(prodotto.prezzo)
});

const trovato = prodotti.find(prodotto => prodotti.includes('l'));
const sopraVenti = prodotti.filter(prodotto => prodotto.prezzo > 20);
const prodottoEconomico = prodotti.some(prodotto => prodotto.prezzo < 20);
const tuttiValidi = prodotti.every(prodotto => prodotto.prezzo > 0);

console.log(prodottiScontati);
console.log(trovato);
console.log(sopraVenti);
console.log(prodottoEconomico);
console.log(tuttiValidi);