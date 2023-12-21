'use client'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Pythonサーバーからデータを取得
    fetch('https://hello-world-pkza.onrender.com')  // FlaskサーバーのURLに合わせて調整してください
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);  // 空の依存配列は、コンポーネントのマウント時にのみ実行されることを意味します

  return (
    <div>
      <h1>コート予約状況</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            時間: {item.time}, コート1: {item.status1}, コート2: {item.status2}, コート3: {item.status3}, コート4: {item.status4}, コート5: {item.status5}, コート6:{item.status6}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
