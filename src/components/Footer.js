'use client';
import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../styles/footer.css'
import CourtNumber from './CourtNumber'
import SearchModal from './SearchModal';

const Footer = () => {
  const [searchData, setSearchData] = useState([]);

  return(
    <div className="footer-all">
      <Tabs isFitted variant='enclosed'>
        <TabPanels >
          <TabPanel paddingBottom={0}>
            <CourtNumber data={searchData} />
          </TabPanel>
          <TabPanel>
            <CourtNumber/>
          </TabPanel>
        </TabPanels>
        <SearchModal setSearchData={setSearchData}/>
        <div className='tablist'>
          <TabList mb='1em'>
            <Tab>弾正テニスコート</Tab> 
            <Tab>西河原北テニスコート</Tab>
          </TabList>
        </div>
      </Tabs>
    </div>
  )
};

export default Footer