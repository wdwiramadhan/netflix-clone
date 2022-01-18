export default function Skeleton(props) {
  return (
    <div
      className={`flex flex-col flex-shrink-0 animate-pulse bg-stone-800 ${props.className}`}
    ></div>
  );
}
