import Card from './Component/Card';
import Test from './Component/Test';
import State from "./Component/State";
import Counter from "./Component/Counter";
import Form from "./Component/Form"
import AnotherForm from './Component/AnotherForm';

function App(){
   let firstName="Jay Shri Krushan"
   console.log(firstName)

const userFirs="Devanshu"
const userSecond="manny"
  const userThird="kizie"


return(
 
  <>
  <Test/>
  
  <h1 style={{backgroundColor:"red",color:"white"}}>Hello React Class</h1>
<p>Geeta Taskar</p>
<h2>Radhe Radhe {firstName}</h2>
<Card user={userFirs}/>
<Card user={userSecond}/>
<Card user={userThird}/> 
 <State/>
<Counter/> 
 <Form/>
<State/>
<AnotherForm/>
</> 

)
}
export default App;