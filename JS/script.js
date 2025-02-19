document.querySelectorAll('.imagem-carro-novo').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const x = e.clientX - item.offsetLeft;
        const y = e.clientY - item.offsetTop;
        const width = item.offsetWidth;
        const height = item.offsetHeight;

        const rotateX = (y / height - 0.5) * 20;  // Rotação no eixo X
        const rotateY = (x / width - 0.5) * -20;  // Rotação no eixo Y

        // Aumenta a escala e aplica rotação
        item.querySelector('img').style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        item.querySelector('img').style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3)`; // Sombra para dar profundidade
    });

    item.addEventListener('mouseleave', () => {
        // Volta à escala normal e sem rotação
        item.querySelector('img').style.transform = 'scale(1) rotateX(0) rotateY(0)';
        item.querySelector('img').style.boxShadow = 'none'; // Remove sombra
    });
});
