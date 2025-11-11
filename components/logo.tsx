import Link from "next/link";
import { Doto } from "next/font/google";
import { cn } from "@/lib/utils";

const doto = Doto({
    subsets: ["latin"],
    weight: ["900"],
});

export default function Logo() {
    return (
        <Link href="/" className={cn(doto.className, "text-2xl text-foreground transition-colors hover:text-foreground/80")}>
            shrtlnk
        </Link>
    );
}