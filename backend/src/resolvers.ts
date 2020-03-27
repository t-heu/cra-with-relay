import { Book} from './entity/Book'

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

interface iBook {
  id?: number
  author?: string
  title?: string
  year?: number
}

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find()
    }
  },
  Mutation: {
    book: async  (_, {author, title, year}: iBook) => {
      const res = await <iBook>Book.create({
        author,
        title,
        year
      }).save();
    
      return res
    }
  }
};

export default resolvers
