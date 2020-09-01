import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../PortfolioItem';
import portfolioItems from './portfolio-items.js';

const Portfolio = (props, context) => {
	const {
		theme: { colorPrimary, textPrimary, bgPrimary,colorHighlight }
	} = context;

	return (
		<main className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
			<div className="content-grid">
				<h2>Portfolio</h2>
				<section className="portfolio-wrapper">
					<style jsx="true">
						{`
							.portfolio-item {
								background-color: ${colorPrimary};
								color: ${textPrimary};
							}
							.portfolio-item a {
								color: ${textPrimary};
							}
							.portfolio-item__links a:hover {
								border-bottom: 1px solid #2f70dd;
							}
							highlight {
								background-color: ${colorHighlight};
							}
						`}
					</style>
					{portfolioItems.map((item, i) => (
						<PortfolioItem render={item.render} key={i} />
					))}
				</section>
			</div>
		</main>
	);
};

Portfolio.contextTypes = {
	theme: PropTypes.any
};

export default Portfolio;
