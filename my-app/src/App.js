import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import { getAllBooks, createBook } from "./services/BookService";
import Footer from "./components/Footer";
import TodoTable from "./components/TodoTable";
import { getAllTodos } from "./services/TodoService";

function App() {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [numberOfTodos, setNumberTodos] = useState(0);
  const [content, setContent] = useState("book");

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  const onButtonClick = () => {
    if (content === "book") {
      setContent("todo");
    } else setContent("book");
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <button onClick={onButtonClick}>list 전환</button>
        {content === "book" ? (
          <>
            <CreateBook
              bookShelf={bookShelf}
              onChangeForm={handleOnChangeForm}
              handleSubmit={handleSubmit}
            />
            <DisplayBoard
              content={content}
              numberOfBooks={numberOfBooks}
              getAllBook={getAllBook}
            />
            <BookTable books={books} />
            <Footer />
          </>
        ) : (
          <>
            <DisplayBoard
              numberOfTodos={numberOfTodos}
              getAllTodo={getAllTodo}
            />
            <TodoTable todos={todos} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
