import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import style from "../../styles/modules/_slug.module.scss";
import ImageHolder from "../../components/imageholder";
import SectionSeparator from "../../components/section-separator";
import SlugNav from "../../components/Navigation/slug-nav";
import ScrollTop from "../../components/Button/ScrollToTop";
import Footer from "../../components/footer";
import { InfoModal } from "../../components/project-info-modal";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import SlugHeader from "../../components/slug-header";
import Link from "next/link";
import NextButton from "../../components/Button/NextButton";
import MoreStories from "../../components/more-stories";

import ContentfulHeaderImage from "../../components/Image/contentful-header-image";

export default function Post({ post, morePosts, preview }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const router = useRouter();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <AnimatePresence>
      <Layout preview={preview}>
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
            {showModal ? null : (
              <article className={[style["article-container"]].join(" ")}>
                <Head>
                  <title>{`${post.title} | Daniel Shi `}</title>
                  {/* <meta property="og:image" content={post.coverImage.url} /> */}
                </Head>
                <SlugNav onClick={openModal} />
                <ScrollTop />

                <SlugHeader
                  client={post.title}
                  projectType={post.projectType}
                  details={post.role}
                  title={post.projectDescription}
                  projectRole={post.task}
                  projectTask={post.solution}
                  role={post.role}
                  team={post.team}
                  website={post.website}
                />

                <SectionSeparator />
                <section
                  id="wireframes"
                  className={[
                    style["post-body-container"],
                    style["slug-final-product"],
                  ].join(" ")}
                >
                  <motion.div>
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
