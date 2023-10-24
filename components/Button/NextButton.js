import Link from "next/link";

export default function NextButton({ posts }) {
  return (
    <div className="col-end-9 flex text-cta-wrapper">
      <p className="mr-3">Next</p>
      <div className="text-cta">
        <div
          className="w-[1em] h-[1em] rounded-full"
          style={{ backgroundColor: "tomato" }}
        ></div>
        {posts.map((post) => (
          <Link href={post.slug}>{post.title}</Link>
        ))}
      </div>
    </div>
  );
}

// import PostPreview from "../components/post-preview";

// export default function MoreStories({ posts }) {
//   return (
//     <section className="more-stories min-w-fit min-h-fit col-start-1 col-span-full">
//       <div className="post-preview-container grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 mb-20">
//         {posts.map((post) => (
//           <PostPreview
//             key={post.slug}
//             title={post.title}
//             coverImage={post.coverImage}
//             slug={post.slug}
//             excerpt={post.excerpt}
//             projectType={post.projectType}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
