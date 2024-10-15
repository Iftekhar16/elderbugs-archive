'use client'
import Footer from '@/components/store/Footer';
import GameDetails from '@/components/store/game/GameDetails';
import Nav from '@/components/store/Nav';
import { Game } from '@/types/games';
import fetchGameDetails from '@/utils/providers/games/fetchGameDetails';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const Page = () => {

  const params = useParams();
  console.log(params)
  const id = params.id as string;
  console.log(id)

  const { data: game, error, isLoading } = useQuery<Game>({
    queryKey: ['gameDetails', id],
    queryFn: () =>fetchGameDetails(id),
    retry: 3
  });
  
  if(isLoading){
    return(
      <div className="text-center">loading...</div>
    )
  }

  if(error){
    console.log("from game details", error);
  }

  return (
    <div>
      <Nav/>
      {game&&(
        <GameDetails game={game}/>
      )}
      <Footer/>
    </div>
  );
};

export default Page;