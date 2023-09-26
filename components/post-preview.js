import Link from 'next/link'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div className="post-preview">
      <div className="">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="">
        {/* <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link> */}
        {title}
      </h3>
      <h3>
        Logo Design
      </h3>
      <p className="leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
