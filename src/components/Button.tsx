import react from "react";

export interface ButtonProps {
  onClick: () => void;
}

export default function Button(...props: ButtonProps) {
  return <button></button>;
}
