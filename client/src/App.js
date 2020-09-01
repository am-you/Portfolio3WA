import React from "react";
import HomePage from "./pages/HomePage";
import ErrorGame from "./components/ErrorGame";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import './styles/main.scss';
import Fr from './images/Fr.png';
import En from './images/En.png';

function App() {

    const { i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng).then(r => <ErrorGame/>);
    };

    return (
        <BrowserRouter>
            <div className="LangBtnContainer">
                <button onClick={() => changeLanguage('en')} className="LangBtn En"><img src={En} alt="british-flag"/></button>
                <button onClick={() => changeLanguage('fr')} className="LangBtn Fr"><img src={Fr} alt="french-flag"/></button>
            </div>
            <Switch>
                <Route path="/" exact component={ HomePage }/>
                {/*<Route path="/Blog" exact component={ Blog}/> en cours de construction */}
                <Route path="*"  component={ ErrorGame }/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
