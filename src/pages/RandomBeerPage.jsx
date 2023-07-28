import { useEffect, useState } from "react"
import axios from "axios"

const RandomBeerPage = () => {
    
  const [randomBeer, setRandomBeer] = useState(null)

  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((results) => {
        console.log("Beers", results.data)
        setRandomBeer(results.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])
  return (
    <div>
        <h1>RandomBeerPage</h1>
        {
                randomBeer &&

                <>
                    <img src={randomBeer.image_url}></img>
                    <h2>{randomBeer.name}</h2>
                    <p>Tagline: {randomBeer.tagline}</p>
                    <p>First Brewed: {randomBeer.first_brewed}</p>
                    <p>Attenuation Level: {randomBeer.attenuation_level}</p>
                    <p>Description: {randomBeer.description}</p>
                    <p>Contributed By: {randomBeer.contributed_by}</p>
                </>
            }
        
        </div>
  )
}

export default RandomBeerPage