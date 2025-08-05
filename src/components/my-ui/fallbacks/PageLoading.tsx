function PageLoading() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute h-24 w-24 animate-ping rounded-full border-2 border-primary/80 opacity-75"></div>

        {/* Middle spinning ring */}
        <div className="absolute left-2 top-2 h-20 w-20 animate-spin rounded-full border-4 border-b-primary/10 border-l-primary/40 border-r-primary/40 border-t-primary"></div>

        {/* Inner pulsing circle */}
        <div className="absolute left-6 top-6 h-12 w-12 animate-pulse rounded-full bg-primary/20"></div>

        {/* Center dot */}
        <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}

export default PageLoading;
