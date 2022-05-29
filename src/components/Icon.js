import React from "react";

import icons from "./icons";

export const Icon = ({ name }) => {
  const SelectedIcon = icons[name];

  if (!SelectedIcon) return "";

  return <SelectedIcon />;
};

export default Icon;
