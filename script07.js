var salario_fixo = parseFloat(prompt("Escreva o seu salario mensal: "))
var num_carros_vendidos = parseFloat(prompt("Escreva a quantidade de carros vendidos"))
var valor_total_vendas = parseFloat(prompt("Escreva o valor total de vendas"))
var comissao_p_carro = parseFloat(prompt("Escreva a comissao por carro"))
var comissaoTotal = num_carros_vendidos * comissao_p_carro 
var percentualVendas = valor_total_vendas /100 * comissao_p_carro
var salarioFinal = comissaoTotal + percentualVendas

alert("salario completo foi para " + salarioFinal)
