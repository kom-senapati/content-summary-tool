import Header from "@/app/_components/header";
import { ContentSummaryTool } from "@/app/_components/content-summary-tool";

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header />
      <ContentSummaryTool />
    </div>
  )
}
