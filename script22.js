var quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque:"))
var quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"))
var quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"))
var quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2
alert("Quantidade média em estoque: "+ quantidadeMedia)

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")
}