import React from 'react'

export default function Button(props) {
    return (
        <div className="button is-large is-fullwidth">
            {props.children}
        </div>
    )
}
