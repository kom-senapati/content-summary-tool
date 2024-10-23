import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/theme/theme-toggle";

export default function Header() {
    return (
        <header className="container py-6 px-4 md:px-6 mx-auto overflow-hidden flex items-center justify-center">
            <div className="flex-grow">
                <h1 className="text-2xl font-bold text-foreground">Content Summary Tool</h1>
            </div>
            <div className="flex space-x-4 items-center">
                <ModeToggle />
                <Link href="https://github.com/kom-senapati/content-summary-tool">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <GitHubLogoIcon className="w-[1.2rem] h-[1.2rem]" />
                    </Button>
                </Link>
            </div>
        </header>
    );
}