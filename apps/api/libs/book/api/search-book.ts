import axios from 'axios';
import { BookData } from 'libs/user-book/types';
import { processBook } from 'libs/user-book/utils';
const RESULTS_PAGE_SIZE = 10;

export function processBookData(bookInfo: any[]): BookData[] {
  const processedData: BookData[] = [];
  const uniqueBooks = new Set<string>();

  bookInfo.forEach((book) => {
    // const bookData = processBook(book, uniqueBooks);
    const processedBook: BookData = processBook(book) as BookData;
    if (processedBook != null) {
      processedData.push(processedBook);
    }
  });
  return processedData;
}

export async function searchBook(
  search: string,
  field: string,
  offset: number,
) {
  try {
    let inField: string = 'intitle';
    if (field === 'author') {
      inField = 'inauthor';
    } else if (field === 'categories') {
      inField = 'insubject';
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${inField}:${search}&maxResults=${RESULTS_PAGE_SIZE}&startIndex=${offset}`;
    const response = await axios.get(url);

    // Check if the response status is successful (status code 2xx)
    let data = response.data.items;

    let hits = processBookData(data);
    // sort by numbers of ratings
    // hits.sort((a, b) => {
    //   return b.ratingsCount - a.ratingsCount;
    // });

    let count = response.data.totalItems;

    // Use Promise.all to wait for all userBook requests to complete
    return { hits: hits.length > 0 ? hits : [], count: count };
  } catch (error) {
    return {
      hits: [],
      count: 0,
    };
  }
}
