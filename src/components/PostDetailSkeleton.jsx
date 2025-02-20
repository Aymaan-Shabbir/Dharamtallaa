const PostDetailSkeleton = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-90 flex flex-col items-center justify-start border p-5 bg-white rounded-lg shadow-lg transition duration-300 m-3">
        <div className="w-50 h-50 bg-gray-300 rounded-lg animate-pulse"></div>
        <h2 className="text-xl font-bold mt-3 text-gray-800 text-center bg-gray-300 w-3/4 h-6 animate-pulse"></h2>
        <p className="text-md font-semibold text-orange-600 mt-1 bg-gray-300 w-1/2 h-5 animate-pulse"></p>
        <p className="text-lg font-bold text-blue-700 mt-1 bg-gray-300 w-2/3 h-6 animate-pulse"></p>
        <p className="text-lg font-bold text-black mt-1 bg-gray-300 w-3/4 h-5 animate-pulse"></p>
        <p className="text-lg font-semibold text-black mt-1 bg-gray-300 w-full h-10 animate-pulse"></p>
      </div>
    </div>
  );
};

export default PostDetailSkeleton;
