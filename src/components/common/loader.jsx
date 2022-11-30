import React, { useState } from "react";
import Images from "../../Assets";

import ClipLoader from "react-spinners/ClipLoader";

export const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#222");

  return (
    <div className="loader-wrap">
      <span className="loader">
        <img src={Images.loader} alt="loader" />
        {setLoading(!loading)}
        {
          <ClipLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
        {/* <h2>test</h2> */}
      </span>
    </div>
  );
};

export default Loader;
