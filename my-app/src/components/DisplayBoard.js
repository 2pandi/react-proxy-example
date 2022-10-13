import React from "react";

const DisplayBoard = ({
  content,
  numberOfBooks,
  getAllBook,
  numberOfTodos,
  getAllTodo,
}) => {
  return (
    <div className="display-wrapper">
      <div className="display-box">
        <div className="display-board">
          <h4>생성된 수</h4>
          <div className="number">
            {content === "book" ? numberOfBooks : numberOfTodos}
          </div>
        </div>
        <div className="get-button">
          <button
            onClick={() => {
              return content === "book" ? getAllBook() : getAllTodo();
            }}
          >
            {content === "book" ? "Get all Books" : "Get All Todos"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
