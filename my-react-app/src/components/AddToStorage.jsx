export function addToStorage(entry, key)
    {
      console.log(entry, key);
     
      const entryArr = JSON.parse(localStorage.getItem(key)) || [];

      console.log(entryArr);
      
      entryArr.push(entry);
 
      localStorage.setItem(key, JSON.stringify(entryArr));
    }