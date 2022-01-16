import * as React from "react";
import { Container } from ".";

export default function Hero() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  return (
    <div className="flex flex-col h-96 sm:h-[32rem] bg-top bg-[url('https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg')]">
      <div className="flex items-center h-full bg-gradient-to-t from-stone-900 to-transparent">
        <Container>
          <div className="flex flex-col max-w-md gap-2 ">
            <h1
              className={`text-white text-4xl sm:text-6xl font-extrabold opacity-0 translate-y-10 ${
                isLoaded &&
                "opacity-100 transition duration-500 delay-100 ease-out translate-y-0"
              }`}
            >
              Movies
            </h1>
            <p
              className={`text-white text-sm sm:text-base opacity-0 translate-y-10 ${
                isLoaded &&
                "opacity-100 transition duration-500 delay-200 ease-out translate-y-0"
              }`}
            >
              Movies move us like nothing else can, whether they're scary,
              funny, dramatic, romantic or anywhere in-between. So many titles,
              so much to experience.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
