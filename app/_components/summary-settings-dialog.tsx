import { Settings } from 'lucide-react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface SummarySettingsDialogProps {
    summaryPrompt: string
    setSummaryPrompt: (prompt: string) => void
}

export const SummarySettingsDialog = ({ summaryPrompt, setSummaryPrompt }: SummarySettingsDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Summary Settings</DialogTitle>
                    <DialogDescription>Customize the summarization prompt</DialogDescription>
                </DialogHeader>
                <Textarea
                    value={summaryPrompt}
                    onChange={(e) => setSummaryPrompt(e.target.value)}
                    className="min-h-[100px]"
                    placeholder="Enter your summarization prompt here..."
                />
                <DialogClose asChild>
                    <Button className="mt-4 w-fit" onClick={() => setSummaryPrompt(summaryPrompt)}>
                        Save
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}
