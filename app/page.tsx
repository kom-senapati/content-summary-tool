import Header from "@/app/_components/header";
import { ContentSummaryTool } from "@/app/_components/content-summary-tool";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header />
      <CopilotKit runtimeUrl="/api/copilotkit">
        <ContentSummaryTool />
        <CopilotPopup
          instructions="This is the Content Summary Tool. It helps you summarize content.You are assistant for this app. Help user for understanding the content and summary!"
          labels={{
            title: "Assistant",
            initial:
                "Welcome to Content Summary Tool! What help do you need?",
          }}
        />
      </CopilotKit>
    </div>
  )
}
