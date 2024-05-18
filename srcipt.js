function createBook(title, pag, author){
    const livro = {
        paginas: pag,
        titulo: title,
        autor: author,
        printBook: function(){
            console.log("Printing..");

        }
    }
    return livro
}
const livro1 = createBook("Ilíada", 444, "Homero");
const livro2 = createBook("1984", 344, "George Orwell");
console.log(livro1, livro2);
// const livro = {
//     paginas: 235,
//     titulo: "Vida e morte",
//     autor: "Ana Suy",
//     capitulos: {
//         cap1: "First Word",
//         cap2: "Isso é sobre...",
//     },
//     printBook: function(){
//         console.log("Printing..");
//     }
// }
// livro.printBook();