import React from 'react';

import './button.sass';
export default function Button(props) {
    return (
        <div className="button-dark is-fullwidth">
            {props.children}
        </div>
    )
}
