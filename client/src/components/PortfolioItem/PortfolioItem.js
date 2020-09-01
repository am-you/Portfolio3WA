import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = (props, context) => {
    const { theme: { colorHighlight, textAlternate } } = context;

    if (props.render) return props.render;
    else
        return (
            <React.Fragment className="portfolio-item" style={{ backgroundColor: colorHighlight, color: textAlternate }}>
                <h4 className="portfolio-item__title">Lorem</h4>
                <p className="portfolio-item__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, iste?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quibusdam?
                </p>
                <p className="portfolio-item__links">
                    {/*eslint-disable-next-line*/}
                    <a href={null}>Lorem</a>
                    {/*eslint-disable-next-line*/}
                    <a href={null}>Lorem</a>
                </p>
            </React.Fragment>
        );
};

PortfolioItem.contextTypes = {
    theme: PropTypes.any
};

export default PortfolioItem;
