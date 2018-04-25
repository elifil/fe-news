import React, { Component } from 'react';
import { Page, Header, Footer, Content } from './components';

class App extends Component {
  render() {
    return (
        <Page>
            <Header />
            <Content />
            <Footer />
        </Page>
    );
  }
}

export default App;
