import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-16 bg-tpGreen-500 text-white sticky top-0 z-50 flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          tutorialspoint
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <Link href="/courses" className="hover:text-green-100 transition-colors">Courses</Link>
          <Link href="/blog" className="hover:text-green-100 transition-colors">Blog</Link>
          <Link href="/tutorials" className="hover:text-green-100 transition-colors">Tutorials</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex bg-white text-gray-800 rounded-md px-3 py-2 items-center">
          <input type="text" placeholder="Search tutorials..." className="outline-none bg-transparent text-sm w-64" />
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <button className="bg-white text-tpGreen-600 px-5 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-gray-100 transition">Login</button>
      </div>
    </header>
  );
}