import { MetaFunction } from "@remix-run/node";
import { GalleryProvider } from "~/components/gallery/GalleryContext";
import GalleryContent from "~/components/gallery/GalleryContent";

export const meta: MetaFunction = () => {
  return [
    { title: "Image Gallery - Edit and Optimize" },
    { name: "description", content: "Edit and optimize your images" },
  ];
};

export default function GalleryRoute(): JSX.Element {
  return (
    <GalleryProvider>
      <GalleryContent />
    </GalleryProvider>
  );
}
