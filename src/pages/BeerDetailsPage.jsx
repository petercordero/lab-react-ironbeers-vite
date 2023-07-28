import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BeerDetailsPage = ({ beers }) => {
    const [beer, setBeer] = useState(null)

    const { beerId } = useParams()

    useEffect(() => {

        console.log("Beer ID ====>", beerId)
        const thisBeer = beers.find((beer) => beer._id === beerId)

        setBeer(thisBeer)

    }, [beerId, beers])

    return (
        <div>
            <h1>BeerDetailsPage</h1>
            {
                beer &&

                <>
                    <img src={beer.image_url}></img>
                    <h2>{beer.name}</h2>
                    <p>Tagline: {beer.tagline}</p>
                    <p>First Brewed: {beer.first_brewed}</p>
                    <p>Attenuation Level: {beer.attenuation_level}</p>
                    <p>Description: {beer.description}</p>
                    <p>Contributed By: {beer.contributed_by}</p>
                </>
            }
        </div>
    )
}

export default BeerDetailsPage
