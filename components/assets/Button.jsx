export default function Button({ children, cls }) {
  let _className = `bg-black py-3 px-10 relative cursor-default ${
    cls || ""
  }`;

  return (
    <div className={_className}>
          <span
            className={`text-white`}
          >
            {children}
          </span>
    </div>
  );
}
