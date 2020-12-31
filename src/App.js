import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieCard from './movieCard';
import Slider from './slider';






 
function App() {
  
  const [data, setData] = useState(null);

  const [value, setValue] = useState();
  let onInput = ({target:{value}}) => setValue(value)
  const useFetch = (url) => {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        if(json.hasOwnProperty("Search")){
          setData(json);
        }
        else{
          setData({Search:[json]});
        }
        console.log("jafhjef"+json.hasOwnProperty("Search"));
       
      }
      fetchData();
    }, [url]);
  
    return data;
  };
  //http://www.omdbapi.com/?i=tt3896198&apikey=404018e3&s=batman
  //http://www.omdbapi.com/?apikey=[your-apikey]&
  const URL ="http://www.omdbapi.com/?i=tt3896198&apikey=404018e3&s=batman"
  
   useFetch(URL);
 
  const fetchData=()=>{
   // console.log("here"+input);
   
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=404018e3&s="+value)
    .then(response => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url
      console.log("hereis the link",jsonData)
      setData(jsonData)
      if(jsonData.hasOwnProperty("Search")){
        setData(jsonData);
      }
      else{
        setData({Search:[jsonData]});
      }

    })
    .catch((error) => {
      // handle your errors here
     
      console.error(error)
    })
  }
   console.log("data"+JSON.stringify(data));
  
if(data != null && data !=undefined && data.hasOwnProperty("Error")!=true){
  return (
    <div className="container" >
     <InputGroup className="mb-3 input-class"  size="lg" >
     <FormControl
       placeholder="Search Movie Here...."
       aria-label="Recipient's username"
       aria-describedby="basic-addon2"
       onChange={onInput} 
     />
     <InputGroup.Append>
     <Button variant="primary" size="lg" onClick={fetchData}>Search</Button>{' '}
     </InputGroup.Append>
   </InputGroup>
   {data != undefined && <Slider sData={data.Search}/>}
 <Container>
 <Row >
   
   {data != undefined && <MovieCard cData={data.Search}/>}  
   </Row>
 </Container>
 
 
   </div>
   );
}
else{
  return (
    <div className="container" >
    <InputGroup className="mb-3 input-class"  size="lg" >
    <FormControl
      placeholder="Search Movie Here...."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={onInput} 
    />
    <InputGroup.Append>
    <Button variant="primary" size="lg" onClick={fetchData}>Search</Button>{' '}
    </InputGroup.Append>
  </InputGroup>
  
    <h1>Data is not available </h1>


  </div>

  );
}
 
}

export default App;
