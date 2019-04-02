import React from 'react';

export const CarOverview = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                    {props.carStatus}
                </div>
                <div className="media-content">
                    <p className="title is-4">{props.title}</p>
                    <p className="subtitle is-6">{props.description}</p>
                </div>
                </div>

                <div className="content">
                    {props.content}
                </div>
            </div>
        </div>
    )
}