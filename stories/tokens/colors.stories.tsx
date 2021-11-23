import React from "react";

import * as COLORS from "../../src/tokens/colors";

export default {
  title: "Tokens/Colors",
};

export const Colors = () => {
  console.log(COLORS);

  console.log(Object.entries(COLORS));

  return (
    <div>
      {Object.entries(COLORS).map(
        ([colorKey, colorValue]: [string, string]) => (
          <div
            key={colorKey}
            style={{
              display: "flex",
              alignItems: "center",
              margin: 15,
              fontFamily: "monospace",
            }}
          >
            <span
              style={{
                backgroundColor: colorValue,
                width: 60,
                height: 30,
                display: "inline-block",
                marginRight: 10,
              }}
            />
            {`${colorKey} : ${colorValue}`}
          </div>
        )
      )}
    </div>
  );
};
