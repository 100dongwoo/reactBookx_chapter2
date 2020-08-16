import React from "react";
import { ColorConsumer } from "../Context/color";

const color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const SelectColor = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {color.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault(); //마우스 오른쪽클릭시 메뉴가 뜨는거 무시함
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
export default SelectColor;
