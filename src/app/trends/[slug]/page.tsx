import TrendDetailsPage from "@/features/trends/details/page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <TrendDetailsPage slug={slug} />;
}
