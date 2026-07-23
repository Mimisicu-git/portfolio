import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import '../Styles/pages/DetailsProjectPage.css';
import { projects } from '../utils/project_data';

const DetailsProject = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <>
                <Header />
                <main className="details-project-page">
                    <section className="details-hero">
                        <span className="details-hero__eyebrow">Projet introuvable</span>
                        <h1>Ce projet n'existe pas</h1>
                        <p>Le projet demande n'a pas ete trouve dans la liste de mes projets.</p>
                        <Link className="details-link details-link--primary" to="/projects">
                            Retour aux projets
                        </Link>
                    </section>
                </main>
            </>
        );
    }

    const content = project.details;

    return (
        <>
            <Header />

            <main className="details-project-page">
                <Link className="details-back-link" to="/projects">
                    Retour aux projets
                </Link>

                <section className="details-hero">
                    <div>
                        <span className="details-hero__eyebrow">{project.status}</span>
                        <h1>{project.title}</h1>
                        <p>{content.description}</p>
                    </div>

                    <div className="details-hero__meta">
                        <span>{project.year}</span>
                        <span>{project.stack.length} technologies</span>
                    </div>
                </section>

                <section className="details-layout">
                    <div className="details-content">

                        <article className="details-section">
                            <span className="details-section__label">Apprentissage</span>
                            <h2>Ce que j'ai appris</h2>
                            <p>{content.learning}</p>
                        </article>

                        <article className="details-section">
                            <span className="details-section__label">Fonctionnalités</span>
                            <h2>fonctionement</h2>
                            <p>{content.features}</p>
                        </article>
                    </div>

                    <aside className="details-sidebar">
                        <div className="details-sidebar__block">
                            <h2>Technologies</h2>
                            <div className="details-stack">
                                {project.stack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="details-sidebar__block">
                            <h2>Liens</h2>
                            <div className="details-links">
                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                                {project.liveUrl ? (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                        Ouvrir le projet
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </aside>
                </section>
            </main>
        </>
    );
};

export default DetailsProject;
