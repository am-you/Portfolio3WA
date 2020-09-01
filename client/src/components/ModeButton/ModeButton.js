import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moon from '../../images/moon.png';
import sun from '../../images/sun.png';

const imagesPath = {
    jour: sun,
    nuit: moon,
};

class ModeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: true
        };
    }

    toggleThemeImage = () => {
        this.setState(state => ({ darkMode: !state.darkMode }))
    };

    getModeImageName = () => this.state.darkMode ? 'nuit' : 'jour';

    render() {

        const {
        /*eslint-disable-next-line*/
        theme: { },
            switchTheme
        } = this.context;

        const modeImageName = this.getModeImageName();

        return (
            <div className="themeButtonContainer">
                <button
                    className="dark-switcher"
                    onClick={() => switchTheme()}
                    aria-label="Toggle Dark Mode."
                    title="Toggle Dark Mode"
                >
                    <img src={imagesPath[modeImageName]} onClick={this.toggleThemeImage} alt="ToggleDarkThem" className="theme-icon"/>
                </button>
            </div>
        );
    }
}

ModeButton.contextTypes = {
    theme: PropTypes.any,
    switchTheme: PropTypes.func
};

export default ModeButton;
