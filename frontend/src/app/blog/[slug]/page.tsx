import CourseSchema from "../../../CourseSchema";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Mock content fetching
  const title = "Implementing WebSocket Chat";
  const description = "Learn how to build a real-time chat application using WebSockets and Next.js.";

  return (
    <div className="max-w-4xl">
      <CourseSchema title={title} description={description} url={`https://example.com/blog/${params.slug}`} />
      
      <h1 className="text-4xl font-bold mb-4 text-tpDark border-b pb-4">{title}</h1>
      <div className="prose prose-lg text-gray-700 mt-6 max-w-none">
        <p>{description}</p>
        
        <h2>MDX & Markdown Support</h2>
        <p>This content area supports rendering parsed MDX content. Here is an example of code block rendering:</p>
        
        <pre className="bg-[#f8f9fa] border border-gray-200 text-sm text-[#e83e8c] p-4 rounded-md overflow-x-auto">
          <code>{`// Server-side WebSocket implementation
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
  ws.send('something');
});`}</code>
        </pre>
        
        <div className="mt-12 bg-tpLight p-6 rounded-lg border border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-xl m-0">Unlock Full Course</h3>
            <p className="text-sm text-gray-500 m-0">Get lifetime access for $49.99</p>
          </div>
          {/* This button would integrate with the Stripe backend */}
          <button className="bg-tpGreen-500 text-white px-6 py-3 rounded-md font-bold hover:bg-tpGreen-600 transition shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}