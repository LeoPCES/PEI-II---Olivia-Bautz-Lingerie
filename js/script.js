$(function () {
    var data = JSON.parse(document.getElementById('data').textContent);

    var ExibicaoCategoria = `<div class="container">`;
    var NumeroWhats = "5528998861023"

    for (let i = 0; i < data["Produto"].length; i++) {
        ExibicaoCategoria += `
                <div class="row">
                    <div class="col-12">
                        <div class="titulo"><span>${data["Produto"][i]["Tema"]}</span></div>
                    </div>
                </div>
                <div class="row">`;
        for (let prod = 0; prod < data["Produto"][i]["Produtos"].length; prod++) {
            var produto = data["Produto"][i]["Produtos"][prod];
            ExibicaoCategoria += `<div class="col-md-3 produto">
                <div class="content">
                    <div class="imagemProduto"><img src="${produto["Imagem"]}"/></div>
                    <div class="NomeProduto"><h5>${produto["Nome"]}</h5></div>
                    <div class="QuantidadeProduto">
                        <div class="ValorProduto">${produto["Valor"].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                        </div>
                    <a target="_blank" href="http://wa.me/${NumeroWhats}?text=${encodeURI("Tenho interesse no produto " + produto["Nome"])}" class="btn btn-success w-100">Comprar Agora</a>
                    </div>
                </div>`;
        }
        ExibicaoCategoria += `</div>`;

    }
    ExibicaoCategoria += `</div>`
    $('#conteudo').html(ExibicaoCategoria);
});