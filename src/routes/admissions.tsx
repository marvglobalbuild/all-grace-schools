import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous website — permanently redirected.
export const Route = createFileRoute("/admissions")({
  beforeLoad: () => {
    throw redirect({ to: "/admission-process", statusCode: 301 });
  },
});
