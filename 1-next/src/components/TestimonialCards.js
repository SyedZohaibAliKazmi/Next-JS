'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const MusicSchoolTestimonial = [
    {
        quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
        name: "Plato",
        title: "Philosophy of Music",
      },
      {
        quote: "Without music, life would be a mistake. Music expresses that which cannot be put into words and that which cannot remain silent.",
        name: "Friedrich Nietzsche",
        title: "The Birth of Tragedy",
      },
      {
        quote: "One good thing about music, when it hits you, you feel no pain.",
        name: "Bob Marley",
        title: "Wisdom of Reggae",
      },
      {
        quote: "Music can change the world because it can change people.",
        name: "Bono",
        title: "The Power of Music",
      },
      {
        quote: "Music is the divine way to tell beautiful, poetic things to the heart.",
        name: "Pablo Casals",
        title: "Melody of the Soul",
      },
      {
        quote: "Music is the language of the spirit. It opens the secret of life, bringing peace, abolishing strife.",
        name: "Kahlil Gibran",
        title: "Spiritual Harmony",
      },
      
]




const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black  bg-white dark:bg-grid-white/[0.2]  bg-white relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className=" text-3xl font-bold text-center mb-8 z-10 text-zinc-300">Here Our Harmony: Voice Of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
            items={MusicSchoolTestimonial}
            direction="right"
            speed="slow"/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards