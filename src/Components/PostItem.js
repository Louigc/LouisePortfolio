import parse from "html-react-parser";

export default function PostItem({ post }) {

  return (
      <article>
          <h2>{parse(post.title.rendered)}</h2>
          {parse(post.content.rendered)}
      </article>
  );
}