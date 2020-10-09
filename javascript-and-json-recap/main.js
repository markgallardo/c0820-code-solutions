const booksArray = [
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'Rowling, J.K.',
    isbn: 9780747532743

  },
  {
    title: 'Harry Potter and the Sorcerer Stone',
    author: 'Rowling, J.K.',
    isbn: 9780590353427
  },
  {
    title: 'Harry Potter And The Goblet Of Fire',
    author: 'J.K.Rowling',
    isbn: 9780439139595
  }
];

const booksArrayJSON = JSON.stringify(booksArray);
console.log(booksArrayJSON);
console.log(typeof booksArrayJSON);
const studentObj = '{"name": "Mark Gallardo", "id": 3251028}';
console.log(typeof studentObj);
const parseStudentObj = JSON.parse(studentObj);
console.log(typeof parseStudentObj);
