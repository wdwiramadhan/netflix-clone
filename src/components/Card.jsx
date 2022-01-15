function Card(props) {
  const { movie } = props;
  return (
    <div className="flex flex-col flex-shrink-0 w-48 sm:w-60 gap-2 transform ease-in-out duration-300 hover:scale-[1.03]">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={`${movie.original_title} poster`}
          className="rounded-md w-48 sm:w-60"
        />
        <div className="absolute left-1 bottom-1.5">
          <div className="flex items-center gap-1 bg-stone-800 px-3 py-1 rounded-2xl opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h3 className="text-white text-sm">{movie.vote_average}</h3>
          </div>
        </div>
      </div>
      <div className="flex relative px-2">
        <h3 className="text-white text-sm sm:text-base truncate overflow-x-hidden">
          {movie.original_title}
        </h3>
      </div>
    </div>
  );
}

export default Card;
