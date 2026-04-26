'use client';

import { useState } from 'react';
import { usersApi, commentsApi, dummyJsonApi, reqresApi } from '../../lib/api';

export default function ApiDemo() {
  const [activeApi, setActiveApi] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testApi = async (apiName: string) => {
    setActiveApi(apiName);
    setLoading(true);
    setError(null);
    setData(null);

    try {
      let result;
      switch (apiName) {
        case 'jsonplaceholder-users':
          result = await usersApi.getAll();
          break;
        case 'jsonplaceholder-comments':
          result = await commentsApi.getAll();
          break;
        case 'dummyjson-users':
          result = await dummyJsonApi.getUsers();
          break;
        case 'dummyjson-products':
          result = await dummyJsonApi.getProducts();
          break;
        case 'reqres-users':
          result = await reqresApi.getUsers();
          break;
        default:
          throw new Error('Unknown API');
      }
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const apis = [
    {
      name: 'JSONPlaceholder Users',
      key: 'jsonplaceholder-users',
      url: 'https://jsonplaceholder.typicode.com/users',
      description: 'Get all users from JSONPlaceholder'
    },
    {
      name: 'JSONPlaceholder Comments',
      key: 'jsonplaceholder-comments',
      url: 'https://jsonplaceholder.typicode.com/comments',
      description: 'Get all comments from JSONPlaceholder'
    },
    {
      name: 'DummyJSON Users',
      key: 'dummyjson-users',
      url: 'https://dummyjson.com/users',
      description: 'Get users from DummyJSON'
    },
    {
      name: 'DummyJSON Products',
      key: 'dummyjson-products',
      url: 'https://dummyjson.com/products',
      description: 'Get products from DummyJSON'
    },
    {
      name: 'Reqres Users (Free)',
      key: 'reqres-users',
      url: 'https://reqres.in/api/users',
      description: 'Get users from Reqres free public API (no auth required)'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">API Integration Demo</h2>
        <p className="text-gray-600 mb-6">
          This demo showcases integration with all three required APIs:
        </p>

        {/* API Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {apis.map((api) => (
            <div key={api.key} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{api.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{api.description}</p>
              <p className="text-xs text-blue-600 mb-3 break-all">{api.url}</p>
              <button
                onClick={() => testApi(api.key)}
                disabled={loading}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading && activeApi === api.key ? 'Loading...' : 'Test API'}
              </button>
            </div>
          ))}
        </div>

        {/* Results */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading data from {activeApi}...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-red-800 mb-2">API Error</h3>
            <p className="text-red-600 mb-2">{error}</p>
            {error.includes('missing_api_key') && (
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> This error occurs when accessing api.reqres.in instead of reqres.in/api. 
                  We use the free public API at reqres.in/api which doesn't require authentication.
                </p>
              </div>
            )}
          </div>
        )}

        {data && !loading && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              API Response ({activeApi})
            </h3>
            <div className="bg-white rounded border p-4 max-h-96 overflow-auto">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              {Array.isArray(data) 
                ? `Loaded ${data.length} items`
                : data.users 
                ? `Loaded ${data.users.length} users`
                : data.data
                ? `Loaded ${data.data.length} items`
                : 'Data loaded successfully'
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}