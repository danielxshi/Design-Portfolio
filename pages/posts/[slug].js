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

// import SlugHeader from "./slug-header";

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
    <AnimatePresence>
      <Layout preview={preview}>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <InfoModal
              content={post.content}
              showModal={showModal}
              setShowModal={setShowModal}
              morePosts={morePosts}
            />
            {showModal ? (
              <div className="hidden"></div>
            ) : (
              <article className={[style["article-container"]].join(" ")}>
                <Head>
                  <title>{`${post.title} | DANIEL'S PORTFOLIO `}</title>
                  <meta property="og:image" content={post.coverImage.url} />
                </Head>
                <SlugNav onClick={openModal} />
                {/* <NextButton morePosts={morePosts}/> */}
                <ScrollTop />

                {/* <SlugHeader
                  details={post.role}
                  title={post.projectDescription}
                  description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit, eius vel minus magnam labore veniam, rem excepturi temporibus aliquam, nesciunt ratione soluta? Earum dolores officia eaque eveniet, assumenda nemo."
                  }
                /> */}
                {/* mobile */}
                <section
                  className={[
                    ["grid-container mobile-display-only relative"],
                    style["slug-header"],
                    style["slug-header-mobile"],
                  ].join(" ")}
                >
                  {/* <ContentfulHeaderImage url={post.headerImage.url} /> */}

                  <div className={[style["post-description"]].join(" ")}>
                    <h4 className="leading-none">
                      website redesign | {post.title}{" "}
                    </h4>
                    <p>-</p>

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
                >
                  {/* <ContentfulHeaderImage url={post.headerImage.url} /> */}

                  <div
                    className={[
                      ["mt-auto"],
                      style["post-description"],
                      style["slug-header-grid"],
                      style["post-description-desktop-container"],
                    ].join(" ")}
                  >
                    <div>
                      <h4 className="leading-none">
                        Website Redesign | {post.title}
                      </h4>
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

                <SectionSeparator />
                <section
                  id="wireframes"
                  className={[
                    style["post-body-container"],
                    style["slug-final-product"],
                  ].join(" ")}
                >
                  <motion.div
                    // initial={{ opacity: 0, }}
                    // animate={{ opacity: 1  }}
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <ImageHolder title={post.title} url={post.wireframe1.url} />
                    <ImageHolder title={post.title} url={post.wireframe2.url} />
                    <ImageHolder title={post.title} url={post.wireframe3.url} />
                    <ImageHolder title={post.title} url={post.wireframe4.url} />
                    <ImageHolder title={post.title} url={post.wireframe5.url} />
                    <ImageHolder title={post.title} url={post.wireframe6.url} />
                    <ImageHolder title={post.title} url={post.wireframe7.url} />
                    <ImageHolder title={post.title} url={post.wireframe8.url} />
                  </motion.div>
                </section>
                {/* {morePosts && morePosts.length > 0 && (
              <NextButton posts={morePosts}/>

            )} */}
                {/* // <MoreStories posts={morePosts} /> */}
              </article>
            )}
          </>
        )}
        <Footer />
      </Layout>
    </AnimatePresence>
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