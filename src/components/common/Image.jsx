import React, { memo } from "react";

export const Image = memo(({ src, alt }) => {
  return <img src={src} alt={alt} />;
});
