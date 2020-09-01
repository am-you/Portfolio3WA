import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Cv extends Component {
    constructor(props) {
        super(props);
        this.state = { addClass: true };
    }

    toggleClass() { this.setState({ addClass: !this.state.addClass });
    };

    render() {

        const { t } = this.props;

        const aboutCvHidden = ['code-box'];
        if(this.state.addClass) {
            aboutCvHidden.push('hideCv');
        }

        return (
            <div className="cvContainer">
                <button className="cvButton" onClick={this.toggleClass.bind(this)}>{this.state.addClass ? "Show code styled Curriculum vitæ" : "Hide"}</button>
                <main id="aboutCv">
                    <article className={aboutCvHidden.join(' ')}>
                        <div className="timeline alt"/>
                        <small className="section-title alt">Curriculum</small>
                        <article className="code-wrp">
                            <section data-line-nr="01" className="code-l">
                                <div className="methods">class</div>
                                <span className="propName"> Amine Youssfi</span> {"{"}
                            </section>
                            <section data-line-nr="02" className="code-l">
                                <div className="dot">··</div>
                                <div className="comment">{"//"} {t('About.cv.comment1')}</div>
                            </section>
                            <section data-line-nr="03" className="code-l">
                                <div className="dot">··</div>
                                <div className="comment">{"//"} {t('About.cv.comment2')}</div>
                            </section>
                            <section data-line-nr="04" className="code-l">
                                <div className="dot">··</div>
                                <div className="methods">constructor</div>
                                () {"{"}
                            </section>
                            <section data-line-nr="05" className="code-l">
                                <div className="dot">····</div>
                                <span className="scope">this</span>.<span className="prop2">name</span> <span
                                className="scope">=</span> <span className="string">'Amine Youssfi'</span>
                            </section>
                            <section data-line-nr="06" className="code-l">
                                <div className="dot">····</div>
                                <span className="scope">this</span>.<span className="prop2">dayOfBirthTimestamp</span> <span
                                className="scope">===</span> <span className="number">590284800</span>
                            </section>
                            <section data-line-nr="07" className="code-l">
                                <div className="dot">····</div>
                                <span className="scope">this</span>.<span className="prop2">email</span> <span
                                className="scope">=</span> <span className="string">'amine.youssfi10@gmail.com'</span>
                            </section>
                            <section data-line-nr="08" className="code-l">
                                <div className="dot">··</div>
                                {"}"}
                            </section>
                            <section data-line-nr="09" className="code-l">
                                <div className="dot">··</div>
                                <span className="propName">workExperience</span>() {"{"}
                            </section>
                            <section data-line-nr="10" className="code-l">
                                <div className="dot">····</div>
                                <div className="methods">return</div>
                                [
                            </section>
                            <section data-line-nr="11" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'Now'</span> {":"}<span className="string"> '{t('About.cv.exp1')}'</span> {"}"}
                            </section>
                            <section data-line-nr="12" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2019'</span>{":"}<span className="string"> '{t('About.cv.exp2')}'</span> {"}"}
                            </section>
                            <section data-line-nr="13" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2015-2018'</span>{":"}<span className="string"> '{t('About.cv.exp3')}'</span> {"}"}
                            </section>
                            <section data-line-nr="14" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2008-2010'</span> {":"}<span className="string"> '{t('About.cv.exp4')}'</span> {"}"}
                            </section>
                            <section data-line-nr="15" className="code-l">
                                <div className="dot">····</div>
                                {"{"} <span className="string">'2008-2010'</span> {":"}<span className="string"> '{t('About.cv.exp5')}'</span> {"}"}
                            </section>
                            <section data-line-nr="16" className="code-l">
                                <div className="dot">··</div>
                                ]
                            </section>
                            <section data-line-nr="17" className="code-l">
                                <div className="dot">··</div>
                                <span className="propName">education</span>() {"{"}</section>
                            <section data-line-nr="18" className="code-l">
                                <div className="dot">····</div>
                                <div className="methods">return</div>
                                [
                            </section>
                            <section data-line-nr="19" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2019'</span>:<span className="string"> '{t('About.cv.edu1')}'</span> {"}"},
                            </section>
                            <section data-line-nr="20" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2014'</span>:<span className="string"> '{t('About.cv.edu2')}''</span> {"}"},
                            </section>
                            <section data-line-nr="21" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2007-2012'</span>:<span  className="string"> '{t('About.cv.edu3')}''</span> {"}"}
                            </section>
                            <section data-line-nr="22" className="code-l">
                                <div className="dot">······</div>
                                {"{"} <span className="string">'2006-2007'</span>:<span className="string"> '{t('About.cv.edu4')}''</span> {"}"}
                            </section>
                            <section data-line-nr="23" className="code-l">
                                <div className="dot">····</div>
                                ]
                            </section>
                            <section data-line-nr="24" className="code-l">
                                <div className="dot">··</div>
                                }
                            </section>
                            <section data-line-nr="25" className="code-l">
                                <div className="dot">··</div>
                                <span className="propName">skills</span>{"()"} {"{"}
                            </section>
                            <section data-line-nr="26" className="code-l">
                                <div className="dot">····</div>
                                <div className="methods">return</div>
                                [ <span className="string">'Linux', 'HTML5.1/CSS4', 'Js/Ts' 'SASS/Less', 'React', 'Node.js', 'MongoDB', 'PHP', 'MySQL',  'Bootstrap/Bulma/Material Design', 'Webpack/Gulp/Grunt', 'npm/yarn', 'PWA', 'GIT/CVS', 'Express', 'Web-extensions', 'Web Sockets/Socket.IO', 'Firebase', 'Heroku', 'PhotoShop', 'Illustrator', 'After Effects', ... </span>
                                <span className="cursor"/> ]
                            </section>
                            <section data-line-nr="27" className="code-l">
                                <div className="dot">··</div>
                                {"}"}
                            </section>
                            <section data-line-nr="28" className="code-l">{"}"}
                            </section>
                            <div data-line-nr="29" className="code-l">
                                <div className="dot">··</div>
                                <span className="propName">hobbies</span>{"()"} {"{"}
                            </div>
                            <section data-line-nr="30" className="code-l">
                                <div className="dot">····</div>
                                <div className="methods">return</div>
                                [ <span className="string">{t('About.cv.hobbies')}</span>
                                <span className="cursor"/> ]
                            </section>
                            <section data-line-nr="31" className="code-l">
                                <div className="dot">··</div>
                                {"}"}
                            </section>
                            <section data-line-nr="32" className="code-l">{"}"}
                                <i> {t('About.cv.note')} </i>
                            </section>
                        </article>
                    </article>
                </main>
            </div>

        );
    }
}

export default withTranslation()(Cv);
