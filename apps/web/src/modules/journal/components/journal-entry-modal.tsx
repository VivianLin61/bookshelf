"use client";
import useUserBook from "@/stores/use-user-book";

import { Dispatch, SetStateAction } from "react";
import JournalEntryForm from "@/modules/journal/components/journal-entry-form";
import BookCover from "@/components/book-cover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useJournalEntryModal } from "../hooks/use-journal-entry-modal";

export const JouranlEntryModal: React.FC = ({

}) => {
    const userBook = useUserBook();
    const journalEntryModal = useJournalEntryModal();
    const onChange = (open: boolean) => {
        if (!open) {
            journalEntryModal.onClose();
        }
    };
    return (
        <>
            {userBook && userBook.data &&
                < Dialog open={journalEntryModal.isOpen} onOpenChange={onChange}>
                    <DialogContent className="flex min-w-[720px]">
                        <div className="flex gap-8 min-w-full">
                            <BookCover src={userBook.data.coverImage} />
                            <div className="flex text-sm flex-col w-[fill-available] justify-evenly">
                                <DialogHeader>
                                    {
                                        journalEntryModal.editId ? (
                                            <DialogTitle className="text-muted-foreground font-light">
                                                Edit Journal Entry
                                            </DialogTitle>
                                        ) : (
                                            <DialogTitle className="text-muted-foreground font-light">
                                                Add Journal Entry
                                            </DialogTitle>
                                        )
                                    }
                                    <DialogDescription className="text-black font-medium text-md">
                                        {userBook.data.title}
                                    </DialogDescription>
                                </DialogHeader>
                                <JournalEntryForm />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            }
        </>
    );
};
