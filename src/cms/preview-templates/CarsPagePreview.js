import React from 'react';
import PropTypes from 'prop-types';
import { CarPageTemplate } from '../../templates/cars-page';

const CarsPagePreview = ({ entry, widgetFor }) => (
  <CarPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CarsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CarsPagePreview