import Link from 'next/link'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
  projectType
}) {
  return (
    <div className="post-preview">
      <div className="">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <Link href={`/posts/${slug}`} className="hover:underline">
        {/* <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link> */}
        {title}
      <h4>
        {projectType}
      </h4>
      <p className="leading-relaxed mb-4">{excerpt}</p>

      </Link>
    </div>
  )
}
