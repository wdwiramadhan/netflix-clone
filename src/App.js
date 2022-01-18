import * as React from "react";
import { InView } from "react-intersection-observer";
import { Container, Card, Skeleton, Layout, Hero } from "./components";
import { STATE_STATUS } from "./constants/state";
import { useMovie } from "./hooks";

function NowPlaying() {
  const { status, data } = useMovie({ path: "now_playing" });
  const isLoading = status === STATE_STATUS.PENDING;
  return (
    <InView triggerOnce rootMargin="-20% 0px">
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={`${
            inView
              ? "opacity-100 transition translate-y-0 duration-500 delay-100 ease-out"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Container>
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-lg sm:text-2xl font-semibold">
                Now Playing
              </h2>
              <div className="flex overflow-x-scroll hide-scrollbar gap-2 p-2 -mx-2">
                {isLoading &&
                  [...Array(8)].map((e, idx) => (
                    <Skeleton key={idx} className="h-72 w-48 sm:h-80 sm:w-56" />
                  ))}
                {!isLoading &&
                  data.map((movie, idx) => <Card movie={movie} key={idx} />)}
              </div>
            </div>
          </Container>
        </section>
      )}
    </InView>
  );
}

function Popular() {
  const { status, data } = useMovie({ path: "popular" });
  const isLoading = status === STATE_STATUS.PENDING;
  return (
    <InView triggerOnce rootMargin="-20% 0px">
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={`${
            inView
              ? "opacity-100 transition translate-y-0 duration-500 delay-100 ease-out"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Container>
            <div className="flex flex-col gap-3 pb-16">
              <h2 className="text-white text-lg sm:text-2xl font-semibold">
                Popular
              </h2>
              <div className="flex overflow-x-scroll hide-scrollbar gap-2 p-2 -mx-2">
                {isLoading &&
                  [...Array(8)].map((e, idx) => (
                    <Skeleton key={idx} className="h-72 w-48 sm:h-80 sm:w-56" />
                  ))}
                {!isLoading &&
                  data.map((movie, idx) => <Card movie={movie} key={idx} />)}
              </div>
            </div>
          </Container>
        </section>
      )}
    </InView>
  );
}

function TopRated() {
  const { status, data } = useMovie({ path: "top_rated" });
  const isLoading = status === STATE_STATUS.PENDING;
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={`${
            inView
              ? "opacity-100 transition translate-y-0 duration-700 delay-100 ease-out"
              : "translate-y-16 opacity-0"
          }`}
        >
          <Container>
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-lg sm:text-2xl font-semibold">
                Top Rated
              </h2>
              <div className="flex overflow-x-scroll hide-scrollbar gap-2 p-2 -mx-2">
                {isLoading &&
                  [...Array(8)].map((e, idx) => (
                    <Skeleton key={idx} className="h-72 w-48 sm:h-80 sm:w-56" />
                  ))}
                {!isLoading &&
                  data.map((movie, idx) => <Card movie={movie} key={idx} />)}
              </div>
            </div>
          </Container>
        </section>
      )}
    </InView>
  );
}

function Upcoming() {
  const { status, data } = useMovie({ path: "upcoming" });
  const isLoading = status === STATE_STATUS.PENDING;
  return (
    <InView triggerOnce rootMargin="-20% 0px">
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={`${
            inView
              ? "opacity-100 transition translate-y-0 duration-500 delay-100 ease-out"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Container>
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-lg sm:text-2xl font-semibold">
                Upcoming
              </h2>
              <div className="flex overflow-x-scroll hide-scrollbar gap-2 p-2 -mx-2">
                {isLoading &&
                  [...Array(8)].map((e, idx) => (
                    <Skeleton key={idx} className="h-72 w-48 sm:h-80 sm:w-56" />
                  ))}
                {!isLoading &&
                  data.map((movie, idx) => <Card movie={movie} key={idx} />)}
              </div>
            </div>
          </Container>
        </section>
      )}
    </InView>
  );
}

export default function App() {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col gap-8 sm:gap-12">
        <TopRated />
        <Upcoming />
        <NowPlaying />
        <Popular />
      </div>
    </Layout>
  );
}
