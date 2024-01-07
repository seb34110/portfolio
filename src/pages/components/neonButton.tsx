export const NeonButton = ({ children, onClick }) => {
  return (
    <a className="neonButton">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button className="neonButton" onClick={onClick}>
        {children}
      </button>
    </a>
  );
};
