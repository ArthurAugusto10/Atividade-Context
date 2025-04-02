import { useContext } from 'react';
import { LetterCtx } from '../contexts/LetterCtx';

function Ball() {
  const { input } = useContext(LetterCtx);
 
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {input.split("").map((letter, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "20px",
            borderRadius: "50%",
            backgroundColor: "#4e73df",
            color: "white",
            textAlign: "center",
            width: "50px",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
 
export default Ball;