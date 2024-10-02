let numeroConta = prompt("Digite o numero da conta")
let saldo = parseFloat(prompt("Digite o saldo da sua conta"))
let debito= parseFloat(prompt("Digite o valor do debito"))
let credito= parseFloat(prompt("Digite o valor do credito"))
let saldoAtual = saldo - debito + credito
alert("Saldo atual: " + saldoAtual)

if(saldoAtual>= 0){
    alert("Saldo Positivo")
}else{
    alert("Saldo Negativo")
}