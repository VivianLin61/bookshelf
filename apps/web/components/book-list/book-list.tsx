import React from "react";
import Book from "../book";
import { UserBook } from "@/graphql/graphql";

interface BookListProps {
  books?: UserBook[];
  loading: boolean;
}

export const BookList: React.FC<BookListProps> = ({ books, loading }) => {
  if (loading || !books) return <div>Loading...</div>;
  if (books) {
    console.log(books);
  }
  return (
    <>
      {books &&
        books?.map((book, index) => (
          <div key={book.id}>
            <Book userBook={book} />
          </div>
        ))}
    </>
  );
};
export default BookList;
