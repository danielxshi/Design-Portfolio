import Image from "next/image";
import ContentfulImage from "./contentful-image";

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <ContentfulImage
        src={asset.url}
        width={1080}
        height={1080}
        alt={asset.description}
      />
    );
  }

  return null;
}
