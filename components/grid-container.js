export default function GridContainer({ children }) {
  return (
    <div className="grid grid-cols-8 mt-10 gap-4  mx-auto px-5">
      {children}
    </div>
  );
}
