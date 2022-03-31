/*
Quando clicar no pokémon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem. Mostra um e esconder outro

Para isso trabalhamos com dois elementos
1- listagem
2- cartão pokémon

Precisamos criar duas variáveis no JS para tabalhar com os elementos da tela

-Trabalhar com um evento de click feito pelo usuario na listagem

- remover a classe aberto só do cartão que está aberto
- ao clicar no pokémon da listagem pegaremos o id do pokemon para saber qual pegar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
} )








