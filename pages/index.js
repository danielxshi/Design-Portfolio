import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import About from "../components/about";
import GridContainer from "../components/grid-container";

export default function Index({ preview, allPosts, posts }) {
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`DANIEL'S PORTFOLIO`}</title>
        </Head>
        <GridContainer>
          <div className="min-w-fit min-h-fit h-screen col-start-1 col-span-5 flex flex-col m-auto justify-between">
            <Intro />
            <About />
          </div>
          <div className="min-w-fit min-h-fit col-start-1 col-span-full">
            <MoreStories posts={allPosts} />
          </div>
        </GridContainer>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, allPosts },
  };
}
