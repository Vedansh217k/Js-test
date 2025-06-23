CREATE TABLE Authors(
  author_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  birth_year INT 
);
CREATE TABLE Books(
  book_id INT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  author_id INT FOREIGN KEY references Authors(author_id),
  published_year INT,
  genre VARCHAR(50) 
);
 CREATE TABLE Borrowers(
  borrower_id INT PRIMARY KEY,
  fullname VARCHAR(150) NOT NULL,
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(15)
);

CREATE TABLE borrow_log (
  log_id INT PRIMARY KEY ,
  borrower_id INT,
  book_id INT,
  borrow_date DATE,
  FOREIGN KEY (borrower_id) REFERENCES borrowers(borrower_id),
  FOREIGN KEY (book_id) REFERENCES books(book_id)
);

INSERT INTO authors (author_id, name, birth_year) VALUES
(1, 'George Orwell', 1903),
(2, 'J.K. Rowling', 1965),
(3, 'J.R.R. Tolkien', 1892),
(4, 'No Author',NULL);

INSERT INTO books (book_id, title, author_id, published_year, genre) VALUES
(101, '1984', 1, 1949, 'Dystopian'),
(102, 'Animal Farm', 1, 1945, 'Political Satire'),
(103, 'Harry Potter and the Sorcerer''s Stone', 2, 1997, 'Fantasy'),
(104, 'The Hobbit', 3, 1937, 'Fantasy');

INSERT INTO borrowers (borrower_id, fullname, email, phone) VALUES
(1, 'Alice Johnson', 'alice@example.com', '555-1234'),
(2, 'Bob Smith', 'bob.smith@example.com', '555-5678'),
(3, 'Carol Lee', 'carol.lee@example.com', '555-9012');


INSERT INTO borrow_log (log_id, borrower_id, book_id, borrow_date) VALUES
(1, 1, 101, '2025-06-01'),  -- Alice borrowed "1984"
(2, 2, 104, '2025-06-03'),  -- Bob borrowed "The Hobbit"
(3, 3, 103, '2025-06-05'),  -- Carol borrowed "Harry Potter..."
(4, 1, 102, '2025-06-10'),  -- Alice borrowed "Animal Farm"
(5, 2, 101, '2025-06-12');  -- Bob borrowed "1984"

--1.List all books and their authors 
SELECT a.name, b.title 
FROM books b
JOIN authors a ON b.author_id = a.author_id;

--2. Find all books published before the year 2000
SELECT title FROM Books
WHERE published_year < 2000;


--3.Get names of authors who wrote fantasy books
SELECT a.name, b.genre AS author_name
FROM Authors a
JOIN Books b ON b.author_id = a.author_id
WHERE genre = "Fantasy";

--4.List borrowers whose name starts with 'A'
SELECT fullname FROM Borrowers
WHERE fullname LIKE "A%";


--5. Count how many books each author has written
SELECT COUNT(*) FROM Books;

--6. Get all genres with the number of books in each
SELECT genre, COUNT(*) AS book_count
FROM Books
GROUP BY genre;


--7.Find books written by 'George Orwell'
SELECT b.title, a.name  AS author_name
FROM Books b
JOIN Authors a ON
b.author_id = a.author_id
WHERE a.name = 'George Orwell'; 


--8. List each book along with its author name and genre
SELECT b.title, a.name AS author_name, b.genre 
FROM Books b
JOIN Authors a ON 
b.author_id = a.author_id;
--9.Find authors who have not written any books
SELECT a.author_id, a.name 
FROM Authors a
LEFT JOIN Books b  ON
a.author_id = b.author_id
WHERE b.book_id IS NULL;

--10.Show a list of all authors and the number of books they've written (including those with 0)
SELECT a.author_id, a.name, COUNT(b.book_id) AS number_of_book 
FROM Authors a
LEFT JOIN Books b ON 
a.author_id = b.author_id
GROUP BY a.author_id, a.name;

SELECT b.title AS book_name,
       br.fullname AS borrower_name,
       bl.borrow_date
FROM borrow_log bl
JOIN Books b ON bl.book_id = b.book_id
JOIN Borrowers br ON bl.borrower_id = br.borrower_id;