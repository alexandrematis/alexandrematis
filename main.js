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

/*mudar o header da página quando der scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        // maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

/*TESTIMONIALS SWIPER*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/*Scroll Reveal*/

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .image, #home .text
#about .image, #about .text,
#services heaqder, #services .card,
#testimonials header #testimonials .testimonials,
#contact .text, #contact .links
`, { interval: 100 })

/* Botão para voltar ao topo */
const backToTopButton = document.querySelector('#back-to-top')