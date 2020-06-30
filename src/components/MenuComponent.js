import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenuItem({flower, onClick}){
    return (
        <Card onClick={() => onClick(flower.id)}>
        <CardImg width="100%" src={flower.image} alt={flower.name} />
        <CardImgOverlay>
            <CardTitle>{flower.name}</CardTitle>
        </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.flowers.map((flower) => {
        return (
            <div key={flower.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem flower={flower} onClick={props.onClick}/>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
              {menu}
            </div>
        </div>
           
    )
}
    



export default Menu;