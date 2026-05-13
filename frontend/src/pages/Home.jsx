import reactPic from '../assets/react.svg'
import fastapiPic from '../assets/FastApi.svg'
import postgresqlPic from '../assets/PostgresSQL.svg'
import headPic from '../assets/homeMainImage.jpg'

const frameworkImages = [
  {
    image: reactPic,
    name: "react icon"
  },
  {
    image: fastapiPic,
    name: "fast api icon"
  },
  {
    image: postgresqlPic,
    name: "postgresSQL icon"
  }
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img 
          src={headPic} 
          alt="homepage picture"
          className="w-full rounded-lg object-fill h-40 mb-4"
          />

      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to our Stackanomics
      </h1>


      <p className="text-lg text-indigo-200 mb-12">
        We chose to use React, FastAPI, and PostgreSQL for our tech stack. 
        It's great for quick development and is popular in the industry. 
        Currently, we only have the React layer set up to get this frontend running; 
        however, more will be added as the class continues.
      </p>

      <div class="flex justify-center gap-4 mb-12">
        {frameworkImages.map((item) => (
          <img 
          src={item.image} 
          alt={item.name}
          class="h-32 object-cover rounded-lg"/>
        ))}


      </div>

      <p className="text-lg text-indigo-200 mb-12">
        We've also decided to go with a movie theme for this website, 
        which will come into play more as API and CRUD commands are added. 
        But for now, it's purely for aesthetics.
      </p>


    </div>
  )
}
