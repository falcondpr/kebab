import { useRef } from "react";

export const statusProduct = () => {
  const refButtonNew = useRef<any>();
  const refButtonUsed = useRef<any>();

  return [
    {
      id: 1,
      name: "Nuevo",
      value: "new",
      ref: refButtonNew,
    },
    {
      id: 2,
      name: "Usado",
      value: "used",
      ref: refButtonUsed,
    },
  ];
};
