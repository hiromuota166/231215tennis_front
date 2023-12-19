import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Pythonサーバーのエンドポイントにリクエストを送信
    fetch('https://hello-world-pkza.onrender.com')
      .then(response => response.text()) // または response.json() など
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // 空の依存配列を使用して、コンポーネントのマウント時にのみ実行

  return (
    <div className="App">
      <div className='table'>
        {data ? <div dangerouslySetInnerHTML={{ __html: data }} /> : <div>Loading...</div>}
      </div>
    </div>
  );
}

export default App;
