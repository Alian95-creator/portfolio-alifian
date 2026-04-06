export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; 2026 Alifian. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/alian95-creator" target="_blank" className="hover:text-purple-400 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alifian-candra-7259b5190/" target="_blank" className="hover:text-purple-400 transition">
            LinkedIn
          </a>
          <a href="mailto:alifiancandra73@gmail.com" className="hover:text-purple-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}