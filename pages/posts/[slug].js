import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import MoreStories from "../../components/more-stories";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import style from "../../styles/modules/_slug.module.scss";
import ImageHolder from "../../components/imageholder";
import ContentfulHeaderImage from "../../components/Image/contentful-header-image";
import SectionSeparator from "../../components/section-separator";
import SlugNav from "../../components/Navigation/slug-nav";
import ScrollTop from "../../components/Button/ScrollToTop";
import { InfoModal } from "../../components/project-info-modal";
import Footer from "../../components/footer";

import React, { useState } from "react";
import NextButton from "../../components/Button/NextButton";
import { motion, AnimatePresence } from "framer-motion";

import SlugHeader from "./slug-header";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
                ["grid-container mobile-display-only relative"],
                style["slug-header"],
                style["slug-header-mobile"],
              ].join(" ")}
              // style={bgStyling}
            >
              <ContentfulHeaderImage url={post.headerImage.url} />
              {/* Header */}
              {/* <BackButton href="/#expertises" /> */}

              {/* <div className={[[""], style["post-title-wrapper"]].join(" ")}>
                <h3 className="">{post.title}</h3>
              </div> */}
              <div
                className={[
                  // ["col-start-1 col-end-auto mb-0 mt-auto flex flex-col"],
                  style["post-description"],
                ].join(" ")}
              >
                <h4 className="leading-none">website redesign | {post.title} </h4>
                <p>-</p>
                {/* <span>-</span> */}
                <h1 className={style["post-description"]}>
                  {post.projectDescription}
                </h1>
              </div>
            </section>

            {/* deesktop */}
            <section
              className={[
                ["grid-container relative"],
                style["slug-header"],
                style["slug-header-desktop"],
              ].join(" ")}
              // style={bgStyling}
            >
              <ContentfulHeaderImage url={post.headerImage.url} />
              {/* Header */}
              {/* <BackButton href="/#expertises" /> */}

              <div className={style["post-title-wrapper"]}>
                <h3>{post.title}</h3>
              </div>

              <div
                className={[
                  ["mt-auto"],
                  style["post-description"],
                  style["slug-header-grid"],
                  style["post-description-desktop-container"],
                ].join(" ")}
              >
                <div>
                  <h4 className="leading-none">Website Redesign | {post.title}</h4>
                  <p>-</p>
                </div>
                <h1 className={style["post-description"]}>
                  {post.projectDescription}
                </h1>
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
              <ul className="container max-w-2xl mx-auto col-span-full">
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
                <h2 id="overview" className="leading-none">
                  overview.
                </h2>
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

            <section
              id="process"
              className={[
                style["post-body-container"],
                ["product"],
              ].join(" ")}
            >
              {" "}
              {/* <h2 id="" className="leading-none">
                process.
              </h2> */}
              {/* <PostBody title={"process"} content={post.content} /> */}
            </section>
          </article>
          <section
            id="wireframes"
            className={[
              style["post-body-container"],
              style["slug-final-product"],
            ].join(" ")}
          >
            {" "}
            <h2 className="leading-none">wireframes.</h2>{" "}
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
          <section id="conclusion" className="grid-container">
            <h2 className="leading-none">conclusion.</h2>
          </section>

          <section
            className={[
              ["max-w-2xl mx-auto container]"],
              style["post-body-container"],
            ].join(" ")}
          >
            <h2 className="pt-32 mb-8">more projects.</h2>
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
