import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function CourtNumber() {
  const [data, setData] = useState([]);
  const numberOfCourts = 6;  // コートの数

  useEffect(() => {
    // Pythonサーバーからデータを取得
    fetch('https://hello-world-pkza.onrender.com')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList display="flex" flexWrap="wrap">
        {[...Array(numberOfCourts)].map((_, index) => (
          <Tab key={index} width={{ base: "33.33%", md: "auto" }}>
            コート {index + 1}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {[...Array(numberOfCourts)].map((_, courtIndex) => (
          <TabPanel key={courtIndex}>
            {data.map((item, timeIndex) => (
              <div key={timeIndex}>
                <p>時間: {item.time}</p>
                <p>状況: {item[`status${courtIndex + 1}`]}</p>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default CourtNumber;
