
const produtos = [{ nome: "Produto 01", imagem: "https://ifody.com.br/assets/images/mbr-818x818.png", descricao: "Descricao", preco: "R$ 20,00" }, { nome: "Produto 02", imagem: "https://ifody.com.br/assets/images/mbr-818x818.png", descricao: "Descricao", preco: "R$ 10,00" },{ nome: "Produto 03", imagem: "https://ifody.com.br/assets/images/mbr-818x818.png", descricao: "Descricao", preco: "R$ 15,00" },
{ nome: "Produto 04", imagem: "https://ifody.com.br/assets/images/mbr-818x818.png", descricao: "Descricao", preco: "R$ 100,00" }];


const App = {
    openClose() {
        document.querySelector(".modal-overlay").classList.toggle("active");
    },
    show() {
        var k = '';
        for (var i = 0; i < produtos.length; i++) {
            k += '<div class="catalog__col">'
            k += `<div class="catalog__produto produto"><div class="produto__title">${produtos[i].nome}</div>`
            k += `<div class="produto__text"><img width="80px" src="${produtos[i].imagem}"></div>`
            k += `<div class="produto__text">${produtos[i].descricao}</div>`
            k += `<div class="produto__preco">${App.formatCurrency(produtos[i].preco)}</div>`
            k += `<div class="produto__button"><a href="#" onclick="App.pedido(${i})">Comprar no Zap</a></div></div></div></div>`
            document.getElementById("catalog__flex").innerHTML = k;
        }

    },
    pedido(id) {
            let whatsapp = "5562985584626"
            let frase = "Tenho%20interesse%20neste%20produto:%0D"
            nomeProduto = `Produto:%20${produtos[id].nome}%0D`
            precoProduto = `Preço:%20${produtos[id].preco}`
            window.location.href = `https://api.whatsapp.com/send?number=${whatsapp}&text=${frase}${nomeProduto}${precoProduto}`;
    },
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency", currency: "BRL"
        })
        return signal + value
    },
    cadastrar() {
        let nome = document.getElementById('nome').value;
        let descricao = document.getElementById('descricao').value;
        let preco = document.getElementById('valor').value;
        let imagem = document.getElementById('imagem').value;
        if (preco != "" && nome != "" && descricao != "" && imagem != "") {
        produtos.push({ nome: nome, imagem: imagem, descricao:descricao, preco:preco });
        App.openClose()
        App.show()
        document.getElementById("form").reset();
        console.log(produtos)
        } else {
            alert("Preencha todos os campos")
        }
    },


}

