import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

// Sementara hardcoded, nanti bisa dari API
const posts = {
  1: { title: "Mastering React Performance", content: "Full article content here...", date: "2026-01-15" },
  2: { title: "Data Analysis with Python", content: "Full article content here...", date: "2026-01-10" },
  3: { title: "Forex Trading Strategies", content: "Full article content here...", date: "2026-01-05" },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <div>Post not found</div>;

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-cyan-400 hover:underline mb-8 inline-block">&larr; Back to Blog</Link>
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-400 mb-8">{post.date}</p>
          <div className="prose prose-invert max-w-none">
            {post.content}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}