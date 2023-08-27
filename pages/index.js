import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro' 
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'



export default function Index({ preview, allPosts, posts }) {
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`DANIEL'S PORTFOLIO`}</title>
        </Head>
        <Container>
          <Intro />          

          <MoreStories posts={morePosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []

  return {
    props: { preview, allPosts},
  }
}
