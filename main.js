/******** INTRO JAVASCRIPT ********/

/*//alert('Eu existo!')

//char - string
('um texto aqui')

// number
12345

//boolean
true
false
    //objetos

    ({
        name: 'carro',
        cor: 'vermelho',
        correr: function () {}
    })

*/
/*
function liquidificador(frutas) {
    alert(`vitamina de ${frutas}`)
}

liquidificador('maçã e banana')
*/

/*
const nome = 'mayk'
nome = 'valeska'
alert(nome)
*/

/*
const pessoa = {
    name: 'mayk',
    age: 37,
    falar: function () {
        alert(`Meu nome é ${pessoa.name} e tenho ${pessoa.age} anos`)
    }
}

pessoa.falar()
*/

// DOM Document Object Model //

//document.body.style.background = 'red'

/******** CÓDIGO ********/


//abre e fecha o menu quando clicar no icone: hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}