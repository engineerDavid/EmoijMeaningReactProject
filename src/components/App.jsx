import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import {useState} from "react";
function createEntry(emojiTerm){
  return( <Entry 
  key={emojiTerm.id}
  emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description={emojiTerm.meaning}

  />);
}

function App() {
  const[searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <input className='field' type='text' placeholder="Search Emoji.." onChange={(event) => setSearchTerm(event.target.value)} />
      <dl className="dictionary">
        {emojipedia.filter((val) => {
          if (searchTerm == ""){
            return val
          } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.meaning.toLowerCase().includes(searchTerm.toLowerCase()) || val.emoji.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
