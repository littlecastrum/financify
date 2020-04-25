import { useEffect, RefObject } from "react";

export default function useOutsideClick (ref: RefObject<Element>, callback: Function) {
  const handleClick = (evt: Event) => {
    const clickedElem = evt.target as Element;
    !ref.current?.contains(clickedElem) && callback();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
