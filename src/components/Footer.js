import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../styles/footer.css'

const Footer = () => {
  return(
    <div className="footer-all">
      <Tabs isFitted variant='enclosed'>
        <TabPanels>
          <TabPanel>
            <p>one!</p>{/* ここにコートごとの情報を載せる */}
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
        <TabList mb='1em'>
          <Tab>弾正テニスコート</Tab> 
          <Tab>西河原北テニスコート</Tab>
        </TabList>
      </Tabs>
    </div>
  )
};

export default Footer