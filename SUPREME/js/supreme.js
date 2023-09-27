const getLeagueTable = async () => {
  //  url structure -> "https://supremedlo.cyclic.app/table/:seasonNumber" change :seasonNumber to the number of the season you wish to get the league table
  const url = "https://supremedlo.cyclic.app/table/100";
  try {
    const response = await fetch(url);
    const data = await response.json(); 
    console.log("data", data); 
  } catch (error) {
    console.log("error", error?.message); 
  }
};
getLeagueTable();
