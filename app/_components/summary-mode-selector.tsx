import { AlignLeft, List } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useCopilotAction, useCopilotReadable } from '@copilotkit/react-core'

interface SummaryModeSelectorProps {
    summaryMode: 'paragraph' | 'bullet'
    setSummaryMode: (mode: 'paragraph' | 'bullet') => void
}

export const SummaryModeSelector = ({ summaryMode, setSummaryMode }: SummaryModeSelectorProps) => {
    useCopilotReadable({
        description: "Summary mode",
        value: summaryMode,
    })

    useCopilotAction({
        name: "Change summary mode",
        description: "Change the mode of the summary",
        parameters: [{
            name: "mode",
            type: "string",
            value: summaryMode
        }],
        handler: (args) => {
            setSummaryMode(args.mode as 'paragraph' | 'bullet')
        }
    })
    return (
        <div className="flex items-center gap-4">
            <Label htmlFor="summary-mode">Summary Mode</Label>
            <ToggleGroup
                id="summary-mode"
                type="single"
                value={summaryMode}
                onValueChange={(value) => value && setSummaryMode(value as 'paragraph' | 'bullet')}
            >
                <ToggleGroupItem value="paragraph" aria-label="Paragraph mode">
                    <AlignLeft className="h-4 w-4 mr-2" />
                    Paragraph
                </ToggleGroupItem>
                <ToggleGroupItem value="bullet" aria-label="Bullet points mode">
                    <List className="h-4 w-4 mr-2" />
                    <span className="hidden md:block">Bullet Points</span>
                    <span className="md:hidden">Bullet</span>
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}
