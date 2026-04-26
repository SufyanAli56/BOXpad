import ApiDemo from '../components/features/ApiDemo';

export default function ApiDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            API Integration Demonstration
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page demonstrates the integration with all three required APIs from the assignment:
            JSONPlaceholder, DummyJSON, and Reqres.
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-blue-900 mb-2">API Endpoints Used:</h2>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>✅ <strong>JSONPlaceholder</strong>: https://jsonplaceholder.typicode.com (Free, no auth)</li>
            <li>✅ <strong>DummyJSON</strong>: https://dummyjson.com (Free, no auth)</li>
            <li>✅ <strong>Reqres</strong>: https://reqres.in/api (Free public API, no auth required)</li>
          </ul>
          <p className="text-blue-700 text-xs mt-2">
            <strong>Important:</strong> We use the free public endpoints that don't require API keys. 
            The error you saw was likely from accidentally accessing api.reqres.in instead of reqres.in/api.
          </p>
        </div>

        <ApiDemo />
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            ← Back to Chat App
          </a>
        </div>
      </div>
    </div>
  );
}