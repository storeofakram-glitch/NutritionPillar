"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { ShippingZoneForm } from "./shipping-zone-form"
import { useState } from "react"

export default function AddShippingZoneDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Zone
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Shipping Zone</DialogTitle>
          <DialogDescription>
            Define a new state and the cities within it, along with their shipping prices.
          </DialogDescription>
        </DialogHeader>
        <ShippingZoneForm onFormSubmit={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
