import { CheckCircle2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface SuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const SuccessDialog = ({ open, onOpenChange }: SuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[28rem] border-0 bg-white text-center dark:bg-neutral-900">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
            <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <DialogTitle className="text-center text-2xl font-semibold">
            Inquiry Sent!
          </DialogTitle>
        </DialogHeader>
        <p className="text-neutral-600 dark:text-neutral-400">
          Thank you for your detailed requirements! We've received your inquiry
          and our team will analyze it and get back to you within 24 hours.
        </p>
        <Button
          onClick={() => onOpenChange(false)}
          className="mt-4 w-full rounded-xl"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
