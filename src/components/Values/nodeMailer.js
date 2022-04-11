import firebase from '../../util/firebase.js';

import nodemailer from 'nodemailer';

import cron from 'node-cron';


const db = firebase.database().ref();

db.on("value", (snapshot) => {

    const dht_Value__Humidity = snapshot.val().DHT_value_Humidity;
    const ultrasonic_Value = snapshot.val().ultrasonic_value;
    const tds_Value = snapshot.val().TDS_value;
    const dht_Value_Temperature = snapshot.val().DHT_value_Temperature;
    const ph_Value = snapshot.val().ph_value;

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
    to: "aquaponics2022mp@gmail.com",
    subject: "Readings of aquaponics system " + timestamp,
    text: "Humidity: "  + dht_Value__Humidity + "%\nTemperature: " + dht_Value_Temperature + "°C\npH: " + ph_Value + "\nUltrasonic sensor: " + ultrasonic_Value + " cm\nTurbidity: " +tds_Value +" ppm\n"
  };

  cron.schedule('0 0 */03 * * *', ()=>{

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("sent: " + info.response);

    })

  });
});
