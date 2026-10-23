import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous website — permanently redirected.
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/contacts", statusCode: 301 });
  },
});
