import { description } from "@/types/games";

const DescriptionGame = ({ descriptions }: {descriptions: description[]}) => {
  return (
    <div className="description mb-3">
      {descriptions?.map((item: description, index: number) => (
        <div className="" key={index}>
          <div className="text-sm md:text-base mb-1 font-semibold">{item.title}</div>
          <div className="text-sm md:text-base mb-3">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionGame;
