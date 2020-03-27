import React from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro"

import environment from "../Environment";

function ListBooks() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ListBooksQuery {
          books {
            title
            author
            year
          }
        }
      `}
      render={({ error, props }) => {
        if (error) throw error;
        if (!props) return <h1>loading...</h1>;
        //alert(JSON.stringify(props))
        return (
          <div>
            <h1>List Books</h1>
            {props.books.map(book => (
              <div className="book">
                <strong>{book.author}</strong>
                <p>{book.title}</p>
                <span>year: {book.year}</span>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
}

export default ListBooks;