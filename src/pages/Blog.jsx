import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const posts = [
  {
    id: 1,
    title: "Mastering React Performance",
    excerpt: "Learn advanced techniques to optimize your React applications...",
    date: "2026-01-15",
    readTime: 5
  },
  {
    id: 2,
    title: "Data Analysis with Python",
    excerpt: "A comprehensive guide to pandas, numpy, and visualization...",
    date: "2026-01-10",
    readTime: 8
  },
  {
    id: 3,
    title: "Forex Trading Strategies",
    excerpt: "Professional insights into risk management and technical analysis...",
    date: "2026-01-05",
    readTime: 6
  }
];

export default function Blog() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">Blog</h1>
        <div className="space-y-6">
          {posts.map(post => (
            <ScrollReveal key={post.id}>
              <Link to={`/blog/${post.id}`}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:border-cyan-400 border border-white/10 transition">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-3">{post.excerpt}</p>
                  <div className="flex gap-4 text-sm text-cyan-400">
                    <span>{post.date}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}