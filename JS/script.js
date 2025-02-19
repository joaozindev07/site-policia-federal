document.querySelectorAll('.imagem-carro-novo').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const x = e.clientX - item.offsetLeft;
        const y = e.clientY - item.offsetTop;
        const width = item.offsetWidth;
        const height = item.offsetHeight;

        const rotateX = (y / height - 0.5) * 10;  // Pequena rotação no eixo X
        const rotateY = (x / width - 0.5) * -10;  // Pequena rotação no eixo Y

        // Aumenta a escala e aplica rotação bem sutil
        item.querySelector('img').style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        item.querySelector('img').style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`; // Sombra suave
    });

    item.addEventListener('mouseleave', () => {
        // Volta à escala normal sem rotação
        item.querySelector('img').style.transform = 'scale(1) rotateX(0) rotateY(0)';
        item.querySelector('img').style.boxShadow = 'none'; // Remove sombra
    });
});
