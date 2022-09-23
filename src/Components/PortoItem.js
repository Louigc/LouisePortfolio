import parse from "html-react-parser";

export default function PortoItem ({ post }) {

  return (
    <article key={post.id} className="portfolio_item">
          <h2>{parse(post.title.rendered)}</h2>
          {parse(post.content.rendered)}
      </article>
  );
}