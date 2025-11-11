import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shrtlnk/account",
  description: "Account.",
};

export default async function Page() {
    return (
        <h1>Account</h1>
    )
}