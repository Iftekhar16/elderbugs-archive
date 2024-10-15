import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import CarouselGame from './CarouselGame';
import Reviews from './Reviews';
import { description, Game } from '@/types/games';

interface GameDetailsProps {
  game: Game
}

const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
  const rating = game.rating??0;
  console.log(game);
  console.log(game.platform.includes("Windows"))
  return (
    <div className='hero mt-7'>
      <div className="wrapper max-w-[70rem] mx-auto">
        <div className="">
          <div className="title text-5xl font-bold mb-3">{game.name}</div>
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative w-6 h-6">
                  <Icon icon="solar:star-line-duotone" className="absolute text-2xl text-accent1" />
                  {index < Math.floor(rating) && (
                    <Icon icon="solar:star-bold" className="absolute text-2xl text-accent1" />
                  )}
                  {index === Math.floor(rating) && rating % 1 !== 0 && (
                    <div className="absolute overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
                      <Icon icon="solar:star-bold" className="text-2xl text-accent1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="relative top-[2px]">{rating}</div>
          </div>
        </div>
        <div className="relative flex gap-7 mb-7">
          <div className="left w-8/12">
            <CarouselGame game={game}/>
            <div className="description mb-3">
              {game.descriptions?.map((item: description, index: number) => (
                <div className="" key={index}>
                  <div className="mb-1 font-semibold">{item.title}</div>
                  <div className="mb-3">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-4/12 sticky top-20 h-fit">
            <div className="w-full h-52 flex justify-center items-center">
              <Image className='max-w-full w-fit max-h-52 h-fit object-cover' src={game.images.logo??""} alt="" width={300} height={300}/>
            </div>
            <div className="text-xs">base game</div>
            {/* {game.price===0?(
              <div className="price text-xl font-semibold mb-3">Free to Play</div>
            ):(
              <div className="price text-xl font-semibold mb-3">${game.price}</div>
            )} */}
            <div className="flex items-center gap-2 mb-3">
              {game.price === 0? (
                <p className="price text-left text-xl font-semibold">Free to play</p>
              ) : (
                <p className="price text-left text-xl font-semibold">${game.price}</p>
              )}
              {game.discount!==0 && (
                <p className="discounted-price text-left text-sm opacity-50 font-medium line-through">${game.discountedPrice}</p>
              )}
              {game.discount !== 0 && (
                <p className="discount bg-accent2 text-light1 rounded-full text-xs px-2 py-1">-{game.discount}%</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <button className="buy bg-accent2 text-light1 px-3 py-3 rounded-lg w-full">Buy Now</button>
              <button className="cart bg-dark3 text-light1 px-3 py-3 rounded-lg w-full">Add To Cart</button>
              {game.isWishlisted?(
                <div className="wishlist bg-dark3/80 text-light1 px-3 py-3 rounded-lg w-full text-center">Wishlisted</div>
              ):(
                <button className="wishlist bg-dark3 text-light1 px-3 py-3 rounded-lg w-full">Add To Wishlist</button>
              )}
            </div>
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="font-medium">Developer</div>
              <div className="">{game.developer}</div>
            </div>
            {game.publisher && (
              <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
                <div className="font-medium">Publisher</div>
                <div className="">{game.publisher}</div>
              </div>
            )}
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="font-medium">Release Date</div>
              <div className="">{game.releaseDate}</div>
            </div>
            <div className="py-2 flex justify-between items-center gap-1 mb-3">
              <div className="font-medium">Platforms</div>
              <div className="flex items-center gap-1">
                {game.platform.includes("Windows") && (
                  <Icon className='text-xl' icon="mingcute:windows-fill" />
                )}
                {game.platform.includes("Linux") && (
                  <Icon className='text-xl' icon="mingcute:linux-fill" />
                )}
                {game.platform.includes("Apple") && (
                  <Icon className='text-xl' icon="mingcute:apple-fill" />
                )}
              </div>
            </div>
            <div className="genres mb-7">
              <div className="title font-semibold mb-1">Genre</div>
              <div className="flex gap-1 flex-wrap">
                {game.tags.map((item: string, index: number)=>(
                  <div key={index} className="genre bg-dark3 text-light2 text-xs px-2 py-1 rounded-lg">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Reviews game={game}/>
      </div>
    </div>
  );
};

export default GameDetails;