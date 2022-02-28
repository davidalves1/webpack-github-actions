import $ from 'jquery'
import Book from './model/book'

const book = new Book('Harry Potter', 132.9)

$('body').append(`<h1>${book.getName()}</h1>`)
$('body').append(`
    <h2>Preço: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.getPrice())}</h2>
`)