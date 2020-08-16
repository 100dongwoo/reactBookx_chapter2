import React from "react";
import ColorBox from "./component/ColorBox";
import { ColorProvider } from "./Context/color";
import SelectColor from "./component/SelectColor";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
