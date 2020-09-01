import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import Cv from './Cv';

const About = (props, context) => {

    const {
        theme: { colorHighlight, bgPrimary, textPrimary }
    } = context;

    return (
        <main className="about-page" style={{ backgroundColor: bgPrimary }}>
            <style jsx="true">
                {`
					.highlight {
						background-color: ${colorHighlight};
					}
					::selection {
						background-color: ${colorHighlight};
					}
        		`}
            </style>
            <div className="content-grid">
                <h2><Trans i18nKey="Title.2"/></h2>
                <article className="about-wrapper">
                    <div className="about-content" style={{ color: textPrimary }}>
                        <article className="about-text">
                            <h3><Trans i18nKey="About.p.title1"/></h3>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence1"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence2"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence3"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence4"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence5"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence6"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part1.sentence7"/><br/>
                            </p>
                        </article>
                        <article className="about-text">
                            <h3><Trans i18nKey="About.p.title2"/></h3>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence1"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence2"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence3"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence4"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence5"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence6"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence7"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence8"/><br/>
                            </p>
                            <p>
                                <Trans i18nKey="About.p.part2.sentence9"/><br/>
                            </p>
                        </article>
                    </div>
                    <Cv/>
                </article>
            </div>
        </main>
    );
};

About.contextTypes = {
    theme: PropTypes.any
};

export default About;
