//BOOK CONSTRUCTOR
function book(title,author,est,){
    this.title = title;
    this.author = author;
    this.est = est;

};
//GET SUMMARY
book.prototype.getSummary = function (){
    return `${this.title} is written by ${this.author} and the book release in ${this.est} and the year now is ${this.year}`;
};

//MAGAZINE CONSTRUCTOR
function Magazine(title,author,est,month,year){
    book.call(this, title, author, est,)

    this.month = month;
    this.year = year;
};

//INHERITANCE PROTOTYPE
Magazine.prototype = Object.create(book.prototype);

//INSTANTIATE MAGAZINE OBJECT   
const mag1 = new Magazine("Mag one", "Pororo",2012,"October", 2025)


//CHANGE TO MAGAZINE CONSTRUCTOR
Magazine.prototype.constructor = Magazine;

console.log(mag1);
// console.log(mag1.getSummary());