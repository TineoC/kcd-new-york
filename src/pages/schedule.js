import * as React from "react";
import Layout from "../components/layout";

export default function SchedulePage() {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Schedule</h1>
            <p className="subtitle">June 10, 2026 — Full schedule coming soon</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <p>The full event schedule will be published here once sessions and speakers are confirmed. Check back later or follow us for updates.</p>
        </div>
      </section>
    </Layout>
  );
}
