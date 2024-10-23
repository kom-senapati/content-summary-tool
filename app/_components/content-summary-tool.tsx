'use client'

import { useState } from 'react'

import { summarizeText } from '@/app/actions/summary'
import { Card, CardContent } from '@/components/ui/card'
import { SummaryOutput } from '@/app/_components/summary-output'
import { InputTextArea } from '@/app/_components/input-text-area'
import { SummaryModeSelector } from '@/app/_components/summary-mode-selector'
import { SummaryLengthSlider } from '@/app/_components/summary-length-slider'
import { SummarySettingsDialog } from '@/app/_components/summary-settings-dialog'
import { useCopilotAction, useCopilotReadable } from '@copilotkit/react-core'

export function ContentSummaryTool() {
  const [input, setInput] = useState('')
  const [summary, setSummary] = useState('')
  const [summaryLength, setSummaryLength] = useState(50)
  const [summaryMode, setSummaryMode] = useState<'paragraph' | 'bullet'>('paragraph')
  const [summaryPrompt, setSummaryPrompt] = useState('Summarize the following text:')

  const handleSummarize = async () => {
    if (input === '') {
      setSummary('')
      return
    }
    const { summarizedText } = await summarizeText(input, summaryLength, summaryMode, summaryPrompt)
    setSummary(summarizedText as string)
  }

  const wordCount = input.split(/\s+/).filter((word) => word.length > 0).length
  const sentenceCount = input.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length

  useCopilotReadable({
    description: "Content to be summarized",
    value: input,
  })

  useCopilotReadable({
    description: "Summary of the content",
    value: summary,
  })

  useCopilotAction({
    name: "Summarize",
    description: "Call the summarization action!",
    handler: handleSummarize
  })

  return (
    <main className="container py-6 px-4 md:px-6 mx-auto overflow-hidden flex items-center justify-center">
      <Card className="w-full max-w-7xl bg-card text-card-foreground">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mb-4">
            <SummaryModeSelector
              summaryMode={summaryMode}
              setSummaryMode={setSummaryMode} />
            <div className="flex justify-between items-center">
              <SummaryLengthSlider
                summaryLength={summaryLength}
                setSummaryLength={setSummaryLength} />
              <SummarySettingsDialog
                summaryPrompt={summaryPrompt}
                setSummaryPrompt={setSummaryPrompt} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 h-[calc(100vh-300px)]">
            <InputTextArea
              input={input}
              setInput={setInput}
              handleSummarize={handleSummarize} />
            <SummaryOutput
              summary={summary}
              wordCount={wordCount}
              sentenceCount={sentenceCount} />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
