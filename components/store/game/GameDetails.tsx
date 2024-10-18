import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import CarouselGame from './CarouselGame';
import Reviews from './Reviews';
import { Game } from '@/types/games';
import DescriptionGame from './DescriptionGame';

interface GameDetailsProps {
  game: Game
}

const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
  const rating = game.rating??0;
  console.log(game);
  console.log(game.platform.includes("Windows"))
  return (
    <div className='hero mt-3 xl:mt-7'>
      <div className="wrapper max-w-[70rem] mx-auto px-3 xl:px-0">
        <div className="">
          <div className="title text-xl md:text-5xl font-bold mb-1 xl:mb-3">{game.name}</div>
          {rating===0?(
            <div className="mb-5"></div>
          ):(
            <div className="flex items-center gap-1 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative size-3 md:size-6">
                    <Icon icon="solar:star-line-duotone" className="absolute text-xs md:text-2xl text-accent1" />
                    {index < Math.floor(rating) && (
                      <Icon icon="solar:star-bold" className="absolute text-xs md:text-2xl text-accent1" />
                    )}
                    {index === Math.floor(rating) && rating % 1 !== 0 && (
                      <div className="absolute overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
                        <Icon icon="solar:star-bold" className="text-xs md:text-2xl text-accent1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-xs md:relative md:top-[2px]">{rating}</div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col md:flex-row gap-3 xl:gap-7 mb-7">
          <div className="left md:w-8/12">
            <CarouselGame game={game}/>
            <div className="hidden md:block">
              {game.descriptions && (
                <DescriptionGame descriptions={game?.descriptions}/>
              )}
            </div>
          </div>
          <div className="right md:w-4/12 md:sticky md:top-20 h-fit">
            <div className="w-full h-52 hidden md:flex justify-center items-center">
              <Image className='max-w-full w-fit max-h-52 h-fit object-cover shadow-blur p-3' src={game.images.logo??""} alt="" width={300} height={300}/>
            </div>
            <div className="text-xs">base game</div>
            <div className="flex items-center gap-2 mb-3">
              {game.price === 0? (
                <p className="price text-left text-xl font-semibold">Free to play</p>
              ) : game.price === null? (
                <p className="price text-left text-xl font-semibold">Coming Soon!</p>
              ) : (
                <p className="price text-left text-xl font-semibold">${game.price}</p>
              )}
              {game.discount!==0 && game.discount!==null? (
                <p className="discounted-price text-left text-sm text-light3 font-medium line-through">${game.discountedPrice}</p>
              ):<></>}
              {game.discount !== 0 && game.discount!==null? (
                <p className="discount bg-accent1 text-light1 rounded-full text-xs px-2 py-1">-{game.discount}%</p>
              ):<></>}
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <button className="buy bg-accent1 text-light1 px-3 py-3 rounded-lg w-full">Buy Now</button>
              <button className="cart bg-dark3 text-light1 px-3 py-3 rounded-lg w-full">Add To Cart</button>
              {game.isWishlisted?(
                <div className="wishlist bg-dark3/80 text-light1 px-3 py-3 rounded-lg w-full text-center">Wishlisted</div>
              ):(
                <button className="wishlist bg-dark3 text-light1 px-3 py-3 rounded-lg w-full">Add To Wishlist</button>
              )}
            </div>
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="text-sm font-medium">Developer</div>
              <div className="text-sm text-right">{game.developer}</div>
            </div>
            {game.publisher && (
              <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
                <div className="text-sm font-medium">Publisher</div>
                <div className="text-sm text-right">{game.publisher}</div>
              </div>
            )}
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="text-sm font-medium">Release Date</div>
              {game.releaseDate!==null? (
                <div className="text-sm text-right">{game.releaseDate}</div>
              ):(
                <div className="text-sm text-right">TBA</div>
              )}
            </div>
            <div className="py-2 flex justify-between items-center gap-1 mb-3">
              <div className="text-sm font-medium">Platforms</div>
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
            <div className="block md:hidden">
              {game.descriptions && (
                <DescriptionGame descriptions={game?.descriptions}/>
              )}
            </div>
          </div>
        </div>
        {game.reviews && (
          <Reviews reviews={game.reviews}/>
        )}
      </div>
    </div>
  );
};

export default GameDetails;