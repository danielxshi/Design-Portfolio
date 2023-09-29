import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import style from "../../styles/modules/_slug.module.scss";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Link from "next/link";
import BackButton from "../../components/Button/BackButton";
// !Testing CoverImage
import ImageHolder from "../../components/imageholder";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {/* <Header /> */}
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className={style["article-container"]}>
            <Head>
              <title>{`${post.title} | DANIEL'S PORTFOLIO `}</title>
              <meta property="og:image" content={post.coverImage.url} />
            </Head>

            {/* Project Header */}
            <section className="grid-container">
              {/* Header */}
              <div className={style["post-title-wrapper"]}>
                <div className="flex">
                  <BackButton href="/#expertises" />
                  <h1>{post.title}</h1>
                </div>
                <p>{post.projectDescription}</p>
              </div>

              {/* Project Overview */}
              <div className={style["project-overview"]}>
                <div>
                  <h3>Client</h3>
                  <p>{post.client}</p>
                </div>
                <div>
                  <h3>Task</h3>
                  <p>{post.task}</p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>{post.solution}</p>
                </div>
              </div>
            </section>

            {/* Project Details */}
            <div className={style["project-details"]}>
              <ul>
                <li>
                  <h5>Role</h5>
                  <p>{post.role}</p>
                </li>
                <li>
                  <h5>Team</h5>
                  <p>{post.team}</p>
                </li>
                <li>
                  <h5>Website</h5>
                  <p>{post.website}</p>
                </li>
              </ul>
            </div>

            <PostBody content={post.content} />
          </article>

          <section className={style["dark-mode"]}>
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

          <section
            className={[
              style["max-w-2xl mx-auto]"],
              style["post-body-container"],
              style["dark-mode"],
            ].join(" ")}
          >
            <h2 className="pt-32 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
              More Stories
            </h2>
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </section>
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
