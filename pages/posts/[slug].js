import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Link from "next/link";
// !Testing CoverImage
import ImageHolder from "../../components/imageholder";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | DANIEL'S PORTFOLIO `}</title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              {/* <PostHeader title={post.title} coverImage={post.coverImage} /> */}

              {/* Project Header */}
              <div className="grid-container">
                <p>{post.projectDescription}</p>
                <Link target="_blank" href={post.projectUrl}>
                  Click
                </Link>
                <p>{post.projectType}</p>
                <p>{post.projectDate}</p>
              </div>

              <PostBody content={post.content} />
            </article>

            <section>
              <h3>Wireframes</h3>
              <ImageHolder title={post.title} url={post.wireframe1.url} />
              <ImageHolder title={post.title} url={post.wireframe2.url} />
              <ImageHolder title={post.title} url={post.wireframe3.url} />
              <ImageHolder title={post.title} url={post.wireframe4.url} />
              <ImageHolder title={post.title} url={post.wireframe5.url} />
              <ImageHolder title={post.title} url={post.wireframe6.url} />
              <ImageHolder title={post.title} url={post.wireframe7.url} />
              <ImageHolder title={post.title} url={post.wireframe8.url} />
            </section>

            {/* <CoverImage title={title} url={coverImage.url} /> */}
            <SectionSeparator />
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
              More Stories
            </h2>
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
