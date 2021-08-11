const MAXIMUM_CARDS = 11460;

function randomNumbers(num: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < num; i += 1) {
    let random = Math.floor(Math.random() * MAXIMUM_CARDS);
    while (array.includes(random))
      random = Math.floor(Math.random() * MAXIMUM_CARDS);
    array.push(random);
  }
  return array;
}

async function fetchCards() {
  const endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  const data = await (await fetch(endpoint)).json();
  console.log(randomNumbers(10).map((arg) => data.data[arg]));
}

export default fetchCards;
