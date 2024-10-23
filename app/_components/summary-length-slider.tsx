import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

interface SummaryLengthSliderProps {
    summaryLength: number
    setSummaryLength: (length: number) => void
}

export const SummaryLengthSlider = ({ summaryLength, setSummaryLength }: SummaryLengthSliderProps) => {
    return (
        <div className="space-y-2 w-full sm:w-auto">
            <Label htmlFor="summary-length">Summary Length</Label>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Short</span>
                <Slider
                    id="summary-length"
                    min={10}
                    max={200}
                    step={1}
                    value={[summaryLength]}
                    onValueChange={(value) => setSummaryLength(value[0])}
                    className="w-[200px]"
                />
                <span className="text-sm text-muted-foreground">Long</span>
            </div>
        </div>
    )
}
