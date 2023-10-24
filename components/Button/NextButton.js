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
          <Link key={post.title} href={post.slug}>{post.title}</Link>
        ))}
      </div>
    </div>
  );
}
