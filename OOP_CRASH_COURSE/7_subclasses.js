class book {
    constructor(title,author,est,year){
        this.title = title;
        this.author = author;
        this.est = est;
    }
    getSummary(){
        return `${this.title} is written by ${this.author} and the book release in ${this.est} and the year now is ${this.year}`;
    }
}

// Magazine Subclasses

class Magazine extends book {
    constructor(title,author,est,year){
        super(title, author, est);
        this.year = year;
    }
}

//Instantiate Magazine
const mag = new Magazine("Mag one", "Stephen", 2011, 2025);

console.log(mag.getSummary());


