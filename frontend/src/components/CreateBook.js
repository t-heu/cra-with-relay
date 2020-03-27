import React, { useState } from 'react'
import { commitMutation } from 'react-relay';
import { graphql } from "babel-plugin-relay/macro"

import environment from "../Environment";

const mutation = graphql `
  mutation CreateBookMutation(
    $title: String!,
    $author: String!, 
    $year: Int!
  ) {
    book(title: $title, author: $author, year: $year) {
      title
      author
      year
    }
  }
`;

export default function CreateBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState(0)
  
  function handleSubmit(e) {
    e.preventDefault()
  
    const variables = {
      title,
      author,
      year: Number(year)
    };
  
    try {
      commitMutation(
        environment,
        {
          mutation,
          variables,
          onCompleted: (response, errors) => {
            alert('Response received from server.')
          },
          onError: err => alert(err),
        }
      );
      
      setTitle('')
      setAuthor('')
      setYear('')
    } catch (err) {
      alert('Error: alguma coisa deu errado')
    }
  }
  
  return (
    <div>
      <h1 style={{'margin-bottom': '7px'}}>Create books</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Author" type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        <input placeholder="Title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Year" type="number" value={year === 0 ? '' : year} onChange={e => setYear(e.target.value)} />
        <button type="submit">Public</button>
      </form>
    </div>
  )
}