import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import style from "../../styles/modules/_slug.module.scss";
import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Link from "next/link";
import BackButton from "../../components/Button/BackButton";
// !Testing CoverImage
import ImageHolder from "../../components/imageholder";
import SlugNav from "../../components/Navigation/slug-nav";

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

            {/* mobile */}
            <section
              className={[
                ["grid-container mobile-display-only"],
                style["slug-header"],
                style["slug-header-mobile"],
              ].join(" ")}
            >
              {/* Header */}
              <BackButton href="/#expertises" />

              <div className={style["post-title-wrapper"]}>
                {" "}
                <h1>{post.title}</h1>
              </div>
              <div
                className={[
                  // ["col-start-1 col-end-auto mb-0 mt-auto flex flex-col"],
                  style["post-description"],
                ].join(" ")}
              >
                <h4 className="leading-none">website redesign</h4>
                <p>-</p>
                {/* <span>-</span> */}
                <p className={style["post-description"]}>
                  {post.projectDescription}
                </p>
              </div>
            </section>

            {/* deesktop */}
            <section
              className={[
                ["grid-container"],
                style["slug-header"],
                style["slug-header-desktop"],
              ].join(" ")}
            >
              {/* Header */}
              <BackButton href="/#expertises" />

              <div className={style["post-title-wrapper"]}>
                {" "}
                <h1>{post.title}</h1>
              </div>

              <div
                className={[
                  [""],
                  style["post-description"],
                  style["slug-header-grid"],
                  style["post-description-desktop-container"],
                ].join(" ")}
              >
                <div>
                  <h4 className="leading-none">Website Redesign</h4>
                  <p>-</p>
                </div>
                <p className={style["post-description"]}>
                  {post.projectDescription}
                </p>
              </div>

              <div
                className={[
                  ["mt-auto mb-0 "],
                  style["project-details-desktop"],
                  style["project-details"],
                ].join(" ")}
              >
                <ul>
                  <li>
                    <h4>Role</h4>
                    <p>{post.role}</p>
                  </li>
                  <li>
                    <h4>Team</h4>
                    <p>{post.team}</p>
                  </li>
                  <li>
                    <h4>Website</h4>
                    <p>{post.website}</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Project Header */}

            {/* Project Details */}
            <div
              className={[
                ["mobile-display-only"],
                style["project-details"],
                [" grid-container"],
              ].join(" ")}
            >
              <ul className="col-span-full">
                <li>
                  <h4>Role</h4>
                  <p>{post.role}</p>
                </li>
                <li>
                  <h4>Team</h4>
                  <p>{post.team}</p>
                </li>
                <li>
                  <h4>Website</h4>
                  <p>{post.website}</p>
                </li>
              </ul>
            </div>

            {/* Project Overview */}
            <div
              className={[
                style["project-overview"],
                ["grid-container"],
                [""],
              ].join(" ")}
            >
              {/* Subnav */}
              <SlugNav title={post.title} />
              <div className="container max-w-2xl mx-auto">
                <h2 className="leading-none">overview.</h2>
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
            </div>

            <PostBody content={post.content} />
          </article>
          <section
            className={[
              style["post-body-container"],
              style["slug-final-product"],
            ].join(" ")}
          >
            {" "}
            <h2>Wireframes</h2>
            <div>
              <ImageHolder title={post.title} url={post.wireframe1.url} />
              <ImageHolder title={post.title} url={post.wireframe2.url} />
              <ImageHolder title={post.title} url={post.wireframe3.url} />
              <ImageHolder title={post.title} url={post.wireframe4.url} />
              <ImageHolder title={post.title} url={post.wireframe5.url} />
              <ImageHolder title={post.title} url={post.wireframe6.url} />
              <ImageHolder title={post.title} url={post.wireframe7.url} />
              <ImageHolder title={post.title} url={post.wireframe8.url} />
            </div>
          </section>

          {/* <CoverImage title={title} url={coverImage.url} /> */}

          <section
            className={[
              ["max-w-2xl mx-auto container]"],
              style["post-body-container"],
            ].join(" ")}
          >
            <h2 className="pt-32 mb-8">More Projects</h2>
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
