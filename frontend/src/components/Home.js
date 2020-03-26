import React from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro"

import environment from "../Environment";

function Home() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeQuery {
          books {
            title
            author
          }
        }
      `}
      render={({ error, props }) => {
        if (error) throw error;
        if (!props) return <h1>loading...</h1>;
        //alert(JSON.stringify(props))
        return (
          <div>
            {props.books.map(book => (
              <>
                <strong>{book.author}</strong>
                <p>{book.title}</p>
              </>
            ))}
          </div>
        );
      }}
    />
  );
}

export default Home;