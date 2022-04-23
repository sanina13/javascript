const saldo = 200
const lista = [
	{
		name: 'sabão',
		preco: 30
	},
	{
		name: 'pasta de dentes',
		preco: 18	
	},
	{
		name: 'bolachas',
		preco: 12	
	}
]

function compra(saldo, lista){
	return(lista.reduce(function(prev, current){
		return prev - current.preco
	}, saldo))
}



console.log(compra(saldo, lista))