import React, {useState, useEffect} from 'react';

function App(){

  const[data, setData] = useState('')
  
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);
  return(
      <div className="App">
      <header className="App-header">
        <h1>Hello from React.js</h1>
        <button type="button" class="btn btn-primary">Connecter to tiktok</button>
        <p>Data from Flask API: {data}</p>
      </header>


    </div>
  )
}


export default App;