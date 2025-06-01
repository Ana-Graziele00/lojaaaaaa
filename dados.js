let dados = [{
        nome: "Moletom Canguru Harry Potter",
        descricao: "O Moletom canguru com capuz e bolso frontal é confeccionado em poliéster e algodão e com o interior flanelado, ideal para sair de casa confortável e com estilo.",
        link: "https://shopee.com.br/product/1397835711/22893537113",
        imagem: "img/moletom.webp"
    },
    {
        nome: "Camiseta 100% Algodão Premium Casual Harry Potter",
        descricao: "Camiseta 100% algodão premium, modelo casual com estampa de Harry Potter Hogwarts. Lançamento 2024, disponível nos tamanhos P, M, G e GG.",
        link: "https://shopee.com.br/product/684935744/22098012870",
        imagem: "img/camisa.webp"
    },
    {
        nome: "Gargantilha Harry Potter em Banho de Ouro",
        descricao: "Gargantilha Harry Potter banhada a ouro 18k, com corrente de 45 cm e pingente de 19,5 mm x 17 mm. Acompanha certificado de garantia de 1 ano, embalagem de veludo e suporte pós-venda.",
        link: "https://www.grasiely.com.br/gargantilha/gargantilha-harry-potter-em-banho-de-ouro",
        imagem: "img/Gargantilha.webp"
    },
    {
        nome: "Livro Caixa Harry Potter Edição Premium",
        descricao: "A icônica saga de Harry Potter em uma edição especial! Um box completo para reviver a magia de Hogwarts! 🏰🪄",
        link: "https://www.magazineluiza.com.br/livro-caixa-harry-potter-edicao-premium/p/223245300/li/lltj/",
        imagem: "img/box.webp"
    },
    {
        nome: "Quadro 3D Harry Potter",
        descricao: "Dê um toque mágico à sua decoração com este quadro 3D com transição de imagem do pôster de Sirius Black. Medidas de 30 cm x 40 cm.",
        link: "https://shopee.com.br/Quadro-3D-Harry-Potter-Undesirable-Harry-Potter-Have-you-seen-this-wizard-Sirius-Black",
        imagem: "img/"
    },
    {
        nome: "Kit Exclusivo Harry Potter",
        descricao: "O kit inclui uma Caixinha de Música, um Chaveiro Harry Potter e uma Pulseira Pomo de Ouro. Ideal para fãs de todas as idades!",
        link: "https://produto.mercadolivre.com.br/MLB-3938125365-kit-pulseira-caixinha-de-musica-e-chaveiro-harry-potter-geek-_JM",
        imagem: "img/Kit.webp"
    },
    {
        nome: "Pulseira Harry Potter",
        descricao: "Feita com uma liga metálica leve e durável, possui 5 pingentes detalhados de Harry, Hermione, Ron, o brasão de Hogwarts e o Expresso de Hogwarts.",
        link: "https://produto.mercadolivre.com.br/MLB-4727291550-pulseira-harry-potter-pulseira-harry-hermione-e-ron-_JM",
        imagem: "img/Segunda_pulseira.webp"
    },
    {
        nome: "Anel Giratório Ansiedade/ Pomo De Ouro Harry Potter Cosplay",
        descricao: "Anel ajustável inspirado no Pomo de Ouro. Seu design giratório ajuda a aliviar a ansiedade. Ideal para qualquer ocasião!",
        link: "https://shopee.com.br/product/1314964051/23193558885",
        imagem: "img/Anel_vai.webp"
    },
    {
        nome: "Kit de Colecionador Harry Potter",
        descricao: "Com opções personalizadas, traz varinhas mágicas, anéis e emblemas metálicos das casas de Hogwarts. Ideal para presentear ou colecionar!",
        link: "https://www.nerdloja.com/products/kit-de-colecionador-harry-potter",
        imagem: "img/varinhaas.webp"
    },
    {
        nome: "Harry Potter Academia Mágico Pena Pen Set Caixa De Presente",
        descricao: "Caneta tinteiro vintage com corpo de cobre e ponta de aço inoxidável para uma escrita suave. Acompanha caixa de presente, ideal para presentear.",
        link: "https://shopee.com.br/product/446050755/14289957430",
        imagem: "img/Caneta_1.webp"
    },
    {
        nome: "Jogo de Xadrez Harry Potter 900 peças",
        descricao: "O Jogo de Xadrez Harry Potter da BELLA é perfeito para quem quer mergulhar no mundo mágico de Hogwarts. Com 900 peças e 4 personagens articulados, garante partidas estratégicas e diversão. Acompanha manual de instruções ilustrado e é uma ótima adição para fãs da saga.",
        link: "https://www.cubonerd.com.br/jogo-de-xadrez-harry-potter-900-pecas?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&srsltid=AfmBOopbdPP05zOndd342psa9AZMX75Pf0mnhAIza__QWI3YoxLluruRQHk",
        imagem: "img/"
    },
    {
        nome: "Asmodee Jogo de tabuleiro Harry Potter Hogwarts Battle",
        descricao: "Jogo cooperativo com Harry, Ron, Hermione ou Neville para impedir vilões de dominar Hogwarts em sete desafios. Vença derrotando os vilões antes que controlem todos os lugares. Inclui tabuleiro, dados, fichas e regras.",
        link: "https://shopee.com.br/product/446050755/14289957430",
        imagem: "img/Caneta_1.webp"
    }
];


function pesquisar() {
    let campo = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultados = document.getElementById("resultados-pesquisa");
    resultados.innerHTML = "";
    let encontrado = false;

    dados.forEach(produto => {
        if (produto.nome.toLowerCase().includes(campo)) {
            encontrado = true;
            resultados.innerHTML += `
                <div class="item-resultado">
                    <h2>${produto.nome}</h2>
                    <p>${produto.descricao}</p>
                    <a href="${produto.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }
    });

    if (!encontrado) {
        resultados.innerHTML = "<p>Não encontrado</p>";
    }
}