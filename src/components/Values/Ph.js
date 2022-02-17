import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const Ph = () => {
  const [phValue, getPHV] = useState();

  useEffect(() => {
    const valueRef = firebase.database().ref();
    valueRef.on("value", (snapshot) => {
      const ph_Value = snapshot.val().ph_value;

      const phValue = ph_Value;
      getPHV(phValue);

      console.log("Ph->", phValue);
    });
  }, []);

  return (
    <div className="box-2 box">
      <div className="right-side">
        <div className="box-topic">pH </div>
        <div className="number">
          <span>{phValue}</span>
        </div>
      </div>
      <i className="bx bxs-cart-add cart two "></i>
    </div>
  );
};

export default Ph;
