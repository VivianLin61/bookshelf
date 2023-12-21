"use client"
import React, { useEffect, useState } from 'react'
import ColumnContainer from './column-container';
import { SortOrder, UserBook } from '@/graphql/graphql';
import useLoadBooks from '@/api/use-load-books';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { ColumnWithBooks, Status } from '../types';

interface BoardProps { }

export const Board: React.FC<BoardProps> = ({ }) => {
    // get the books data we need
    const { loadBooks, networkStatus } = useLoadBooks();
    const [data, setData] = useState<ColumnWithBooks[]>([]);

    const loadMore = async (status: number) => {
        const fetchedData = await data[status].fetchMore({
            variables: {
                // Update variables for pagination
                offset: data[status].books.length,
                limit: BOOKS_PAGE_SIZE, // Number of items to fetch in each subsequent load
                where: {
                    status: {
                        equals: data[status].title
                    }
                }
            },
        });

        if (fetchedData.data.userBooks) {
            setData(prevData => {
                const newData = [...prevData];
                newData[status] = {
                    ...newData[status],
                    books: [...newData[status].books, ...fetchedData.data.userBooks],
                };
                return newData;
            });
        }
    };


    useEffect(() => {
        const loadData = async () => {
            const { data: readData, fetchMore: fetchMoreRead } = await loadBooks({
                variables: {
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                    where: {
                        status: {
                            equals: "Read"
                        }
                    }
                    ,
                    orderBy: {
                        order: SortOrder.Asc
                    }
                }
            });
            const { data: readingData, fetchMore: fetchMoreReading } = await loadBooks({
                variables: {
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                    where: {
                        status: {
                            equals: "Currently Reading"
                        }
                    }, orderBy: {
                        order: SortOrder.Asc
                    }
                },
            });
            const { data: wantToRead, fetchMore: fetchMoreWantToRead } = await loadBooks({
                variables: {
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                    where: {
                        status: {
                            equals: "Want to Read"
                        }
                    }, orderBy: {
                        order: SortOrder.Asc
                    }
                }
            });

            setData([
                {
                    title: "Want to Read",
                    books: wantToRead?.userBooks!.map((book: UserBook) => {
                        return {
                            id: book.book!.id,
                            title: book.book!.title,
                            order: book.order,
                            status: book.status
                        }
                    }) || [],
                    fetchMore: fetchMoreWantToRead
                }
                ,
                {
                    title: "Currently Reading",
                    books: readingData?.userBooks!.map((book: UserBook) => {
                        return {
                            id: book.book!.id,
                            title: book.book!.title,
                            order: book.order,
                            status: book.status
                        }
                    }) || [],
                    fetchMore: fetchMoreReading
                },
                {
                    title: "Read",
                    books: readData?.userBooks!.map((book: UserBook) => {
                        return {
                            id: book.book!.id,
                            title: book.book!.title,
                            order: book.order,
                            status: book.status

                        }
                    }) || [],
                    fetchMore: fetchMoreRead
                },
            ])


        };

        loadData();
    }, [loadBooks]);



    return (
        <div className="">
            <ColumnContainer data={data} />
            <button onClick={() => {
                loadMore(Status.WantToRead);
                loadMore(Status.CurrentlyReading);
                loadMore(Status.Read);
            }}>Fetch More</button>
        </div>
    );
}
export default Board
