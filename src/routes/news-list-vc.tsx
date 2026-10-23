import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous website — permanently redirected.
export const Route = createFileRoute("/news-list-vc")({
  beforeLoad: () => {
    throw redirect({ to: "/news", statusCode: 301 });
  },
});
