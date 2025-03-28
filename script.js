function Book(title,author){

    this.title=title;
    this.author=author;
    this.status="Available"

}
Book.prototype.toggleStatus=function(){

    this.status=this.status==='Available'?"Borrowed":"Available"
}




let library=[];


function addBook(){


    const title=document.getElementById("titleInput").value.trim();
    const author=document.getElementById("authorInput").value.trim();

    if(title===""|| author===""){

        alert("Please add the details");
        return;
    }

    const newBook= new Book(title,author);
    library.push(newBook);

    displayBooks();

    document.getElementById("titleInput").value="";
    document.getElementById("authorInput").value="";


}



function displayBooks(){


    const bookList=document.getElementById("bookList");
    bookList.innerHTML="";


    library.forEach((book,index)=>{

        const card=document.createElement("div");
        card.className="book-card";

        card.innerHTML=

        `

        <h3>${book.title}</h3>

        <p><strong>Author:</strong>${book.author}</p>
        <p><strong>Status:</strong>${book.status}</p>
        <button onclick="toggleBookStatus(${index})"> Toggle Status</button>
        <button onclick="removeBook(${index})">Remove</button>
        
        `
        bookList.appendChild(card);



    })


}


function toggleBookStatus(index){


    library[index].toggleStatus();

    displayBooks()
}



function removeBook(index){


    library.splice(index,1)
    displayBooks();
}