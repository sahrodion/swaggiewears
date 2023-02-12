export default function PageContainer({ children, className }) {
  return (
    <div className={`${className} max-w-[2200px] xl:w-[60vw] lg:w-[80vw] w-[95vw]`}>
      {children}
    </div>
  );
}
