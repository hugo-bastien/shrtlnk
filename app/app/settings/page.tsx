import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shrtlnk/settings",
  description: "Settings.",
};

export default async function Page() {
    return (
        <h1>Settings</h1>
    )
}