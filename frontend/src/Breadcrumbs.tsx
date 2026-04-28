import Link from 'next/link';

export default function Breadcrumbs() {
  return (
    <nav className="flex text-sm text-gray-500 mb-6 bg-tpLight p-3.5 rounded-md border border-gray-200">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-tpGreen-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Home
          </Link>
        </li>
        <li><span className="mx-2 text-gray-400">/</span></li>
        <li>
          <Link href="/tutorials" className="hover:text-tpGreen-500">Tutorials</Link>
        </li>
        <li><span className="mx-2 text-gray-400">/</span></li>
        <li className="text-gray-800 font-semibold" aria-current="page">WebSockets Introduction</li>
      </ol>
    </nav>
  );
}