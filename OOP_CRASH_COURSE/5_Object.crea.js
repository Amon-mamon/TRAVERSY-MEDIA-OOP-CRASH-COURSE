// Object of protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} is written by ${this.author} and the book release in ${this.est} and the year now is ${this.year}`;
    },
    getDate: function (){
        const years = new Date().getFullYear() - this.est;
        return `${this.title} is ${years} years old`;
    }
}

//CREATE OBJECT

// const book1 = Object.create(bookProtos);
// book1.title = "Book One";
// book1.author = "Vince";
// book1.est = 2013;
// book1.year = 2025;


//CREATE OBJECT WITH SINGLE OBJECT
const book1 = Object.create(bookProtos,{
    title:{value: "Book one"},
    author:{value: "Vince"},
    est:{value: 2013},
    year:{value: 2025}

});


console.log(book1.getSummary());
