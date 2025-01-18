class book {
    constructor(title,author,est,year){
        this.title = title;
        this.author = author;
        this.est = est;
        this.year = year;
    }
    getSummary(){
        return `${this.title} is written by ${this.author} and the book release in ${this.est} and the year now is ${this.year}`;
    }
    getDate(){
        const years = new Date().getFullYear() - this.est;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear){
       
        this.est = newYear;
        this.revised = true;
        
    }
    //static method
    static bookStore(){
        return " Vince & David"
    }
};

//INSTANTIATE OBJECT
const book1 = new book("Book one", "Vince", 2013, 2025)
// console.log(book1.getSummary());
// console.log(book1.getDate());
// console.log(book1);
// book1.revise(2024);
// console.log(book1);


//Static method
console.log(book.bookStore());
