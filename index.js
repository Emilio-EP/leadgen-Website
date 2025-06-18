import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Head>
        <title>Leadgen Website</title>
      </Head>
      <img src="/Logo.png" alt="Logo" style={{ width: '150px', marginBottom: '2rem' }} />
      <h1>Wollen Sie Ihre Kosten senken?</h1>
      <form
        action="https://formsubmit.co/emilio.petrovic@outlook.com"
        method="POST"
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '2rem auto' }}
      >
        <input type="text" name="name" placeholder="Name" required style={{ marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="email" name="email" placeholder="E-Mail" required style={{ marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="tel" name="phone" placeholder="Telefonnummer" style={{ marginBottom: '1rem', padding: '0.5rem' }} />
        <textarea name="message" placeholder="Was möchten Sie senken oder anbieten?" style={{ marginBottom: '1rem', padding: '0.5rem' }}></textarea>
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Absenden
        </button>
      </form>
    </div>
  );
}
