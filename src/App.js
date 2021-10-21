import { useState } from "react";
import Filter from "./components/filter/filter";
import Header from "./components/header/header";
import BookCard from "./components/books-card/books-card";
import allBooks from "./books";
import Pagination from "./components/pagination/pagination";

function App() {
  const [books, setBooks] = useState (allBooks);
  return (
    <>
    <div className="books container-xl">
    <Header />
    <section>
    <h2 className="visually-hidden">Books</h2>
    <Filter setBooks={setBooks} />
    <div className="books__list row">
    {/* <p className="text-center">Books are coming... Please, wait.</p> */}
    {books.map((book) => <BookCard {...book} />)}
    </div>
    <Pagination />
    </section>
    </div>
    </>
    );
  }

  export default App;
