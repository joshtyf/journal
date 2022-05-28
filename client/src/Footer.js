import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full absolute bottom-0 text-purple-400 p-2 text-right">
      Created by Joshua Tan
      <a
        href="https://github.com/joshtyf/journal"
        target="_blank"
        rel="noreferrer"
        className="hover:text-purple-500"
      >
          
        <FontAwesomeIcon icon={faGithub} className="mx-2" />
      </a>
    </div>
  );
}
