document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    
    // 1. Alterna a classe 'active' ao clicar no botão
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // 2. Fecha o menu ao clicar em um link (navegação interna)
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'active' para fechar o menu
            mainNav.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão de hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    // 2. Seleciona o menu de navegação
    const mainNav = document.querySelector('#main-nav');
    
    // Alterna a classe 'active' no menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        // Isso muda o 'display: none' para 'display: block' no CSS
        mainNav.classList.toggle('active');
    });

    // Fecha o menu após o clique em um link interno (melhora a UX no celular)
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'active' para fechar o menu
            mainNav.classList.remove('active');
        });
    });
});

