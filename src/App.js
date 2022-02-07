import {useState, useEffect} from 'react';
import database from './firebase';

function App() {
const [name , setName] = useState();
const [age , setAge] = useState();
var[valuex, setVal]= useState();
var [val,getVal]=useState();

	
// Push Function
const Push = () => {
	database.ref("user").set({
	name : name,
	age : age,
	}).catch(alert);
}
const Puss = () => {
	database.ref("ultra_sonic").set({
	valuex: valuex,

	}).catch(alert);
}
const Pus = () => {
	database.ref("ultra_sonic").on({
	val: val,

	}).catch(alert);
}


const dbRef = database.ref('ultra_sonic');
dbRef.child("value").child(getVal).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
dbRef.on('value', snapshot => {
  console.log(snapshot.val().valuex);
  val=snapshot.val().valuex;
});


console.log(`value =${val}`)


return (
	<div className="App" style={{marginTop : 250}}>
	<center>
  
	<input placeholder="Enter your name" value={name}
	onChange={(e) => setName(e.target.value) } />
 
	<br/><br/>
	<input placeholder="Enter your age"  value={age}
	onChange={(e) => setAge(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter your valuex"  value={valuex}
	onChange={(e) => setVal(e.target.value)}/>
	<br/><br/>
  <h1 >value = {val}</h1>
	<br/><br/>
	<button onClick={Push}>PUSH</button>
	<button onClick={Puss}>PUSS</button>
	{/* <button onClick={Puss}>PUS</button> */}
	</center>
  
	</div>
);
}

export default App;
