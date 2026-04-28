import Breadcrumbs from "./Breadcrumbs";

export default function Home() {
  return (
    <div className="max-w-4xl">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold mb-4 text-tpDark border-b pb-4 border-gray-200">Introduction to WebSockets</h1>
      
      <div className="prose prose-lg text-gray-700 mt-6 leading-relaxed">
        <p className="mb-4">
          WebSockets is an advanced technology that makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4 text-tpDark">Why WebSockets?</h2>
        <p className="mb-4">
          Before WebSockets, the web was built around the HTTP request/response paradigm. A client loads a web page and then nothing happens until the user clicks onto the next page. Around 2005, AJAX started to make the web feel more dynamic. Still, all HTTP communication was steered by the client, which required user interaction or periodic polling to load new data from the server.
        </p>
        
        <div className="bg-[#fcf8e3] border-l-4 border-[#faebcc] p-4 my-6 rounded-r-md text-[#8a6d3b]">
          <p className="m-0 font-medium"><strong>Note:</strong> WebSockets represent a standard way to achieve real-time, bi-directional communication between client and server.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-tpDark">Code Example</h2>
        <p className="mb-4">Here is a simple example of establishing a WebSocket connection:</p>
        <pre className="bg-[#f8f9fa] border border-gray-200 text-sm text-[#e83e8c] p-4 rounded-md overflow-x-auto shadow-inner font-mono">
          <code>{`// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
});`}</code>
        </pre>
      </div>

      <div className="flex justify-between mt-12 border-t pt-6">
        <button className="px-5 py-2.5 border border-gray-300 rounded hover:bg-gray-50 font-semibold text-gray-700 shadow-sm transition-colors">&larr; Previous</button>
        <button className="px-5 py-2.5 bg-tpGreen-500 text-white rounded hover:bg-tpGreen-600 font-semibold shadow-sm transition-colors">Next &rarr;</button>
      </div>
    </div>
  );
}