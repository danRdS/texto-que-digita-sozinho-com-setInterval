const palavras = ['Javascript', 'HTML 5', 'CSS 3'];
let intervaloDigitar, intervaloApagar, indexCaractere, indexPalavra = 0;

const digitarPalavra = () => {
    indexCaractere = 0;
    const palavraAnimada = document.getElementById('palavraAnimada');
    const palavraAtual = palavras[indexPalavra];

    intervaloDigitar = setInterval(() => {
        if(indexCaractere < palavraAtual.length) {
            palavraAnimada.textContent += palavraAtual.charAt(indexCaractere);
            indexCaractere++;
        } else {
            clearInterval(intervaloDigitar);
            setTimeout(() => {
                intervaloApagar = setInterval(() => {
                    if(indexCaractere >= 0) {
                        palavraAnimada.textContent = palavraAtual.slice(0, indexCaractere);
                        indexCaractere--;
                    } else {
                        indexPalavra = (indexPalavra + 1) % palavras.length;
                        clearInterval(intervaloApagar);
                        setTimeout(() => digitarPalavra(), 500);
                    }
                }, 50);
            }, 1000);
        }
    }, 100);
}
digitarPalavra();