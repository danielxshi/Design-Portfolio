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
    <div style={{ position: "absolute" }} className="sm:mx-0">
      {slug ? (
        <Link
          style={{ position: "absolute" }}
          href={`/posts/${slug}`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
