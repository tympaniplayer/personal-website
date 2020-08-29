import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getLatestPost } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const latestPost = getLatestPost();
  return {
    props: {
      latestPost
    }
  };
}

export default function Home({ latestPost }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I'm Nate Palmer. A lead engineer at Cox Automotive. I'm taking this
          opportunity to use this website to learn nextjs while polishing up on
          my react skills
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Latest Blog Post</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key={latestPost.id}>
            <Link href="/posts/[id]" as={`/posts/${latestPost.id}`}>
              <a>{latestPost.title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={latestPost.date} />
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
