import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shrtlnk/dashboard",
  description: "Dashboard.",
};

export default async function Page() {
    return (
        <h1>Dashboard</h1>
    )
}