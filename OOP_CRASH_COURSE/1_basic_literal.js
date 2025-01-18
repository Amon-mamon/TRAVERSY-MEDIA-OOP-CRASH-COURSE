
// STRING
// const word = "hello"
// console.log(word.toUpperCase());
// console.log(typeof word);

// //OBJECT
// const word2 = new String ("Hello");
// console.log(word2.toLowerCase());
// console.log(typeof word2);

//WINDOW OBJECT AND ITS PROPERTY
// console.log(window);
// console.log(navigator.appVersion)

// ======================================================= OBJECT LITERALS =========================================================

const book1 = {
    title: "Harry Potter",
    author: "Vince",
    est: 2013,
    getSummary: function(){
        return `${this.title} is written by the legend name ${this.author} and the book release in ${this.est}`;
    }
    
};

const book2 = {
    title: "Harry Butter",
    author: "Stephen",
    est: 2014, 
    getSummary: function(){
        return `${this.title} is written by ${this.author} and the book release in ${this.est}`;
    }
    
};
console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));