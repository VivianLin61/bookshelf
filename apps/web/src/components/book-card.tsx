"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Dot } from "lucide-react";
import { createContext, useContext } from "react";
import { BookData } from "@/types/interfaces";
import { BookRating } from "./rating";
import BookCover from "./book-cover";
import { useRouter } from "next/navigation";

const BookCardContext = createContext<{ book: BookData } | null>(null);

export function useBookCardContext() {
    const context = useContext(BookCardContext);
    if (!context) {
        throw new Error(
            "BookCard.* component must be rendered as child of BookCard component"
        );
    }
    return context;
}

export default BookCardContext;

// Book Header Component
export function BookShelves() {
    const { book } = useBookCardContext();
    const shelves = book.categories;
    return (
        <div>
            {shelves.map((shelf: string, index: number) => (
                // <SecondaryButton label={shelf} />
                <button
                    key={index}
                    className={cn(
                        buttonVariants({ variant: "tag", size: "xs" }),
                        "mr-1 mb-1"
                    )}
                    disabled={true}
                >
                    {shelf}
                </button>
            ))}
        </div>
    );
}

export function BookInfo() {
    return (
        <div className="flex text-xs font-medium w-max items-center">
            <div>Currently Reading</div>
            <Dot />
            <div>Finished on April 20, 2023</div>
            <Dot />
            <div>Avg Rating 4.8</div>
        </div>
    );
}

interface BookContentProps {
    image?: React.ReactNode;
    shelves?: React.ReactNode;
    info?: React.ReactNode;
}

export function BookContent({ image, shelves, info }: BookContentProps) {
    const { book } = useBookCardContext();
    return (
        <div className="flex items-start space-x-4 rounded-md">
            <BookCover src={book.image} size={"sm"} />
            <div className="flex items-start flex-col justify-center gap-1">
                <CardTitle className="text-[16px] leading-tight ">
                    {book.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-1">
                    {book.author}
                </CardDescription>
                {shelves}
                {info}
            </div>
        </div>
    );
}

// Book Actions Component
export function BookActions({ buttons }: { buttons: React.ReactNode[] }) {
    return (
        <div className="flex flex-grow justify-end gap-2">
            {buttons.map((button, index) => (
                <div key={index}>
                    <Button variant={"action"}
                        size={"xs"}>
                        {button}
                    </Button>
                </div>
            ))}
        </div>
    );
}


interface BookCardProps {
    book: BookData;
    content?: React.ReactNode;
    actions?: React.ReactNode;
}

export function BookCard({ content, actions, book }: BookCardProps) {
    const [rating, setRating] = React.useState(0); // Initial value
    const router = useRouter();
    return (
        <BookCardContext.Provider value={{ book }}>
            <div>
                <Card onClick={() => {
                    router.push(`/book/${book?.id}`);

                }} className={cn("border-none shadow-none p-0 overflow-hidden cursor-pointer")}>
                    <CardContent className="p-4 flex gap-4 justify-between">
                        {content}
                        <div>
                            {actions}
                            <BookRating rating={rating} setRating={setRating} bookId={book.id} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </BookCardContext.Provider>
    );
}

BookCard.BookContent = BookContent;
BookCard.BookActions = BookActions;
