import { Card, Elevation } from '@blueprintjs/core';
import './App.css';
import Sheet from './Common/Sheet/Sheet';

function App() {
  return (
    <Card className="app" elevation={Elevation.TWO}>
      <h1 className="knave-title">Knave</h1>
      <Sheet />
    </Card>
  );
}

export default App;
