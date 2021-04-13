import React, {useState, useEffect} from 'react';
import List from './List';
import Page from './Page';

export default function App() {

  const[myList, setMyList] = useState([]);
  const[myPage, setMyPage] = useState('');
  

useEffect(()=>{loadData()},[]);
const loadData= async()=>{
  try{const responcse  = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
  const data= await responcse.json();
  setMyList(data);
  console.log(data)
}
  catch (errorM){
 document.getElementById('msg').style.display= 'block';
  }

}

function yourСhoiceHandler (yourchoice){
setMyPage(yourchoice);
}
function comeBackHandler(){
  setMyPage('');
}
 
return (
  
    <div className="App">
{ myPage === '' ?   myList.map(listItem => {
        return <List myListObj={listItem} key={listItem.code} click={yourСhoiceHandler} />
     }) : <Page   myListObj={myPage} key={myPage.code} comeBack={comeBackHandler}  />

}
   <p id="msg" >Incorrect API address </p> 
    </div>
  );
}


