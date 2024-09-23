const itensPerguntasERespostas = document.querySelectorAll('.item')

itensPerguntasERespostas.forEach(function(item){
  item.addEventListener('click', function(){
    const itemAtual = document.querySelector('.ativo')
    itemAtual.classList.remove('ativo')

    if(itemAtual){
        itemAtual.classList.remove('ativo')
    }

    item.classList.add('ativo')
  })
})