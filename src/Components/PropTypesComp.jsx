import React from "react";
import PropTypes from "prop-types";

function PropTypesComp({ ime, prezime, godine, grad, spol }) {
  return (
    <ul>
      <li>Ime: {ime}</li>
      <li>Prezime: {prezime}</li>
      <li>Godine: {godine}</li>
      <li>Grad: {grad}</li>
      <li>Spol (M/Ž): {spol}</li>
    </ul>
  );
}

PropTypesComp.propTypes = {
  ime: PropTypes.string,
  prezime: PropTypes.string,
  godine: PropTypes.number,
  grad: PropTypes.string,
  spol: PropTypes.oneOf(["M", "Ž"]),
};

PropTypesComp.defaultProps = {
  godine: 18,
  spol: "M",
};

export default PropTypesComp;
