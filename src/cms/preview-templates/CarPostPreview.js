import React from 'react'
import PropTypes from 'prop-types'
import { CarPostTemplate } from '../../templates/car-post'

const CarPostPreview = ({ entry, widgetFor }) => (
    <CarPostTemplate
        content={widgetFor('body')}
        featuredImage={entry.getIn(['data', 'featuredImage'])}
        description={entry.getIn(['data', 'description'])}
        title={entry.getIn(['data', 'title'])}
        engine={entry.getIn(['data', 'engine'])}
        horsepower={entry.getIn(['data', 'horsepower'])}
        torque={entry.getIn(['data', 'torque'])}
        tags={entry.getIn(['data', 'tags'])}
    />
)

CarPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default CarPostPreview
