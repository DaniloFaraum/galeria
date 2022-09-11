7
function adicionarFilme() {
let filme = document.getElementById("filme").value
if (filme.endsWith(".jpg")||filme.endsWith(".png")||filme.endsWith(".webp")){
    const lista = document.getElementById("listaFilmes")
    lista.innerHTML = lista.innerHTML + "<img src="+filme+"></img>"  
}
else {
    alert("Endereço inválido")
}

document.getElementById("filme").value = ''
}


