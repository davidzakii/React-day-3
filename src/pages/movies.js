import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Button from "../component/header/button";
import { axiosInstance } from "../network/axiosConfig";

export default function Movies(props) {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const useMatch = useRouteMatch();
  console.log(params);
  // useEffect(()=>{
  //     return ()=> alert("are you shore out")
  // },[])
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/3/movie/${params.id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(history);
  //   console.log(location);
  //   console.log(useMatch);
  return (
    <>
      <div className="card mx-auto my-5" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <p className="card-text text-center">
                <small className="bg-success p-2 rounded-circle text-center">{movie.vote_count} vote</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="m-5">Movies {user.overview}</h1> 
      <Button name={"Go to movie"} handleClick={() => history.push("/login")} /> */}
    </>
  );
}
