export default function Button({ name, iconSvg, onClick, disabled = false }) {
  return (
    <>
      <style jsx>
        {`
          .button {
            background-color: #a2d4ff;
            color: #000;
            border: none;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            cursor: "pointer";
            font-size: 1rem;

            font-family: Wanted Sans, Inter, sans-serif;

            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        `}
      </style>
      <button
        className="button"
        onClick={onClick}
        disabled={disabled}
        style={{
          opacity: disabled && "0.3",
          cursor: disabled && "not-allowed",
        }}
      >
        {iconSvg}
        {name}
      </button>
    </>
  );
}
