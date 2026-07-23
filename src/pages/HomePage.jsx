import React from 'react';
import { Header } from '../components/Header';
import '../Styles/pages/HomePage.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    const floatingTechs = ['CSS', 'JavaScript', 'React', 'SQL', 'PHP', 'Python', 'Java', 'Rust'];
    const techStack = ['CSS', 'JavaScript', 'React', 'PHP', 'SQL', 'Rust', 'Java', 'C', 'Python', 'Git'];

    return (
        <>
            <Header />
            <main className="home-page">
                <section className="banner">
                    <div className="banner__orbit">
                        {floatingTechs.map((tech, index) => (
                            <span
                                key={tech}
                                className={`tech-float tech-float--${index + 1}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="banner__content">
                        <span className="banner__eyebrow">Développeur informatique</span>
                        <h1>Bienvenue sur mon portfolio</h1>
                        <p>
                            Je suis Remy Sopena, jeune développeur freelance apres un BUT Informatique à l'IUT de Valence.
                        </p>
                    </div>
                </section>

                <section className="home-grid">
                    <article className="home-card">
                        <h2>Ma présentation</h2>
                        <p>
                            Passionné par le développement, je suis particulièrement attiré par le développement
                            web. J'aime résoudre des défis techniques, travailler en équipe et co-construire des
                            solutions utiles. Ce qui me motive le plus, c'est de voir un projet prendre forme et
                            répondre à un vrai besoin.
                        </p>
                    </article>

                    <article className="home-card">
                        <h2>Mon parcours</h2>
                        <p>
                            J'ai obtenu mon baccalauréat STI2D au lycée Saint-Denis d'Annonay en 2023, puis
                            j'ai intégré le BUT Informatique à l'IUT de Valence. Durant ces trois années,
                            j'ai mené plusieurs <strong><NavLink to="/projects">projets</NavLink></strong> et réalisé un stage de 7 semaines au centre social du
                            Roussillonnais. Apres quoi je me sui lancé en freelance dans le développement full-stack.
                        </p>
                    </article>

                    <article className="home-card home-card--wide">
                        <h2>Mes compétences</h2>
                        <p>
                            Mes compétences s'articulent autour du développement web, en particulier avec
                            JavaScript et React. J'ai conçu une application métier avec une interface adaptée
                            aux contraintes du terrain. J'ai également développé une application complète en PHP
                            avec une base de données SQL pour la gestion d'une cantine. J'ai aussi travaillé en
                            Rust sur un projet de recommandation de films selon la météo et l'heure. Ces
                            expériences m'ont permis de construire une base technique solide avec une approche
                            centrée sur l'utilisateur.
                        </p>
                        <div className="tech-stack">
                            {techStack.map((tech) => (
                                <span key={tech} className="tech-pill">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default HomePage;