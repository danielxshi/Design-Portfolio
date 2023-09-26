import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Container from "../components/home-container";
import Landing from "../components/landing";

export default function Index({ preview, allPosts, posts }) {
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`DANIEL'S PORTFOLIO`}</title>
        </Head>
        <Container>
          <Landing />
          <MoreStories posts={allPosts} />
        </Container>
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
