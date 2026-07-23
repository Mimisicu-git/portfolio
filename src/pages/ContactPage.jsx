import React from 'react';
import { Header } from '../components/Header';
import '../Styles/pages/ContactPage.css';
import { contactItems } from '../utils/contact_data';

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
                            <div className="contact-card__icon">
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
