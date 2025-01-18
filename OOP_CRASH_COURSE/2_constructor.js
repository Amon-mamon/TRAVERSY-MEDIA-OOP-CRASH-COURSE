//CONTRUSCTOR

function book(title,author,est){
    this.title = title;
    this.author = author;
    this.est = est;
    this.getSummary = function (){
        return `${this.title} is written by ${this.author} and the book release in ${this.est}`;
    };
};

//Instantiate an object
const book1 = new book("Harry Mother","Vince",2010);
const book2 = new book("Harry Father","Stephen",2015);
console.log(book1.getSummary());
// console.log(Object.values(book2));
// console.log(book2);