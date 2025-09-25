"use client";
import { useRef } from "react";
import OptionMenu from "./OptionMenu/OptionMenu";

export default function Canvas() {
  const c = useRef<HTMLCanvasElement | null>(null);

  return (
    <>
      <canvas
        id='canvas'
        ref={c}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          touchAction: "none", // Prevent default touch actions
        }}
        className='dark:bg-background bg-white'
      />
      <OptionMenu showMenu={true} />
    </>
  );
}
