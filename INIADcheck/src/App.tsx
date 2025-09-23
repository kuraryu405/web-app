import { useState } from 'react';

function App() {
  {/* ここに書く関数を入れる */}
  function addFile() {
    const file = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (file.files) {
      const fileArray = Array.from(file.files);
      console.log(fileArray);
    } 

  }
  return (
  <>
      {/* ここに書くコードを入れる */}
      <header className="border-b">
        <h1 className='text-2xl font-bold text-left ml-4 text-black'>INIADcheck</h1>
      </header>

      <main>
        <div className="p-4 space-x-2">
          <input type="file" className="file-input file-input-info" />
          <button className="btn btn-info" onClick={addFile}>+Add</button>

        </div>

      </main>

    </>
  )
}

export default App
