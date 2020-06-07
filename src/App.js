import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from '../../../../UTSA-SAN-FSF-PT-01-2020-U-C/19-React/01-Activities/23-Stu_PupsterApp/Solved_/src/components/Wrapper';


function App() {
  return (
    <Router>
      <Wrapper>
        <Table />
      </Wrapper>
    </Router>
  );
}

export default App;
