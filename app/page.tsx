export default function Home() {
  return (
    <div className="bg-gray-300 text-5xl text-center py-10">
      <p className="mb-3 font-light">Colors</p>
      <div className="colors flex justify-center items-center gap-1 flex-wrap">
        <div className="size-14 rounded-lg bg-dark1"></div>
        <div className="size-14 rounded-lg bg-dark2"></div>
        <div className="size-14 rounded-lg bg-dark3"></div>
        <div className="size-14 rounded-lg bg-light1"></div>
        <div className="size-14 rounded-lg bg-light2"></div>
        <div className="size-14 rounded-lg bg-light3"></div>
        <div className="size-14 rounded-lg bg-accent1"></div>
      </div>
    </div>
  );
}
