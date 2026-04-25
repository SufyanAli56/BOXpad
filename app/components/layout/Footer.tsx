const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-gray-900">BlogApp</span>
            </div>
            <p className="text-gray-600 text-sm">
              A modern blog application showcasing clean UI design, 
              API integration, and responsive components.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  All Posts
                </a>
              </li>
              <li>
                <a href="/users" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Users
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Built With</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Next.js 16 & React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>JSONPlaceholder API</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 BlogApp. Built for front-end assessment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;