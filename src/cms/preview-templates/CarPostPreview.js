import React from 'react'
import PropTypes from 'prop-types'
import { CarPostTemplate } from '../../templates/car-post'

const CarPostPreview = ({ entry, widgetFor }) => (
    <CarPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
    />
)

CarPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default CarPostPreview
