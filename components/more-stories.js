import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="more-stories min-w-fit min-h-fit col-start-1 col-span-full">
      <div className="post-preview-container grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 mb-20">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
