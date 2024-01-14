import React, { ReactNode, MouseEvent } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <a className="neonButton" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  );
};
