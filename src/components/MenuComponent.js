import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            flowers: [
                {
                    id: 0,
                    name: 'Rose',
                    image: 'assets/images/jessica-lewis-rose-s.jpg',
                    description: 'a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears'
                },
                {
                    id: 1,
                    name: 'Bleeding Heart',
                    image: 'assets/images/shelley-pauls-bleeding-heart-s.jpg',
                    description: 'perennial herbaceous plants of the family Papaveraceae'
                },
                {
                    id: 2,
                    name: 'Orchid',
                    image: 'assets/images/joanna-kosinska-orchid-s.jpg',
                    description: 'The Orchidaceae are a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant, commonly known as the orchid family'
                },
                {
                    id: 3,
                    name: 'Cherry Blossom',
                    image: 'assets/images/katie-moum-cherry-blossom-s.jpg',
                    description: 'a flower of many trees of genus Prunus. The most well-known species is the Japanese cherry, Prunus serrulata, which is commonly called sakura '
                },
                {
                    id: 4,
                    name: 'Water Lily',
                    image: 'assets/images/macau-photo-water-lily-s.jpg',
                    description: 'a family of flowering plants, commonly called water lilies.'
                },
              ]
        }
    }

    render(){
        const menu = this.state.flowers.map((flower) => {
            return (
                <div key={flower.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={flower.image} alt={flower.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{flower.name}</Media>
                            <p>{flower.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;