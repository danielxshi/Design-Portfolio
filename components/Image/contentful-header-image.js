import ContentfulImage from "../contentful-image";
import Link from "next/link";
import cn from "classnames";

export default function ImageHolder({ title, url, slug }) {
  const image = (
    <ContentfulImage
      //   width={500}
      //   height={500}
      alt={`Cover Image for ${title}`}
      fill={true}
      src={url}
    />
  );

  return (
    <div className="test">
        {image}
    </div>
  );
}
