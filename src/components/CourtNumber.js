'use client';
import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function CourtNumber({ data }) {
  const [courtData, setCourtData] = useState([]);
  const numberOfCourts = 6; // 例えば、6つのコートがあると仮定

  useEffect(() => {
    // 指定されたURLからデータを取得
    if (data && data.length > 0) {
      setCourtData(data);
    }
  }, [data]);

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
            {courtData.map((item, timeIndex) => (
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
