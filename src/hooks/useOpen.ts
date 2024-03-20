import { useState } from "react";

function useOpen() {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
    } 
    
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return {
        isOpen, open, close, toggleOpen
    }

}
export default useOpen;