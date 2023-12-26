import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../styles/footer.css'
import CourtNumber from './CourtNumber'
import SearchModal from './SearchModal';

const Footer = () => {
  return(
    <div className="footer-all">
      <Tabs isFitted variant='enclosed'>
        <TabPanels >
          <TabPanel paddingBottom={0}>
            <CourtNumber url='https://hello-world-pkza.onrender.com'/>
          </TabPanel>
          <TabPanel>
            <CourtNumber/>
          </TabPanel>
        </TabPanels>
        <SearchModal/>
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