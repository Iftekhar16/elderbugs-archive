const fetchGames = async () => {
  const res = await fetch("https://elderbugs-archive-api.onrender.com");

  if(res.ok){
    return res.json();
  }
  throw new Error("failed to fetch games");
};

export default fetchGames;