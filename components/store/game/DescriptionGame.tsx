import { description } from "@/types/games";

const DescriptionGame = ({ descriptions }: {descriptions: description[]}) => {
  return (
    <div className="description mb-3">
      {descriptions?.map((item: description, index: number) => (
        <div className="" key={index}>
          <div className="mb-1 font-semibold">{item.title}</div>
          <div className="mb-3">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionGame;
