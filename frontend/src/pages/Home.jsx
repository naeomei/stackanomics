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
    <div>
      <img 
          src={headPic} 
          alt="homepage picture"
          className="w-full object-fill h-65 mt-15 -mb-12"
          />
      
      <div className="main_body">

        <h1> 
          Welcome to our Stackanomics
        </h1>

        <p>
          We chose to use React, FastAPI, and PostgreSQL for our tech stack. 
          It's great for quick development and is popular in the industry. 
          Currently, we only have the React layer set up to get this frontend running; 
          however, more will be added as the class continues.
        </p>

        <div class="flex justify-center gap-30 m-10">
          {frameworkImages.map((item) => (
            <div class="item">
              <img 
              src={item.image} 
              alt={item.name}
              class="h-40 w-40 object-fill"/>
            </div>
          ))}


        </div>

        <p>
          We've also decided to go with a movie theme for this website, 
          which will come into play more as API and CRUD commands are added. 
          But for now, it's purely for aesthetics.
        </p>
      </div>


    </div>
  )
}
