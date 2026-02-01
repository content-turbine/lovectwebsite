import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout";
import { sizeAndDown } from "../styles/responsive";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPosts() {
  return [];
  // const res = await fetch(
  //   `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  // ).then((res) => res.json());

  // const posts = res.posts;

  // return posts;
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const posts = await getPosts();
  return {
    revalidate: 10,
    props: { posts },
  };
};

const Blog: React.FC<{ posts: any[] }> = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <Container className="post-feed">
        {posts.map((post, index) => {
          return (
            <Article className="post" key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <div className="post-media">
                  <img src={post.feature_image} />
                </div>
              </Link>
              <div className="container">
                <div className="post-header">
                  <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                    <h1 className="post-title"> {post.title} </h1>
                  </Link>

                  <div className="post-meta">
                    <span className="post-meta-item post-meta-date">
                      <time dateTime="YYYY-MM-DD">
                        {post.published_at.split("T")[0]}
                      </time>
                    </span>
                    <span className="post-meta-item post-meta-length">
                      {post.reading_time} Minutes
                    </span>
                  </div>
                </div>

                {/* <div className="post-excerpt">{post.excerpt}</div> */}
              </div>
            </Article>
          );
        })}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem auto;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;

  width: 25%;
  transition: all 0.2s;

  h1 {
    font-size: 2rem;
  }

  .post-media img {
    border-radius: 20px;
  }

  .post-media,
  .post-title {
    cursor: pointer;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("md")} {
    margin: 1rem;
    width: 90%;

    .post-media,
    .container {
      max-width: none;
    }
  }
`;

export default Blog;
