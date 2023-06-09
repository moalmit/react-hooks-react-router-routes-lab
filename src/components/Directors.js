import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsNames = directors.map((director)=>
    <div key={director.name}>
      {director.name}
      <ul>
        {director.movies.map((movie)=>
        <li key={movie}>{movie}</li>
        )}
      </ul>
    </div>
  )

  return (
  <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directorsNames}
  </div>
  )
}

export default Directors;
