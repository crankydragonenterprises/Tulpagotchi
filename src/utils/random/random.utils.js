export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

export function getRandomIntBetweenTwoInts(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    // The maximum is exclusive and the minimum is inclusive
};

export function getRandomUid() {
  const validCharacters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0"];
  var uid = "";
  for(let i = 0; i < 24; i++)
  {
    uid += validCharacters[getRandomInt(validCharacters.length)];
  }

  return uid;
}