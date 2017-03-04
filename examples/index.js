import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from '../build/react-tabs';

import '../src/tabs.scss';

class BasicTab extends Component {
  render() {
    return(
      <Tabs className="tbs">
        <TabList className="tbs--nav">
          <Tab className="tbs--nav--item">
            <a className="tbs--nav--link" href="#">Facebook</a>
          </Tab>

          <Tab className="tbs--nav--item">
            <a className="tbs--nav--link"href="#">Twitter</a>
          </Tab>
        </TabList>

        <TabPanel className="tbs--panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius arcu mauris, eu sodales nunc pharetra et. Pellentesque tempus sit amet lectus eu commodo</p>
        </TabPanel>

        <TabPanel className="tbs--panel">
          <p>Vivamus quis metus eu velit tristique ultricies eu id lectus. Nunc dignissim malesuada metus, a lacinia nisi pulvinar quis. Vestibulum vitae dui ligula.</p>
        </TabPanel>
      </Tabs>
    );
  }
}

render(<BasicTab />, document.getElementById('react-js'));

export default BasicTab;
