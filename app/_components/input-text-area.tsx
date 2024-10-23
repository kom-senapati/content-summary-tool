import { Clipboard } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface InputTextAreaProps {
    input: string
    setInput: (input: string) => void
    handleSummarize: () => void
}

export const InputTextArea = ({ input, setInput, handleSummarize }: InputTextAreaProps) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-foreground mb-4">Input</h2>
            <Textarea
                placeholder="Enter or paste your text and press 'Summarize.'"
                className="flex-grow mb-4 overflow-y-auto resize-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex justify-between items-center">
                <Button
                    variant="outline"
                    onClick={() => navigator.clipboard.readText().then((text) => setInput(text))}
                >
                    <Clipboard className="mr-2 h-4 w-4" />
                    Paste Text
                </Button>
                <Button onClick={handleSummarize} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Summarize
                </Button>
            </div>
        </div>
    )
}
