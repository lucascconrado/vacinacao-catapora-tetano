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

// SIMULAÇÃO DOS DADOS DE CONTATO E MAPS
const postosData = [
    { nome: "Rancho Fundo", link: "https://maps.app.goo.gl/RanchoFundo", contato: "(21) 99111-0000" },
    { nome: "Vila de Cava", link: "https://maps.app.goo.gl/VilaDeCava", contato: "(21) 99222-0000" },
    { nome: "Santa Rita", link: "https://maps.app.goo.gl/SantaRita", contato: "(21) 99333-0000" },
    { nome: "Adrianópolis", link: "https://maps.app.goo.gl/Adrianopolis", contato: "(21) 99444-0000" },
    { nome: "Corumbá", link: "https://maps.app.goo.gl/Corumba", contato: "(21) 99555-0000" }
];


document.addEventListener('DOMContentLoaded', () => {
    // 1. FUNCIONALIDADE DO MENU HAMBÚRGUER (Header)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    
    // Abre/fecha o menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link (Melhora a UX no mobile)
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

});


// 2. FUNCIONALIDADE DA GAVETA DOS POSTOS
function toggleDetalhesPosto(index) {
    const gaveta = document.getElementById(`gaveta-posto-${index}`);
    const card = document.querySelector(`.posto-card:nth-child(${index + 1})`);
    const isVisible = gaveta.classList.contains('open');

    // Fechar todas as outras gavetas e remover a classe 'active'
    document.querySelectorAll('.posto-detalhes-gaveta.open').forEach(g => {
        g.classList.remove('open');
        g.innerHTML = ''; 
    });
    document.querySelectorAll('.posto-card.active').forEach(c => {
        c.classList.remove('active');
    });

    // Abrir/Fechar a gaveta clicada
    if (!isVisible) {
        const data = postosData[index];
        const telefoneNumerico = data.contato.replace(/\D/g, ''); 

        // Monta o HTML com os botões
        gaveta.innerHTML = `
            <div class="gaveta-content-posto">
                <p style="font-size:0.9em; margin-bottom: 0;"><strong>Contato Rápido:</strong></p>
                
                <a href="tel:${telefoneNumerico}" class="btn-gaveta btn-ligar-posto">
                    Ligar: ${data.contato}
                </a>
                
                <a target="_blank" href="${data.link}" class="btn-gaveta btn-maps-posto">
                    Abrir no Google Maps 🗺️
                </a>
            </div>
        `;
        gaveta.classList.add('open');
        card.classList.add('active'); // Destaca o card
    }
}

