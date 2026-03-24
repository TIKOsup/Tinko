"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { apiItems, sourceItems, type SearchItem } from "@/data/search-data"

const KIND_LABEL: Record<SearchItem["kind"], string> = {
  source: "Source",
  procedure: "Procedure",
  function: "Function",
}

export default function Search() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/") return
      const target = event.target as HTMLElement | null
      const isInput =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      if (isInput) return
      event.preventDefault()
      setOpen(true)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const handleSelect = React.useCallback((item: SearchItem) => {
    setOpen(false)
    // TODO: navigate/open item here (e.g. router push or file open)
    console.log("Selected", item)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        type="button"
        className="w-64 justify-start rounded-lg text-left font-light tracking-tight"
      >
        Search documentation...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search documentation..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Sources">
              {sourceItems.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.label}
                  keywords={item.keywords}
                  onSelect={() => handleSelect(item)}
                >
                  <span className="truncate font-medium">{item.label}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {KIND_LABEL[item.kind]}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Procedures & Functions">
              {apiItems.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.label}
                  keywords={item.keywords}
                  onSelect={() => handleSelect(item)}
                >
                  <span className="truncate font-medium">{item.label}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {KIND_LABEL[item.kind]}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
