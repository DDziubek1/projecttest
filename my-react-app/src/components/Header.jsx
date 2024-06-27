import AddNewEntry from './AddNewEntry'
import { useState } from 'react';
import { createPortal } from 'react-dom';
const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);


    return (
      <>
        <div className="flex justify-between items-center mb-4 bg-slate-300">
          <h1 className="text-2xl font-bold">Personal Dairy</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleShow}
          >
            Add Entry
          </button>
          {show && createPortal(
          <AddNewEntry onClose={() => setShow(false)} />,
          document.body)}

        </div>
      </>
    );
  };
  
  export default Header;