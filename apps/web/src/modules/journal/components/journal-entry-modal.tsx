"use client";
import useUserBook from "@/stores/use-user-book";

import { Dispatch, SetStateAction, useState } from "react";
import { useGetMostRecentJournalEntryQuery } from "@/graphql/graphql";
import JournalEntryForm from "@/modules/journal/components/journal-entry-form";
import BookCover from "@/components/book-cover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type progressTypes = {
    originalPage: number;
    originalPercent: number;
    page: number;
    percent: number;
}
interface JouranlEntryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete?: () => void;
    status: string;
    editId: string,
    setStatus: Dispatch<SetStateAction<string>>;
    currentProgress: progressTypes;
    setCurrentProgress: Dispatch<SetStateAction<progressTypes>>;
}

export const JouranlEntryModal: React.FC<JouranlEntryModalProps> = ({
    currentProgress,
    setCurrentProgress,
    isOpen,
    onClose,
    editId,
    onDelete,
    status,
    setStatus
}) => {
    const userBook = useUserBook();
    const isEdit = typeof onDelete === "function";
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="flex min-w-[720px]">
                <div className="flex gap-8 min-w-full">
                    <BookCover src={null} />
                    <div className="flex text-sm flex-col w-[fill-available] justify-between">
                        <DialogHeader>
                            {
                                editId ? (
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
                        <JournalEntryForm
                            editId={editId}
                            currentProgress={currentProgress}
                            setCurrentProgress={setCurrentProgress}
                            status={status}
                            setStatus={setStatus}
                            onDelete={onDelete}
                            onClose={onClose}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
