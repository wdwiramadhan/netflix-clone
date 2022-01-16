import * as React from "react";
import { STATE_STATUS } from "../constants/state";
const apiKey = process.env.REACT_APP_API_KEY;

export default function useMovie(props) {
  const url = `https://api.themoviedb.org/3/movie/${props.path}?api_key=${apiKey}&language=en-US`;
  const [movies, setMovies] = React.useState({
    data: [],
    status: STATE_STATUS.IDLE,
    error: "",
  });

  React.useEffect(() => {
    function getMovies() {
      setMovies({ ...movies, status: STATE_STATUS.PENDING });
      fetch(url)
        .then((res) => res.json())
        .then((res) =>
          setMovies({
            ...movies,
            status: STATE_STATUS.RESOLVED,
            data: res.results.slice(0, 11),
          })
        )
        .catch(() => {
          setMovies({
            ...movies,
            status: STATE_STATUS.REJECTED,
            error: "Something went wrong",
          });
        });
    }
    getMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return movies;
}
