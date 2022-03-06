import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosConfig";

export default function Home() {
  const [moviesHome, setMoviesHome] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/3/movie/popular", {
        params: {
          limit: 5,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setMoviesHome(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios.post("https://fakestoreapi.com/users",{
    //   username:"kero",
    //   email: "kero@gmail.com"
    // },{
    //   params: {
    //     test: "tes"
    //   },
    //   //withCredientials: true
    // }).then((res)=>{
    //   console.log(res)
    // }).catch((err)=>{
    //   console.log(err)
    // })
  }, []);
  return (
    <>
      <div className="row row-cols-4 row-cols-md-4 g-4">
        {moviesHome.map((movie, index) => {
          return (
            <div key={index} className="col-2 m-5">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title text-center"> {movie.title} </h5>
                  <p className="card-text text-center">{movie.vote_average}</p>
                  <Link className="btn btn-success text-center" to={`/movie/${movie.id}`} key={movie.original_title}>
                    Go to movie
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
