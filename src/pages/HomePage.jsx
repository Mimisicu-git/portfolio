import React from 'react';
import { Header } from '../components/Header';
import '../Styles/pages/HomePage.css';

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="home-page">
                <section className="home-hero">
                    <div className="home-hero__content">
                        <span className="home-hero__eyebrow">Developpeur web en formation</span>
                        <h1>Bienvenue sur mon portfolio</h1>
                        <p className="home-hero__intro">
                            Je suis Remy Sopena, etudiant en derniere annee de BUT Informatique a l'IUT de Valence.
                            J'aime concevoir des interfaces utiles, developper des applications web solides et
                            transformer des idees en projets concrets.
                        </p>
                    </div>
                </section>

                <section className="home-grid">
                    <article className="home-card">
                        <h2>Ma presentation</h2>
                        <p>
                            Passionne par le developpement, je suis particulierement attire par le developpement
                            web. J'aime resoudre des defis techniques, travailler en equipe et co-construire des
                            solutions utiles. Ce qui me motive le plus, c'est de voir un projet prendre forme et
                            repondre a un vrai besoin.
                        </p>
                    </article>

                    <article className="home-card">
                        <h2>Mes etudes</h2>
                        <p>
                            J'ai obtenu mon baccalaureat STI2D au lycee Saint-Denis d'Annonay en 2023, puis
                            j'ai integre le BUT Informatique a l'IUT de Valence. Durant ces trois annees,
                            j'ai mene plusieurs projets et realise un stage de 7 semaines au centre social du
                            Roussillonnais. Aujourd'hui, je suis a la recherche d'un stage pour cet ete.
                        </p>
                    </article>

                    <article className="home-card home-card--wide">
                        <h2>Mes competences</h2>
                        <p>
                            Mes competences s'articulent autour du developpement web, en particulier avec
                            JavaScript et React. J'ai concu une application metier avec une interface adaptee
                            aux contraintes du terrain. J'ai egalement developpe une application complete en PHP
                            avec une base de donnees SQL pour la gestion d'une cantine. J'ai aussi travaille en
                            Rust sur un projet de recommandation de films selon la meteo et l'heure. Ces
                            experiences m'ont permis de construire une base technique solide avec une approche
                            centree sur l'utilisateur.
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
};

export default HomePage;
