import { LeadershipProfileRenderer } from "@/features/company/leadership/render-profile";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LeadershipProfileRoute({ params }: PageProps) {
  const { slug } = await params;

  return <LeadershipProfileRenderer slug={slug} />;
}
