document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    
    // 1. FUNCIONALIDADE DO MENU HAMBÚRGUER
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    // 2. CONFIGURAÇÃO DOS CARDS DOS POSTOS - VERSÃO SIMPLIFICADA
    configurarPostos();
});

// DADOS DOS POSTOS
const postosData = [
    { 
        nome: "Rancho Fundo", 
        link: "https://www.google.com/maps/place/Unidade+B%C3%A1sica+de+Sa%C3%BAde+Rancho+Fundo/@-22.6969398,-43.4611026,17z/data=!3m1!4b1!4m6!3m5!1s0x99686a72569ff3:0x2e6bb1c22b4e565b!8m2!3d-22.6969398!4d-43.4611026!16s%2Fg%2F11c3k9j9cg?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D", 
        contato: "(21) 99111-0000",
        fluxo: "baixo" 
    },
    { 
        nome: "Vila de Cava", 
        link: "https://www.google.com/maps/place/Clinica+Da+Familia+De+Vila+De+Cava/@-22.6818807,-43.4441444,17z/data=!3m1!4b1!4m6!3m5!1s0x996901bc928f5f:0x71469710c62a5ea5!8m2!3d-22.6818857!4d-43.4415695!16s%2Fg%2F11bzr_0kh3?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D", 
        contato: "(21) 99222-0000",
        fluxo: "intenso" 
    },
    { 
        nome: "Santa Rita", 
        link: "https://www.google.com/maps/place/Policl%C3%ADnica+Santa+Rita/@-22.6911543,-43.4698974,17z/data=!4m6!3m5!1s0x9969545a15b253:0x1c97e2b8a217d52a!8m2!3d-22.6912781!4d-43.468449!16s%2Fg%2F11flxrx1pr?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D", 
        contato: "(21) 99333-0000",
        fluxo: "moderado" 
    },
    { 
        nome: "Adrianópolis", 
        link: "https://www.google.com/maps/place/Cl%C3%ADnica+da+Fam%C3%ADlia+Adrian%C3%B3polis/@-22.6559436,-43.4917104,19.25z/data=!4m15!1m8!3m7!1s0x9942706f0edad5:0xe1a4445f4bd9df2!2sR.+Menino+Jos%C3%A9+Eus%C3%A9bio,+15+-+Adrian%C3%B3polis,+Nova+Igua%C3%A7u+-+RJ,+26053-710!3b1!8m2!3d-22.6559103!4d-43.4916265!16s%2Fg%2F11w213yf7j!3m5!1s0x994270456946e7:0x520297f19bab41d3!8m2!3d-22.6558686!4d-43.4916339!16s%2Fg%2F11c6w09dsp?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D", 
        contato: "(21) 99444-0000",
        fluxo: "baixo" 
    },
    { 
        nome: "Corumbá", 
        link: "https://www.google.com/maps/place/Cl%C3%ADnica+da+Familia+-+UBS+CORUMB%C3%81/@-22.695885,-43.473566,17.71z/data=!4m6!3m5!1s0x996817414b42cd:0xd599bb94d7a5fd33!8m2!3d-22.6962623!4d-43.4731413!16s%2Fg%2F1q6jzbs8p?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D", 
        contato: "(21) 99555-0000",
        fluxo: "intenso" 
    }
];

// CONFIGURA OS POSTOS - VERSÃO MAIS ROBUSTA
function configurarPostos() {
    const cards = document.querySelectorAll('.posto-card');
    console.log('Encontrados', cards.length, 'cards de postos'); // Debug
    
    cards.forEach((card, index) => {
        console.log('Configurando card:', index, postosData[index].nome); // Debug
        
        // Aplica a classe de fluxo
        card.classList.add(`fluxo-${postosData[index].fluxo}`);
        
        // Destaque para Santa Rita
        if (postosData[index].nome === "Santa Rita") {
            card.classList.add('destaque');
        }
        
        // Adiciona evento de clique DIRETO no card
        card.addEventListener('click', function() {
            console.log('Clicou no card:', index); // Debug
            toggleDetalhesPosto(index);
        });
    });
}

// FUNÇÃO SIMPLIFICADA PARA ABRIR/FECHAR GAVETAS
function toggleDetalhesPosto(index) {
    console.log('Toggle detalhes posto:', index); // Debug
    
    const gaveta = document.getElementById(`gaveta-posto-${index}`);
    
    if (!gaveta) {
        console.error('Gaveta não encontrada para índice:', index);
        return;
    }
    
    const estaAberta = gaveta.classList.contains('open');
    
    // Fecha todas as gavetas primeiro
    document.querySelectorAll('.posto-detalhes-gaveta').forEach(g => {
        g.classList.remove('open');
        g.innerHTML = '';
    });
    
    document.querySelectorAll('.posto-card').forEach(c => {
        c.classList.remove('active');
    });
    
    // Se não estava aberta, abre esta
    if (!estaAberta) {
        const data = postosData[index];
        const telefoneNumerico = data.contato.replace(/\D/g, '');
        
        gaveta.innerHTML = `
            <div class="gaveta-content-posto">
                <p style="font-size:0.9em; margin-bottom: 10px;"><strong>Contato Rápido:</strong></p>
                <a href="tel:${telefoneNumerico}" class="btn-gaveta btn-ligar-posto">
                    📞 Ligar: ${data.contato}
                </a>
                <a target="_blank" href="${data.link}" class="btn-gaveta btn-maps-posto">
                    🗺️ Abrir no Google Maps
                </a>
            </div>
        `;
        gaveta.classList.add('open');
        gaveta.parentElement.classList.add('active');
        
        console.log('Gaveta aberta:', index); // Debug
    }
}