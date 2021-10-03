export default function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-normal text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-2 py-2 text-xs font-normal">
            <span className="text-gray-500">Previous</span>
          </a>
          <a
            href="#"
            className="bg-primary text-white relative inline-flex items-center px-2 py-0.5 border text-xs rounded font-medium"
          >
            1
          </a>
          <a href="#" className="relative inline-flex items-center px-2 py-2 text-xs font-normal">
            <span className="text-gray-500">Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
