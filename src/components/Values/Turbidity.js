import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const Turbidity = () => {
  const [tdsValue, getTDSV] = useState();
  useEffect(() => {
    const valueRef = firebase.database().ref();
    valueRef.on("value", (snapshot) => {
      const tds_Value = snapshot.val().TDS_value;

      const tdsValue = tds_Value;
      getTDSV(tdsValue);

      console.log("TDS->", tdsValue);
    });
  }, []);

  return (
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Turbidity</div>
        <div className="number">
          <span>{tdsValue}</span>
        </div>
      </div>
      <i className="bx bx-cart-alt cart"></i>
    </div>
  );
};

export default Turbidity;
