import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const Ultrasonic = () => {
  const [ultrasonicValue, getUSV] = useState();

  useEffect(() => {
    const valueRef = firebase.database().ref();
    valueRef.on("value", (snapshot) => {
      const ultrasonic_Value = snapshot.val().ultrasonic_value;

      const ultrasonicValue = ultrasonic_Value;

      getUSV(ultrasonicValue);
      console.log("ultrasonic->", ultrasonicValue);
    });
  }, []);
  return (
    <div className="box-3 box">
      <div className="right-side">
        <div className="box-topic">Ultrasonic</div>
        <div className="number">
          {" "}
          <span>{ultrasonicValue}</span>
        </div>
      </div>
      <i className="bx bx-cart cart three"></i>
    </div>
  );
};

export default Ultrasonic;
