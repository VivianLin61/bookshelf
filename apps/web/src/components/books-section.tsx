"use client"
import React, { useEffect } from "react";
import { Icons } from "./icons";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Book from "./book";
import { Shelf, UserBook } from "../graphql/graphql";
import { useAppDispatch } from "@/stores";
import { initShelves } from "@/stores/shelf-slice";

interface BooksSectionProps {
    booksData: UserBook[];
    heading?: string;
    details?: {
        progress: number;
        date_started: string;
    };
    shelves: Shelf[]
}

export const BooksSection: React.FC<BooksSectionProps> = ({
    booksData,
    heading,
    details,
    shelves
}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(initShelves(shelves));
    }, []);

    return (
        <>
            {heading && (
                <div className="pt-4">
                    <div className="flex justify-between font-bold">
                        <h3>{heading}</h3>
                        <h3>More</h3>
                    </div>
                    <hr className="mt-1" />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
                {booksData && booksData.map((book, idx) => (
                    <div key={idx}>
                        {/* Cover View */}
                        <Book userBook={book} details={details} responsive showRemoveBook={false} />
                        {/* Responsive View */}
                        <div className="flex flex-col md:hidden">
                            <div className="pt-4">
                                <div className="flex justify-between text-primary font-bold uppercase ">
                                    <h3>When Breath Becomes Air</h3>
                                    <div className="flex flex-grow justify-end">
                                        <button
                                            className={cn(
                                                buttonVariants({ variant: "tag", size: "xs" }),
                                                "mr-1 mb-1 cursor-pointer"
                                            )}
                                        >
                                            Currently Reading{" "}
                                            <Icons.chevronDown className="ml-2 h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="">By Paul Kalanithi</div>
                                {details && (
                                    <div className="flex text-sm">
                                        <div className="flex items-center text-muted-foreground ">
                                            <div className="align-middle">
                                                <Icons.pieChart className="h-3 w-3 opacity-50" />
                                            </div>
                                            <span className="ml-1.5">90%</span>
                                        </div>
                                        <Dot />
                                        <div className="text-muted-foreground">
                                            Started on April 20, 2023
                                        </div>
                                    </div>
                                )}
                                <hr className="mt-1" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
