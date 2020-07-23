import React from "react";
import "./Enterance.scss";

const Enterance: React.FC<{}> = () => {
  return (
    <div className="enterance">
      <div className="enterance__introduction">
        {`Hey, It's  `}
        <span role="img" aria-label="hey" style={{ fontStyle: "normal" }}>
          👋
        </span>
        <hr className="hr" />
        <div className="enterance__introduction__title">{`Ilayda Cansin Koc!`}</div>
      </div>
    </div>
  );
};

export default Enterance;
