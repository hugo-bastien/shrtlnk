import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shrtlnk/links",
  description: "Links.",
};

export default async function Page() {
    return (
        <h1>Links</h1>
    )
}