function tocaSom(IdElementoAudio){
    document.querySelector(IdElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    };
}