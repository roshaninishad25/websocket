import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto sticky top-16 bg-white hidden md:block">
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4 text-tpDark border-b pb-2">Learn WebSockets</h3>
        <ul className="space-y-2 text-sm text-tpGray font-medium">
          <li>
            <Link href="/blog/websockets-intro" className="hover:text-tpGreen-500 block py-1.5 px-2 bg-gray-100 rounded text-tpGreen-600">Introduction to WebSockets</Link>
          </li>
          <li>
            <Link href="/blog/websockets-setup" className="hover:text-tpGreen-500 block py-1.5 px-2">Environment Setup</Link>
          </li>
          <li>
            <Link href="/blog/websockets-api" className="hover:text-tpGreen-500 block py-1.5 px-2">WebSocket API</Link>
          </li>
          <li>
            <Link href="/blog/websockets-events" className="hover:text-tpGreen-500 block py-1.5 px-2">Events & Methods</Link>
          </li>
        </ul>

        <h3 className="font-bold text-lg mt-8 mb-4 text-tpDark border-b pb-2">Full-Stack Frontend</h3>
        <ul className="space-y-2 text-sm text-tpGray font-medium">
          <li>
            <Link href="/courses/react-basics" className="hover:text-tpGreen-500 block py-1.5 px-2">React Basics</Link>
          </li>
          <li>
            <Link href="/courses/nextjs-routing" className="hover:text-tpGreen-500 block py-1.5 px-2">Next.js Routing</Link>
          </li>
          <li>
            <Link href="/courses/state-management" className="hover:text-tpGreen-500 block py-1.5 px-2">State Management</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}