import React from "react";

function Avatar({
  children,
  backgroundColor,
  color,
  px,py,
  borderRadius,
  fontSixe,
  cursor,
}) {
  const style = {
    backgroundColor,
    color:color|| 'black',
    padding:`${py} ${px}`,
    borderRadius,
    fontSixe,
    textAlign:'center',
    cursor:cursor||null,
    textDecoration:'none'
  };
  return <div style={style}>{children}</div>;
}

export default Avatar;
