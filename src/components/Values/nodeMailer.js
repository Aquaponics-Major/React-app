import firebase from '../../util/firebase.js';

import nodemailer from 'nodemailer';


const db = firebase.database().ref();
db.on("value", (snapshot) => {
    const dht_Value__Humidity = snapshot.val().DHT_value_Humidity;

    const dhtValueH = dht_Value__Humidity;
    


//   const nodemailer = require("nodemailer");

  let timeObj = new Date();

  let day = ("0" + timeObj.getDate()).slice(-2);
  let month = ("0" + (timeObj.getMonth() + 1)).slice(-2);
  let year = timeObj.getFullYear();
  let hours = timeObj.getHours();
  let minutes = timeObj.getMinutes();

  let timestamp =
    "At " + day + "-" + month + "-" + year + " " + hours + ":" + minutes;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "aquaponics2022mp@outlook.com",
      pass: "aquaponics2022",
    },
  });
  const options = {
    from: "aquaponics2022mp@outlook.com",
    to: "tusharkarade10@gmail.com",
    subject: "Readings of aquaponics system " + timestamp,
    text: "Email received "  +dhtValueH
  };
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("sent: " + info.response);
  });
});
