import { useState } from "react";
import axios from "axios";

const AddBeerPage = ({ handleAddBeer }) => {

    const [beerData, setBeerData] = useState({
        image: "",
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBeerData({ ...beerData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
            .then((results) => {
                console.log("Added beer", results.data)
            })
            .catch((err) => {
                console.log(err)
            })
        handleAddBeer(beerData);
        setBeerData({ image: "", name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" });
    };

    return (
        <div>
            <h1>AddBeerPage</h1>
            <form onSubmit={handleSubmit}>
                <label> Image:
                    <input type="text" name="image" value={beerData.image} onChange={handleChange} />
                </label>
                <br />
                <label> Name:
                    <input type="text" name="name" value={beerData.name} onChange={handleChange} />
                </label>
                <br />
                <label> Tagline:
                    <input type="text" name="tagline" value={beerData.tagline} onChange={handleChange} />
                </label>
                <br />
                <label> Description:
                    <textarea type="text" name="description" value={beerData.description} onChange={handleChange}></textarea>
                </label>
                <br />
                <label> First Brewed:
                    <input type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleChange} />
                </label>
                <br />
                <label> Brewer's Tips:
                    <input type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleChange} />
                </label>
                <br />
                <label> Attenuation Level:
                    <input type="number" name="attenuation_level" min="1" value={beerData.attenuation_level} onChange={handleChange} />
                </label>
                <br />
                <label> Contributed By:
                    <input type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleChange} />
                </label>
                <br />
                <button type="submit"> Add Beer </button>
            </form>
        </div>
    )
}

export default AddBeerPage
