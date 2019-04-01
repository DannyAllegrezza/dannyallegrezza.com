import React from 'react';

const CarOverview = (props) => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    {props.carStatus}
                </div>
                <div class="media-content">
                    <p class="title is-4">{props.title}</p>
                    <p class="subtitle is-6">{props.description}</p>
                </div>
                </div>

                <div class="content">
                    {props.content}
                </div>
            </div>
        </div>
    )
}