import { notFound } from "next/navigation";
import { Suspense } from "react";

/**
 * Catch-all so unknown URLs render the branded 404 inside the site layout.
 * Reading `params` makes this resolve per request; calling notFound() at build
 * time would prerender an empty error shell instead of the branded page.
 */
async function NotFoundTrigger({
  params,
}: {
  params: PageProps<"/[locale]/[...rest]">["params"];
}): Promise<null> {
  await params;
  notFound();
}

export default function CatchAllPage({ params }: PageProps<"/[locale]/[...rest]">) {
  return (
    <Suspense fallback={null}>
      <NotFoundTrigger params={params} />
    </Suspense>
  );
}
