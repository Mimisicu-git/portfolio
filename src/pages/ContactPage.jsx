import React from 'react';
import { Header } from '../components/Header';
import '../Styles/pages/ContactPage.css';

const contactItems = [
    {
        label: 'Mail',
        value: 'remy.sopena@gmail.com',
        href: 'mailto:remy.sopena@gmail.com',
        fallback: 'M',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/remy-sopena',
        href: 'https://www.linkedin.com/in/remy-sopena',
        image: '/src/assets/contact/linkedin.png',
        fallback: 'in',
    },
    {
        label: 'GitHub',
        value: 'github.com/Mimisicu-git',
        href: 'https://github.com/Mimisicu-git',
        image: '/src/assets/contact/github.png',
        fallback: 'GH',
    },
    {
        label: 'Discord',
        value: 'mimisicu.',
        href: 'https://discord.com',
        image: '/src/assets/contact/discord.png',
        fallback: 'D',
    },
];

const ContactPage = () => {
    return (
        <>
            <Header />
            <main className="contact-page">
                <section className="contact-hero">
                    <span className="contact-hero__eyebrow">Restons en contact</span>
                    <h1>Me contacter</h1>
                    <p>
                        Voici mes coordonnees pour me contacter.
                    </p>
                </section>

                <section className="contact-grid">
                    {contactItems.map((item) => (
                        <a
                            key={item.label}
                            className="contact-card"
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                            <div className="contact-card__icon" aria-hidden="true">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt=""
                                        onLoad={(event) => {
                                            const fallback = event.currentTarget.nextElementSibling;
                                            if (fallback) {
                                                fallback.style.display = 'none';
                                            }
                                        }}
                                        onError={(event) => {
                                            event.currentTarget.style.display = 'none';
                                        }}
                                    />
                                ) : null}
                                <span className="contact-card__fallback">{item.fallback}</span>
                            </div>
                            <div className="contact-card__content">
                                <span className="contact-card__label">{item.label}</span>
                                <span className="contact-card__value">{item.value}</span>
                            </div>
                        </a>
                    ))}
                </section>
            </main>
        </>
    );
};

export default ContactPage;
