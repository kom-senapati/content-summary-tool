import ReactMarkdown from 'react-markdown'

interface SummaryOutputProps {
    summary: string
    wordCount: number
    sentenceCount: number
}

export const SummaryOutput = ({ summary, wordCount, sentenceCount }: SummaryOutputProps) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-foreground mb-4">Summary</h2>
            <div className="h-96 overflow-y-auto bg-secondary p-4 rounded-md mb-4 text-secondary-foreground">
                <ReactMarkdown>{summary}</ReactMarkdown>
            </div>
            <div className="text-sm text-muted-foreground">
                {sentenceCount} sentences • {wordCount} words
            </div>
        </div>
    )
}
