// for-each doesn't return any value 
// so we have to use filter, reduce and map 


// filter used in array for selecting specific values based on some condition 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num >= 5 )  // this return only those values which is equal or greater than 5

console.log(newNums)

let Books = [
    {
        title : "Book-one", genre : "fiction", published : "1992"
    },
    {
        title : "Book-two", genre : "non-fiction", published : "1996"
    },
    {
        title : "Book-three", genre : "fiction", published : "1994"
    },
    {
        title : "Book-four", genre : "history", published : "1970"
    },
    {
        title : "Book-five", genre : "fiction", published : "1999"
    }
]

// now you have to get those books whose genre is fiction and published year is 1999 so now you can use filter

let fiction_books = Books.filter( (books) => {
    return books.genre === "fiction" && books.published === "1999"
    
})

console.log(fiction_books)