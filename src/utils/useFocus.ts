import { useEffect, useRef } from "react";

export const useFocus = () => {
  const ref =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    ref.current?.focus();
    console.log("here");
  }, []);

  return ref;
};
