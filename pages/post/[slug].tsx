import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

const Post: React.FC<{ post: any }> = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }

  return (
    <Layout>
      <StyledPost className="post single-post">
        <div className="post-header big-title container medium">
          <h1 className="post-title">{post.title}</h1>
        </div>

        <div className="post-meta">
          <span className="post-meta-item post-meta-date">
            <time dateTime="YYYY-MM-DD">{post.published_at.split("T")[0]}</time>
          </span>
          <span className="post-meta-item post-meta-length">
            {post.reading_time} Minutes
          </span>
        </div>

        <div className="post-media">
          <img src={post.feature_image} />
        </div>

        <div
          className="post-content gh-content kg-canvas"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>

        <Share className="share">
          <a
            href={`https://www.facebook.com/sharer.php?u=https://contentturbine.com/post/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Facebook></Icon.Facebook>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=https://contentturbine.com/post/${post.slug}&title=${post.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Twitter></Icon.Twitter>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://contentturbine.com/post/${post.slug}&title=${post.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Linkedin></Icon.Linkedin>
          </a>
          <a
            href={`https://getpocket.com/edit?url=https://contentturbine.com/post/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Pocket></Icon.Pocket>
          </a>
        </Share>
      </StyledPost>
    </Layout>
  );
};

export default Post;

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5rem auto;

  .post-media {
    max-width: 40vw;
  }

  ${sizeAndDown("md")} {
    .post-media {
      max-width: none;
    }
    margin: 2rem;
  }
`;

const Share = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.teal};
    padding: 0 0.5rem;

    transition: all 0.25s;

    &:hover {
      color: ${({ theme }) => theme.colors.peach};
      fill: ${({ theme }) => theme.colors.peach};
    }
  }
`;
