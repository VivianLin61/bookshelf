"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { CommandMenu } from "@/components/command-menu";
import { UserAccountNav } from "@/components/user-account-nav";
import { marketingConfig } from "@/config/marketing";
import { User } from "next-auth";
import { Icons } from "./icons";
import { JouranlEntryModal } from "./modal/journal-entry-modal";
import useJouranlEntryModal from "@/hooks/use-journal-entry-modal";

interface SiteHeaderProps {
  user?: User;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ user }) => {
  const jouranlEntryModal = useJouranlEntryModal();
  return (
    <header className="container bg-background mx-auto">
      <div className="flex h-20 items-center justify-between py-6 space-x-4">
        <MainNav items={marketingConfig.mainNav} />
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <div className="flex-1 sm:grow-0">
            <CommandMenu />
          </div>
          <nav>
            {user ? (
              <div className="flex gap-4">
                <UserAccountNav
                  user={{
                    email: user.email,
                    name: user.name,
                    id: user.id,
                  }}
                />
                <button
                  className={cn(
                    buttonVariants({ variant: "tag", size: "xs" }),
                    "pl-2 pr-3"
                  )}
                  onClick={jouranlEntryModal.onOpen}
                >
                  <Icons.plus className="h-4 w-4 mr-1" />
                  Log
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
