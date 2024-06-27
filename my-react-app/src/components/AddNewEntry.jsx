import { useState } from "react";
import { addToStorage } from "./AddToStorage";
export default function  AddNewEntry ({onClose,}) {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
   
    
    
    const handleSave = () => {
       if (title && date && content) {

      const newEntry = { 'title':title, 'date':date, 'image':image, 'content':content };
      //const entryArr = JSON.parse(localStorage.getItem('entry')) || [];
      //entryArr.push(newEntry);
     // const arr = [];
     // arr.push(JSON.stringify(newEntry));
   //   localStorage.setItem('entry',arr);
      //const oldData = JSON.parse(localStorage.getItem('entry'));  
      //localStorage.setItem('entry', JSON.stringify([...oldData,...newEntry]));
      //localStorage.setItem('entry', JSON.stringify(entryArr));


      
      addToStorage(newEntry,'entry');

      onClose();
    } else {

      alert("please fill all required fields");
    }
  };
   //console.log({ title, date, image, content });

    


    return <>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
           
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add new Entry</h3>
              <div class="mt-2">


                <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full p-2 border rounded"
              required
              placeholder="Please enter your title"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full p-2 border rounded"
              required
              placeholder="Please enter your date"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Image URL (optional)</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="url"
              className="w-full p-2 border rounded"
              placeholder="Please enter your image"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 rounded border"
              rows="4"
              required
            />
          </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button  onClick={handleSave} type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
          <button onClick={onClose} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
    
    
    </>
}