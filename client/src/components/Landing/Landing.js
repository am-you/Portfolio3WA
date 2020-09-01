import React from 'react';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';

const Landing = (props, context) => {
    const { theme: { bgPrimary, textPrimary } } = context;

    return (
        <div style={{ backgroundColor: bgPrimary }} className="landing-page">
            <div className="intro-wrapper" style={{ color: textPrimary }}>
                <div>
                    <h1 className="intro-name line anim-typewriter"><span role="img" aria-label="waving-Hand">&#128075; </span><Trans i18nKey="Landing.1"/></h1>
                </div>
                <div className="tagline">
                    <Trans i18nKey="Landing.2"/>
                </div>
            </div>
        </div>
    );
};

Landing.contextTypes = {
    theme: PropTypes.any
};

export default Landing;
