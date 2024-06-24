import { useState } from "react";

const useAccordion = (): [number, (index: number) => void] => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return [expandedIndex, handleClick];
};

export default useAccordion;
