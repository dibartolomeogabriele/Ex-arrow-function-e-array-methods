function prezzoFinale(prezzo) {
    return prezzo * 1.22;
}

const prezzoFinaleArrow = prezzo => prezzo * 1.22;

console.log(prezzoFinale(100));
console.log(prezzoFinaleArrow(100));