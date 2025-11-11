import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col">
      <Navigation />
      <div className="flex flex-1 flex-col items-center px-6 py-24">
        <section className="flex w-full max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Share clean, memorable links in seconds.
          </h1>
          <p className="text-lg text-foreground/80">
            Shrink long URLs, customize them to match your brand, and track
            their performance with real-time analytics. Shrtlnk keeps your
            audience focused on what matters.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button><a href="#get-started">Get Started</a></Button>
            <Button><a href="#learn-more">Learn More</a></Button>
          </div>
        </section>
        <section
          id="learn-more"
          className="mt-16 grid w-full max-w-3xl gap-6 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 sm:grid-cols-3"
        >
          <div>
            <h2 className="text-lg font-semibold">Branded Links</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Keep your identity front and center with custom aliases and
              domains.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Instant Sharing</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Generate and share short links in one click from any device.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Rich Analytics</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Understand audience engagement with detailed click and location
              data.
            </p>
          </div>
        </section>
        <section
          id="get-started"
          className="mt-16 text-center text-sm text-foreground/70"
        >
          No account yet?{" "}
          <a className="font-semibold text-foreground" href="/signup">
            Create one now
          </a>
          .
        </section>
      </div>
    </main>
  );
}
