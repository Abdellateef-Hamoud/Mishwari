import React from 'react';
import './DocumentationPage.css';

function DocumentationPage() {
  return (
    <div className="documentation-page">
      <header className="doc-header">
        <div className="container">
          <h1>Waslny Documentation</h1>
          <p>Everything you need to know about using the Waslny app.</p>
        </div>
      </header>

      <div className="doc-content container">
        <aside className="sidebar">
          <ul>
            <li><a href="#intro">Overview</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#install">Installation</a></li>
            <li><a href="#create">Create Project</a></li>
          </ul>
        </aside>

        <main className="main-doc">
          <section id="intro">
            <h2>Overview</h2>
            <p>Waslny is a ride-booking web application designed for accessibility and efficiency.</p>
          </section>

          <section id="features">
            <h2>Features</h2>
            <ul>
              <li>Easy booking</li>
              <li>Tracking trips in real time</li>
              <li>Multiple payment options</li>
            </ul>
          </section>

          <section id="install">
            <h2>Installation</h2>
            <p>Clone the repo and run <code>npm install</code> to get started.</p>
          </section>

          <section id="create">
            <h2>Create Project</h2>
            <p>Follow our guide to start building your custom features on top of Waslny.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DocumentationPage;



