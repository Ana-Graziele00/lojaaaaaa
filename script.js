// Firebase Configuration and Auth Functions
(function() {
    // Configuração do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDmhDzX7Scg9xBbwbxqrn5JZuBP_gQT-AI",
        authDomain: "lojinha-de-harry-potter.firebaseapp.com",
        projectId: "lojinha-de-harry-potter",
        storageBucket: "lojinha-de-harry-potter.appspot.com",
        messagingSenderId: "312407656880",
        appId: "1:312407656880:web:b13c28270633320ac9ae75",
        measurementId: "G-LL0QVS84QC"
    };

    // Inicializa o Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Elementos da UI
    const desktopLoginBtn = document.getElementById('desktop-login-button');
    const desktopUserInfo = document.getElementById('desktop-user-info');
    const desktopLogoutBtn = document.getElementById('desktop-logout-button');
    const mobileLoginBtn = document.getElementById('mobile-login-button');
    const mobileUserInfo = document.getElementById('mobile-user-info');
    const mobileLogoutBtn = document.getElementById('mobile-logout-button');

    // Auth State Observer
    auth.onAuthStateChanged((user) => {
        if (user) {
            updateUIForLoggedInUser(user);
        } else {
            updateUIForLoggedOutUser();
        }
    });

    // UI Update Functions
    function updateUIForLoggedInUser(user) {
        // Desktop
        if (desktopLoginBtn) desktopLoginBtn.style.display = 'none';
        if (desktopUserInfo) {
            desktopUserInfo.style.display = 'inline-block';
            desktopUserInfo.textContent = `Olá, ${user.email || 'Usuário'}`;
        }
        if (desktopLogoutBtn) desktopLogoutBtn.style.display = 'inline-block';

        // Mobile
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'none';
        if (mobileUserInfo) {
            mobileUserInfo.style.display = 'inline-block';
            mobileUserInfo.textContent = `Olá, ${user.email || 'Usuário'}`;
        }
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'inline-block';

        localStorage.setItem("justLoggedIn", "true");
    }

    function updateUIForLoggedOutUser() {
        // Desktop
        if (desktopLoginBtn) desktopLoginBtn.style.display = 'inline-block';
        if (desktopUserInfo) desktopUserInfo.style.display = 'none';
        if (desktopLogoutBtn) desktopLogoutBtn.style.display = 'none';

        // Mobile
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'inline-block';
        if (mobileUserInfo) mobileUserInfo.style.display = 'none';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'none';

        localStorage.removeItem("justLoggedIn");
    }

    // Event Listeners
    if (desktopLogoutBtn) {
        desktopLogoutBtn.addEventListener('click', () => auth.signOut());
    }

    if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', () => auth.signOut());
    }

    // Global login function
    window.loginUser = function(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    };
})();

// Document Ready Functions
$(document).ready(function() {
    // Mobile Menu Toggle
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // Section Highlight on Scroll
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        header.css('box-shadow', scrollPosition <= 0 ? 'none' : '5px 1px 5px rgba(0, 0, 0, 0.1)');

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active').eq(activeSectionIndex).addClass('active');
    });

    // ScrollReveal Animations
    ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.dish', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#testimonial_chef', { origin: 'left', duration: 1000, distance: '20%' });
    ScrollReveal().reveal('.feedback', { origin: 'right', duration: 1000, distance: '20%' });

    // Animated Dot Navigation
    const updateDotPosition = function() {
        const $activeItem = $('nav ul .active');
        const leftPos = $activeItem.position().left + ($activeItem.width() / 2);
        const bgColor = $activeItem.find('a').css("background-color");

        $('.dot').css({
            'left': leftPos,
            'background-color': bgColor
        });
    };

    $('nav ul li').hover(
        function() {
            const $this = $(this);
            $('.dot').css({
                'left': $this.position().left + ($this.width() / 2),
                'background-color': $this.find('a').css("background-color")
            });
        },
        updateDotPosition
    );

    // Initialize dot position
    updateDotPosition();
});

// Product Search Functions
function exibirProdutos(produtosFiltrados) {
    const section = document.getElementById('resultados-pesquisa');
    section.innerHTML = produtosFiltrados.map(produto => `
        <div class="item-resultado">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2><a href="#" target="_blank">${produto.nome}</a></h2>
            <p class="descricao-meta">${produto.descricao}</p>
            <a href="${produto.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
        </div>
    `).join('');
}

function pesquisar() {
    const termo = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
    const section = document.getElementById('resultados-pesquisa');

    if (!termo) {
        section.innerHTML = "Nenhum texto digitado!";
        return;
    }

    const produtosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termo) ||
        dado.descricao.toLowerCase().includes(termo)
    );

    section.innerHTML = produtosFiltrados.length ?
        exibirProdutos(produtosFiltrados) :
        "<p>Resultado não Encontrado</p>";
}

// Initialize products on load
window.onload = function() {
    exibirProdutos(dados);
};

// Magic Particles Effect
document.querySelectorAll('.dish-bolt').forEach(bolt => {
    bolt.addEventListener('mouseenter', function() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'magic-particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                bolt.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }, i * 100);
        }
    });
});

// Toggle Menu Function
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}