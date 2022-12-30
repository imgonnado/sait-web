import { useState } from "react";

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, onOpen, onClose };
}

export default useDisclosure;
