//CONTRUSCTOR

function book(title,author,est,){
    this.title = title;
    this.author = author;
    this.est = est;

};


//getSummary prototype method
book.prototype.getSummary = function (){
    return `${this.title} is written by ${this.author} and the book release in ${this.est}`;
};
//get date
book.prototype.getDate = function() {
   const years = new Date().getFullYear() - this.est;
    return `${this.title} is ${years} years old`;
};
//revise / change year
book.prototype.revise = function (newYear){
    this.est = newYear;
    this.revised = true;
}


//Instantiate an object
const book1 = new book("Harry Mother","Vince",2010);
const book2 = new book("Harry Father","Stephen",2015);
// console.log(book2.getSummary());
// console.log(Object.values(book2));
book2.revise("2025");
console.log(book2);
