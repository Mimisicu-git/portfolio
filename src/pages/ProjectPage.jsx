import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import '../Styles/pages/ProjectPage.css';
import {projects} from '../utils/project_data';


const ProjectPage = () => {
    const navigate = useNavigate();
    function redirect(project) {
            navigate(`/projects/${project.id}`);
    }

    return (
        <>
        <Header />
        <main className="project-page">
            <section className="project-hero">
                <span className="project-hero__eyebrow">Mon evolution</span>
                <h1>La frise de mes projets</h1>
                <p>
                    Evolution au sein de mes projets.
                </p>
            </section>

            <section className="project-timeline">

                {projects.sort((a,b) => b.year - a.year).map((project) => (
                    <article key={project.id} className="timeline-card">
                        <div className="timeline-card__year-block">
                            <span className="timeline-card__year">{project.year}</span>
                            <span className="timeline-card__dot"/>
                        </div>

                        <div className="timeline-card__content" onClick={() => redirect(project)}>
                            <div className="timeline-card__header">
                                <div>
                                    <span className="timeline-card__status">{project.status}</span>
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="timeline-card__links">
                                    {project.githubUrl ? (
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                    ) : null}
                                    {project.liveUrl ? (
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                            Ouvrir le projet
                                        </a>
                                    ) : null}
                                </div>
                            </div>

                            <p className="timeline-card__intro">{project.shortDescription}</p>

                            <div className="timeline-card__stack">
                                {project.stack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
        </>
    );
};

export default ProjectPage;
