import * as React from "react";
import { Container, Card, Skeleton } from ".";
import { STATE_STATUS } from "../constants/state";
import { useMovie } from "../hooks";

export default function NowPlaying() {
  const { status, data } = useMovie({ path: "now_playing" });
  const isLoading = status === STATE_STATUS.PENDING;
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-lg sm:text-2xl font-semibold">
            Now Playing
          </h2>
          <div className="flex overflow-x-scroll hide-scrollbar gap-2 p-1.5 -mx-1.5">
            {isLoading && [...Array(8)].map((e, idx) => <Skeleton key={idx} />)}
            {!isLoading &&
              data.map((movie, idx) => <Card movie={movie} key={idx} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
