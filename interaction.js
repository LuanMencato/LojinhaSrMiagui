let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]


function novo(i)
{
    let pai = document.getElementById("itens_section")
    let filho = document.createElement("article");
    filho.id = "item_"+(Number(i)+1);
    let conteudo = `
        <img src="${ITENS_LOJA[i].url_img}">
    
        <h1>${ITENS_LOJA[i].nome}</h1>
    
        <p><strong>Preço:</strong> R$${ITENS_LOJA[i].preco}</p>
        <p><strong>Descrição:</strong></p>
        <p>${ITENS_LOJA[i].descricao}</p>
        `;

    filho.innerHTML = conteudo;
    pai.appendChild(filho);
}

function main()
{
    for (item in ITENS_LOJA)
    {
        novo(item);       
    }
}

main();