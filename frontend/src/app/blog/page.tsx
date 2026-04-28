import CourseSchema from "../../CourseSchema";
import Link from 'next/link';

// Mocking 20 unique posts for the blog
const posts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: i < 10 ? `Advanced WebSockets Guide - Part ${i + 1}` : `Full-Stack Frontend Mastery - Module ${i - 9}`,
  slug: `post-${i + 1}`,
  category: i < 10 ? 'WebSockets' : 'Frontend',
  excerpt: `Learn the essential concepts and best practices for building scalable applications with ${i < 10 ? 'WebSockets' : 'modern Frontend frameworks'}.`,
}));

export default function BlogPage() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-tpDark border-b pb-4">Blog & Courses</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <span className="text-xs font-bold text-tpGreen-600 uppercase tracking-wider mb-2 block">{post.category}</span>
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-tpDark hover:text-tpGreen-500">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-tpGreen-600 font-semibold hover:underline">Read Article &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sidebar for Blog Section */}
      <aside className="w-full md:w-80">
        <div className="bg-tpLight p-6 rounded-lg border border-gray-200 sticky top-24">
          <h3 className="font-bold text-lg mb-4 text-tpDark">Search Blog</h3>
          <input type="text" placeholder="Search 20+ articles..." className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:border-tpGreen-500" />
          
          <h3 className="font-bold text-lg mb-4 text-tpDark border-t pt-6">Related Categories</h3>
          <ul className="space-y-2 text-sm text-tpGray">
            <li><a href="#" className="hover:text-tpGreen-500">WebSockets Security</a></li>
            <li><a href="#" className="hover:text-tpGreen-500">Socket.io vs Native</a></li>
            <li><a href="#" className="hover:text-tpGreen-500">React Server Components</a></li>
            <li><a href="#" className="hover:text-tpGreen-500">Tailwind CSS Advanced</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}