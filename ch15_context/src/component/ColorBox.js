import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../Context/color";

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {(value) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: value.state.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: value.state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };
//export default ColorBox;

//위 쪽은 Consumer 사용
//아래 는 hook 사용
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};
export default ColorBox;
