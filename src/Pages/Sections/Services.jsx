
import Carousel from '../Components/Carousel'

export default function Services() {
  const cards = [
    { title: 'Card 1', content: 'Content of card 1' },
    { title: 'Card 2', content: 'Content of card 2' },
    { title: 'Card 3', content: 'Content of card 3' },
    { title: 'Card 4', content: 'Content of card 4' },
    { title: 'Card 5', content: 'Content of card 5' },
    { title: 'Card 6', content: 'Content of card 5' },
    { title: 'Card 7', content: 'Content of card 5' },
    { title: 'Card 8', content: 'Content of card 5' },
    { title: 'Card 9', content: 'Content of card 5' },
  ];
  return (
    <section className="w-full h-screen bg-black  flex ">
      <Carousel cards={cards}/>
    </section>
  )
}
