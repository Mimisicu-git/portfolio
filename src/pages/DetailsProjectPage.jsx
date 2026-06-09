import React from 'react';
import { Header } from '../components/Header';
import '../Styles/pages/DetailsProjectPage.css';
import {projects} from '../utils/project_data';
import { useParams } from 'react-router-dom';

const DetailsProject = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    const content = project.details;
    return (
        <>
        <Header />
        
        <main classeName="details-project-page">
            <section className="project-hero">
                <span className="project-hero__eyebrow">Mon evolution</span>
                <h1>La frise de mes projets</h1>
                <p>
                    Evolution au sains de mes projets.
                </p>
            </section>
        </main>
        </>
    )
};
export default DetailsProject;