import React from "react";
import Container from './components/Grid/Container';
import Row from "./components/Grid/Row";
import Col from './components/Grid/Col';
import StopWatch from './components/StopWatch/index';
import UsersDashbord from './components/UsersDashbord/index';

const List = (props) => {
  const { title, children } = props;
  return (
    <ul title={title}>
      <h2>wweq</h2>
      {children}
      <p>lorem</p>
    </ul>
  );
};

const App = () => {
  return (
    <Container>
      <Row>
        <Col colNum={6}>
          <List>
            <li>text1</li>
            <li>text1</li>
          </List>
        </Col>
        <Col colNum={6}>
        <List>
            <li>text2</li>
            <li>text2</li>
          </List>
        </Col>
      </Row>
      <Row>
        <Col colNum={6}>
          <StopWatch />
        </Col>
        <Col colNum={6}>
        <UsersDashbord />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
