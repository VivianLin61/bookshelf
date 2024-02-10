"use client";
import React, { useCallback, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import EditShelfMenu from "./edit-shelf-menu";
import useCreateQueryString from "../../bookshelves/hooks/use-create-query-string";
import useShelfStore from "@/stores/use-shelf-store";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface ShelfItemProps {
    shelf: Shelf;
    isShelves?: boolean;
    setOpenAlert?: React.Dispatch<React.SetStateAction<boolean>>;
    padding?: string;
}

export const ShelfItem: React.FC<ShelfItemProps> = ({
    shelf,
    isShelves,
    setOpenAlert,
    padding = "py-2",

}) => {
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()
    const router = useRouter();
    const { selected } = useShelfStore()
    const updateSelected = useShelfStore((state) => state.updateSelected);
    const createQueryString = useCreateQueryString();

    const handleClick = useCallback(() => {
        (updateSelected(shelf.name!));
        startTransition(() => {
            router.push(
                `${pathname}?${createQueryString({
                    shelf: shelf.name,
                    page: 1,
                    status: "Any Status",
                })}`,
            )
        })
    }, [shelf]);

    return (
        <div
            className={`${shelf.name === selected
                && "bg-beige-100"
                } mr-4 text-sm  group/item flex rounded-lg px-3 font-medium `}
        >
            <div
                className={`w-[fill-available] cursor-pointer ${padding}`}
                onClick={handleClick}
            >
                <span className="flex items-center text-gray-400 hover:text-beige-700   ">
                    <Icons.shelf className="h-4 w-4 mr-2" />
                    {shelf.name}
                </span>
            </div>
            {
                setOpenAlert && isShelves ? (
                    <EditShelfMenu shelf={shelf} setOpenAlert={setOpenAlert} />
                ) : (
                    <span
                        className={`${isShelves ? "block group-hover/item:hidden items-end " : ""
                            } cursor-pointer px-1
                            text-gray-400 rounded-sm ${padding}`}
                    >
                        {shelf._count.userBooks}
                    </span>
                )
            }
        </div>

    );
};


export default ShelfItem;
