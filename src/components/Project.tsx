import React, { useCallback } from "react";

export default function Projet() {
  function freakout() {}
  return (
    <div onMouseEnter={freakout} style={styles.inactive}>
      hallo this is red
    </div>
  );
}

//local stylesheet for component
const styles = {
  inactive: {},
  hover: {},
};
