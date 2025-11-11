import NotFoundContent from "@/components/not-found-content";
import { auth } from "@/auth";

export default async function NotFound() {
  const session = await auth();
  const isLoggedIn = Boolean(session?.user);

  return <NotFoundContent isLoggedIn={isLoggedIn} />;
}
