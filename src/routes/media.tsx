import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous website — permanently redirected.
export const Route = createFileRoute("/media")({
  beforeLoad: () => {
    throw redirect({ to: "/school-life", statusCode: 301 });
  },
});
