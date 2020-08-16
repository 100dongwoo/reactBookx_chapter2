import React, { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
//const ColorConsumer -ColorContext.Comsumer과 같은의미
const { Consumer: ColorConsumer } = ColorContext;
//ColorPrvider 아 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };
export default ColorContext;
