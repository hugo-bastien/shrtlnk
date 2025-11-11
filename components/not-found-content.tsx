'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";

type NotFoundContentProps = {
  isLoggedIn: boolean;
};

export default function NotFoundContent({ isLoggedIn }: NotFoundContentProps) {
  const router = useRouter();

  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col">
      <Navigation />
      <div className="flex flex-1 items-center justify-center px-6 py-24">
        <section className="flex max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            This link doesn’t exist.
          </h1>
          <p className="text-lg text-foreground/80">
            The page you’re after was moved or never existed. Jump back to the
            homepage or explore the dashboard to keep shortening links.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => router.back()}>Go back</Button>
            {isLoggedIn && (
              <Button asChild variant="outline">
                <Link href="/app/dashboard">Open dashboard</Link>
              </Button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
