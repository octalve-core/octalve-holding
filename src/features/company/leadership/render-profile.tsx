import { renderLeadershipProfile } from "./profile/registry";

type LeadershipProfileRendererProps = {
  slug: string;
};

export function LeadershipProfileRenderer({
  slug,
}: LeadershipProfileRendererProps) {
  return renderLeadershipProfile(slug);
}
