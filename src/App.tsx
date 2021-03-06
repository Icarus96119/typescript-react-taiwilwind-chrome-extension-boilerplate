import React from 'react';

function App() {

  const openAlert = () => {
    alert('Hello World!');
  };

  return (
    <div className="w-300 m-4">
      <div className="flex flex-col">
        <button className="py-2 px-4 bg-green-500 text-white rounded shadow-md hover:bg-green-700 focus:outline-none
          focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={openAlert}>
          Open Alert
        </button>
      </div>
    </div>
  );
}

export default App;
