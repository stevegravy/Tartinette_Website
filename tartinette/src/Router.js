import React, { Component } from 'react';
import './App.css';
// Component
import Loading from './layout/Loading';
import Accueil from './layout/Accueil';
import Connexion from './layout/Connexion';
import Commande from './layout/Commande';
import ConfirmationCommande from './layout/ConfirmationCommande';
import Inscription from './layout/Inscription';
import Paiement from './layout/Paiement';
import PaiementPaypal from './layout/PaiementPaypal';
import PaiementStripe from './layout/PaiementStripe';
import Tribu from './layout/Tribu';
import Validation from './layout/Validation';


import NotFound from './layout/NotFound';
//CSS
//import './Assets/style.css';
// Rooter
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Root = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/Accueil">Accueil</Link></li>
                        <li><Link to="/Inscription">Inscription</Link></li>
                        <li><Link to="/Connexion">Connexion</Link></li>
                        <li><Link to="/Tribu">Tribu</Link></li>
                        <li><Link to="/Commande">Commande</Link></li>
                        <li><Link to="/Paiement">Paiement</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path='/Loading' component={Loading}/>
                    <Route exact path='/Accueil' component={Accueil}/>
                    <Route exact path='/Connexion' component={Connexion}/>
                    <Route exact path='/Commande' component={Commande}/>
                    <Route exact path='/ConfirmationCommande' component={ConfirmationCommande}/>
                    <Route exact path='/Inscription' component={Inscription}/>
                    <Route exact path='/Paiement' component={Paiement}/>
                    <Route exact path='/PaiementPaypal' component={PaiementPaypal}/>
                    <Route exact path='/PaiementStripe' component={PaiementStripe}/>
                    <Route exact path='/Tribu' component={Tribu}/>
                    <Route exact path='/Validation' component={Validation}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Root;