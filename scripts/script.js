function getAdmins(map){
	let admins = []
	for([key, value] of map){
		if(value === 'Admin'){
			admins.push(key)	
		}	
	}
	return admins
}

const usuarios = new Map()

usuarios.set('Luis', 'Admin')
usuarios.set('Tiago', 'Admin')
usuarios.set('Rui', 'User')
usuarios.set('Luana', 'Admin')

console.log(getAdmins(usuarios))
