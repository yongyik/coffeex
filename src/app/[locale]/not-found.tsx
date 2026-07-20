import type { Metadata } from "next";
import NotFoundContent from "@/components/site/NotFoundContent";

export const metadata: Metadata = {
  title: "404 | Morning Oak Coffee",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
