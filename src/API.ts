import { v4 } from 'uuid';

export interface Card {
  id: string;
  imageUrl: string;
  key: string;
}

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

async function fetchCards(): Promise<Card[]> {
  const endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  const data = await (await fetch(endpoint)).json();
  return randomNumbers(10).map((arg) => ({
    id: data.data[arg].id,
    imageUrl: data.data[arg].card_images[0].image_url,
    key: v4(),
  }));
}

export default fetchCards;
