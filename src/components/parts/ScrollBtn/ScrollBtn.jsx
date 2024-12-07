import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollBtn() {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollToTop} className="scroll_btn">
      <span>
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </span>
    </div>
  );
}

export default ScrollBtn;
