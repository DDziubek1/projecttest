const EntryCard = () => {

    const storagedEntries = JSON.parse(localStorage.getItem('entry'));
    const storagedEntriesStringified = JSON.stringify(storagedEntries);
    console.log(storagedEntriesStringified);
    //stringify???
    //console.log(storagedEntries);
        const entries = storagedEntriesStringified.map((entry)=>
            <div>
                <img src={entry.image} alt={entry.title}>image</img>
                <date>{entry.date}</date>
                <p>{entry.content}</p>
          <h1>{entry.title}</h1>
          </div>
          )

          
        return {entries}
       
      }
  
  export default EntryCard;
  