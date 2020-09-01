import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';
import { withTranslation } from 'react-i18next';
import logo from '../../images/logo.png';
import ModeButton from '../ModeButton';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isSticky: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.pageYOffset > this.nav.offsetTop) {
            this.setState({
                isSticky: true
            });
        } else {
            this.setState({
                isSticky: false
            });
        }
    }

    scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
    }

    render() {

        const { t } = this.props;
        const {
            theme: { colorPrimary, bgPrimary, navAlpha }
        } = this.context;

        const stickyClass = this.state.isSticky ? 'sticky' : '';

        const stickyStyles = this.state.isSticky
            ? { backgroundColor: navAlpha, color: colorPrimary }
            : { backgroundColor: bgPrimary, color: colorPrimary, marginTop: 75 };

        return (
            <nav className={stickyClass} ref={(elem) => {this.nav = elem;}} style={stickyStyles}>
                <div className="nav-container">
                    <ul>
                        <li>
                            <a href="/" className="nav-container__item logo-container" >
                                <img src={logo} alt="AmYou" className="logo" title="AmYou"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="links">
                        <li>
                            <a className="nav-container__item" href="/">Amine Youssfi</a>
                        </li>
                    </ul>
                    <ModeButton/>
                    <div className="tab-contents">
                        <div className="buttonCont">
                            <button
                                onClick={() => this.scrollToPage('.landing-page')}
                            >
                                {t('Title.1')}
                            </button>
                        </div>
                        <div className="buttonCont">
                            <button
                                onClick={() => this.scrollToPage('.about-page')}
                            >
                                About
                            </button>
                        </div>
                        <div className="buttonCont">
                            <button
                                onClick={() => this.scrollToPage('.portfolio-page')}
                            >
                                {t('Title.3')}
                            </button>
                        </div>
                        <div className="buttonCont">
                            <button
                                onClick={() => this.scrollToPage('.contact-page')}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Nav.contextTypes = {
    theme: PropTypes.any
};

export default withTranslation()(Nav);
