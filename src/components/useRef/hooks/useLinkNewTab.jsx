import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const refContent = useRef(null);
  useEffect(() => {
    if (refContent) {
      const links = refContent.current.querySelectorAll("a");
      links.length > 0 &&
        links.forEach((element) => {
          element.setAttribute("target", "_blank");
        });
    }
  }, []);

  return {
    refContent,
  };
}
