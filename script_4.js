const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


  const filteredEntrepreneurs = entrepreneurs.filter(function(entrepreneur) {
    return entrepreneur.year > 1970 && entrepreneur.year < 1980;
  });
  
  console.log(filteredEntrepreneurs);

  const nameEntrepreneurs = entrepreneurs.map(function(entrepreneur) {
    return entrepreneur.first + ' ' + entrepreneur.last;
  });
  
  console.log(nameEntrepreneurs);

  const actualageEntrepreneurs = entrepreneurs.map(function(entrepreneur) {
    return 2023 - entrepreneur.year;
  });

  console.log(actualageEntrepreneurs);

  const lastEntrepreneurs = entrepreneurs.map(function(entrepreneur) {
    return entrepreneur.last + ' ' + entrepreneur.first;
  });

  const sortEntrepreneurs = lastEntrepreneurs.sort();

  console.log(sortEntrepreneurs);
  