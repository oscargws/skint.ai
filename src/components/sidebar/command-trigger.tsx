"use client";

import * as React from "react";
import { CommandMenu } from "./command-menu";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function CommandTrigger() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm text-muted-foreground sm:pr-12"
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex font-normal items-center">
          <Search className="mr-2 h-4 w-4" />
          Search...
        </span>
        <kbd className="pointer-events-none absolute right-1.5 top-1 hidden h-[22px] select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandMenu open={open} onOpenChange={setOpen} />
    </>
  );
}
