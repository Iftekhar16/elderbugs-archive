'use client'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import CarouselGame from './CarouselGame';
import Reviews from './Reviews';

const Game = () => {
  const rating = 4.5;
  return (
    <div className='hero mt-7'>
      <div className="wrapper max-w-[70rem] mx-auto">
        <div className="">
          <div className="title text-5xl font-bold mb-3">Frostpunk 2</div>
          <div className="flex items-center mb-3">
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
        </div>
        <div className="relative flex gap-7 mb-7">
          <div className="left w-8/12">
            <CarouselGame/>
            <div className="description mb-3">
              <div className="mb-3">Develop, expand, and advance your city in a society survival game set 30 years after an apocalyptic blizzard ravaged Earth. In Frostpunk 2, you face not only the perils of never-ending winter, but also the powerful factions that watch your every step inside the Council Hall.</div>
              <div className="mb-3">Frostpunk 2 elevates the city-survival genre to a new level. Take the role of a Steward and lead your city through a cascade of calamities taking place in a postapocalyptic, snowy setting. Build large city districts with their string of endless needs and demands. Navigate through conflicting interests of factions that populate your metropolis. As the needs of the city grow and factional power at its core rises, only you can steer the society towards an uncertain future.</div>

              <div className="font-semibold">The city grows</div>
              <div className="mb-3">The world is overtaken by an ever present winter, which makes expansion of the city the only way for the survival of mankind. In order to grow, the metropolis needs resources like coal and oil, just like its citizens require food and warmth. In Frostpunk 2, it&apos;s your job to tackle this never ending circle of supply and demand.</div>

              <div className="font-semibold">City districts</div>
              <div className="mb-3">Your city is divided into zones serving different purposes, such as housing or extraction. It&apos;s up to you to build new ones and make sure that those already existing work in perfect unison.</div>

              <div className="font-semibold">Special buildings</div>
              <div className="mb-3">In time, you will have to build places like City Hall or Research Institute. Inside these buildings, you will put forth laws and projects to ensure that your city develops in the proper direction.</div>

              <div className="font-semibold">Colonies</div>
              <div className="mb-3">To ensure that your city growth will not falter, you have to venture into the frostland. There, you can build extensive colonies that will provide all the necessary resources.</div>

              <div className="font-semibold">Perlis of human nature</div>
              <div className="mb-3">The number of your citizens steadily grows, making the task of governing them and satisfying their demands all the more challenging. As the Steward you will have to maneuver carefully across the interests of many groups inhabiting the city.</div>

              <div className="font-semibold">New Londoners</div>
              <div className="mb-3">Your citizens can form communities and factions, each with different ideas for the city&apos;s future. In the Council Hall you&apos;ll put forth laws and negotiate them with the faction&apos;s delegates.</div>

              <div className="font-semibold">Council Hall</div>
              <div className="mb-3">Support of every faction inside the Council Hall costs dearly, as one&apos;s faction ascension breeds discontent among others. That means you have to carefully think through every alliance.</div>

              <div className="font-semibold">Towards progress</div>
              <div className="mb-3">The Research Institute is where you forge the city&apos;s future. Each new project must be entrusted to a faction, forcing you to maneuver and form strategic alliances.</div>

              <div className="font-semibold">Factions</div>
              <div className="mb-3">People of your city want to have a voice in how you run things. Each faction has its own ideology and ideas for the future, yet they also have one thing in common - insatiable thirst for power. Choose your allies in the Council Hall wisely.</div>

              <div className="font-semibold">Story Mode and Utopia Builder</div>
              <div className="mb-3">The story of Frostpunk 2 introduces a multi-chapter saga set in the frozen wastes. Spanning across the life of the Steward this campaign lets you feel the burden of leadership as you take the responsibility for thousands of lives. At the same time, the sandbox mode called Utopia Builder with infinite play time leaves you room for boundless social and infrastructural experiments.</div>

              <div className="font-semibold">Full Mod Support</div>
              <div className="mb-3">Frostpunk 2 comes with a comprehensive and versatile modding tool. FrostKit will let you create your own maps, models, and scenarios inside the game. Now, only your imagination can limit the destination your city is heading to!</div>
            </div>
            {/* <Reviews/> */}
          </div>
          <div className="right w-4/12 sticky top-10 h-fit">
            <Image className='mx-auto w-auto h-52 m-10' src="/frostpunk2-logo1.png" alt="" width={300} height={300}/>
            <div className="text-xs">base game</div>
            <div className="price text-xl font-semibold mb-3">$19.99</div>
            <div className="flex flex-col gap-1 mb-3">
              <button className="buy bg-accent2 text-light1 px-3 py-3 rounded-lg w-full">Buy Now</button>
              <button className="cart bg-dark3 text-light1 px-3 py-3 rounded-lg w-full">Add To Cart</button>
              <button className="wishlist bg-dark3 text-light1 px-3 py-3 rounded-lg w-full">Add To Wishlist</button>
            </div>
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="font-medium">Developer</div>
              <div className="">11 bit studios</div>
            </div>
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="font-medium">Publisher</div>
              <div className="">11 bit studios</div>
            </div>
            <div className="py-2 border-dark3/50 border-b-[1px] flex justify-between items-center gap-1">
              <div className="font-medium">Release Date</div>
              <div className="">20/09/2024</div>
            </div>
            <div className="py-2 flex justify-between items-center gap-1 mb-3">
              <div className="font-medium">Platforms</div>
              <div className="flex items-center gap-1">
                <Icon className='text-xl' icon="mingcute:windows-fill" />
                <Icon className='text-xl' icon="mingcute:linux-fill" />
                <Icon className='text-xl' icon="mingcute:apple-fill" />
              </div>
            </div>
            <div className="genres mb-7">
              <div className="title font-semibold mb-1">Genre</div>
              <div className="flex gap-1 flex-wrap">
                <div className="genre bg-dark3 text-light2 text-xs px-2 py-1 rounded-lg">City Builder</div>
                <div className="genre bg-dark3 text-light2 text-xs px-2 py-1 rounded-lg">Strategy</div>
                <div className="genre bg-dark3 text-light2 text-xs px-2 py-1 rounded-lg">Survival</div>
              </div>
            </div>
          </div>
        </div>
        <Reviews/>
      </div>
    </div>
  );
};

export default Game;