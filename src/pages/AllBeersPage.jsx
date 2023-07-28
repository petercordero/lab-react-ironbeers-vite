import { Link } from "react-router-dom"

const AllBeersPage = ({ beers }) => {

    return (
        <div>
            <h1>AllBeersPage</h1>
            {
                beers.map((beer) => {
                    return (
                        <Link to={`/beers/${beer._id}`}>
                            <div>
                                <img src={beer.image_url} alt="beer" />
                                <h3>Beer Name: {beer.name}</h3>
                                <p>Tagline: {beer.tagline}</p>
                                <p>Contributed By: {beer.contributed_by}</p>

                            </div>

                        </Link>

                    )
                })
            }
        </div>
    )
}

export default AllBeersPage
