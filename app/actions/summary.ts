'use server'

import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function summarizeText(
  text: string,
  summaryLength: number,
  summaryMode: 'paragraph' | 'bullet',
  summaryPrompt: string
) {
  try {
    const prompt = `${summaryPrompt}
Summarize the following text into ${summaryLength} words.
Return only the summary(and nothing else) in proper markdown format for a ${summaryMode} summary.
${summaryMode === 'paragraph' ? 'Use a well-organized paragraph.' : 'Use bullet points (-) for key points.'}

TEXT:
${text}`

    const resp = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'gemma2-9b-it',
    })

    const summarizedText = resp.choices[0]?.message?.content || ''

    return { success: true, summarizedText }
  } catch (error) {
    console.error('Error:', error)
    return { success: false, error: 'An error occurred during translation' }
  }
}
