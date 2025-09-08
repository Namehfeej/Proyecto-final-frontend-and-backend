import { HeartContext } from "./HeartContext";
import { useState } from "react";

function HeartProvider( {children} ) {

    const [favorites, setFavorites] = useState([]);
    

  return (
        <HeartContext.Provider value={
          [favorites,
          setFavorites]
        }>
            {children}
        </HeartContext.Provider>
  )
}

export default HeartProvider
