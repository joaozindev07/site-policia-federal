document.querySelectorAll('.imagem-carro-novo').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const x = e.clientX - item.offsetLeft;
        const y = e.clientY - item.offsetTop;
        const width = item.offsetWidth;
        const height = item.offsetHeight;

        
        const depthX = (x / width - 0.5) * 10; 
        const depthY = (y / height - 0.5) * 2; 

        item.querySelector('img').style.transform = `scale(1.1) translateZ(30px) translateX(${depthX}px) translateY(${depthY}px)`;
        item.querySelector('img').style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`; 
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1) translateZ(0) translateX(0) translateY(0)';
        item.querySelector('img').style.boxShadow = 'none'; 
    });
});