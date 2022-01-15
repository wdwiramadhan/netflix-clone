import { Container } from ".";

export default function Hero() {
  return (
    <div className="flex flex-col h-96 sm:h-[32rem] bg-top bg-[url('https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg')]">
      <div className="flex items-center h-full bg-gradient-to-t from-stone-900 to-transparent">
        <Container>
          <div className="flex flex-col max-w-md gap-2">
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold">
              Movies
            </h1>
            <p className="text-white text-sm sm:text-base">
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
