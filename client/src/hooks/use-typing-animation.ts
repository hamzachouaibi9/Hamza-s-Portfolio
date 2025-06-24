import { useState, useEffect } from "react";

export function useTypingAnimation(text: string, speed: number = 80, startDelay: number = 1000) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeWriter = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          setTimeout(typeWriter, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      typeWriter();
    }, startDelay);

    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return { displayText, isTyping };
}
