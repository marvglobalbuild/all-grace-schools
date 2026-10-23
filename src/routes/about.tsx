import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous website — permanently redirected.
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/about-our-school", statusCode: 301 });
  },
});
