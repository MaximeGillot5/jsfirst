const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  const rentedBooks = books.filter(function(book) {
    return book.rented > 0;
  });
  
  if (rentedBooks.length > 0) {
    console.log("Tous les livres ont été loués au moins une fois :)");
  } else {
    console.log("AUCUN LIVRE LOUÉ!");
  }

  const mostRentedBook = books.sort(function(a, b) {
    return b.rented - a.rented;
  })[0];
  
  console.log("Le livre le plus emprunté est : " + mostRentedBook.title);
  

  const leastRentedBook = books.sort(function(a, b) {
    return a.rented - b.rented;
  })[0];

  console.log("Le livre le moins emprunté est : " + leastRentedBook.title);


  const idfindBook = books.find(function(book){
    return book.id == 873495;
  });

  console.log("Voici le livre avec l'id 873495: " + idfindBook.title )


  const index = books.findIndex(function(book) {
    return book.id === 133712;
  });
  
  if (index !== -1) {
    books.splice(index, 1);
  }
  
  console.log(books);

  
  const sortedBooks = books.slice().sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  
  console.log(sortedBooks);
  


  