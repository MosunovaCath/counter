import React from "react";
import "./Counter.styl";

interface CounterProps {
  style: "primary" | "secondary";
  size: 8 | 12 | 16 | 20 | 24;
  stroke: boolean;
  quantity: string | number;
  pulse: boolean;
}

const Counter: React.FC<CounterProps> = ({
  style,
  size,
  stroke,
  quantity,
  pulse,
}) => {
  let displayQuantity;

  if (typeof quantity === "number") {
    displayQuantity = quantity > 99 ? "99+" : quantity.toString();
  } else {
    displayQuantity = quantity.length > 3 ? quantity.slice(0, 3) : quantity;
  }

  if (size === 8 || size === 12) {
    displayQuantity = "";
  }

  const classNames = [
    "counter",
    style === "primary" ? "customPrimary" : "customSecondary",
    stroke ? "stroke" : "",
    pulse ? "pulse" : "",
  ].join(" ");

  return <span className={classNames}>{displayQuantity}</span>;
};

export default Counter;
