// BotNest — interação visual básica

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelectorAll('.bot-card').forEach(card => {
  card.addEventListener('click', () => {
    card.animate(
      [
        { transform: 'translateY(-5px) scale(1)' },
        { transform: 'translateY(-5px) scale(.985)' },
        { transform: 'translateY(-5px) scale(1)' }
      ],
      { duration: 180, easing: 'ease-out' }
    );
  });
});

console.log('🪺 BotNest carregado!');
