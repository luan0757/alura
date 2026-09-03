function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value; 
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    alert(nomeProduto);
    alert(quantidade.value);
    alert(valorUnitario);
}

function limpar () {

}