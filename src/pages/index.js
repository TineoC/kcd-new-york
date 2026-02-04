import * as React from "react";
import Layout from "../components/layout";

const EVENT_DATE = "June 10, 2026";
const VENUE = "Convene One Liberty Plaza";
const ADDRESS = "1 Liberty St, New York, NY 10006";

const WHAT_TO_EXPECT = [
  {
    title: "Expert Talks",
    description: "Technical talks from industry experts and practitioners sharing real-world experiences and best practices.",
  },
  {
    title: "Hands-on Workshops",
    description: "Interactive workshops and tutorials where you can learn by doing with guidance from experienced instructors.",
  },
  {
    title: "Networking",
    description: "Connect with the cloud native community, meet potential employers, and build lasting professional relationships.",
  },
  {
    title: "Cloud Native Technologies",
    description: "Learn about Kubernetes, containers, service mesh, observability, and the latest cloud native innovations.",
  },
  {
    title: "Local & International Speakers",
    description: "Hear from both local practitioners and international experts in the cloud native ecosystem.",
  },
  {
    title: "Community Driven",
    description: "Celebrate and contribute to open source projects that power modern cloud infrastructure.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero with high-contrast event details box */}
      <section
        className="hero is-medium kcd-ny-hero"
        style={{
          backgroundImage: "url('/img/kcd-ny-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-body">
          <div className="kcd-ny-hero-overlay" />
          <div className="container has-text-centered kcd-ny-hero-content">
            <h1 className="title is-1 kcd-ny-hero-title">Kubernetes Community Days New York 2026</h1>
            <div className="kcd-ny-hero-details-box">
              <p className="kcd-ny-hero-detail">
                <span className="kcd-ny-hero-label">Date:</span> {EVENT_DATE}
                <span className="kcd-ny-hero-sep"> · </span>
                <span className="kcd-ny-hero-label">Venue:</span> {VENUE}
              </p>
              <p className="kcd-ny-hero-detail kcd-ny-hero-address">{ADDRESS}</p>
              <div className="mt-4">
                <span className="button kcd-ny-cta is-medium" aria-disabled="true">
                  Register (coming soon)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Join the community */}
      <section className="section">
        <div className="container content">
          <h2 className="title is-3">Join the community</h2>
          <p>
            Kubernetes Community Days (KCD) New York 2026 brings the community together on {EVENT_DATE} at {VENUE} in
            Manhattan. Join developers, platform engineers, and cloud native enthusiasts for a day of talks, workshops,
            and networking.
          </p>
          <p>
            KCD New York is a community-run conference supported by the Cloud Native Computing Foundation (CNCF).
            Whether you're running Kubernetes in production, contributing to open source, or exploring cloud native
            technologies, KCD New York offers a front-row seat to the community and the ecosystem.
          </p>
        </div>
      </section>

      {/* What to Expect - dark section with feature grid */}
      <section className="section kcd-ny-dark-section">
        <div className="container">
          <h2 className="title is-3 has-text-centered kcd-ny-dark-title">What to Expect</h2>
          <div className="columns is-multiline is-variable is-5 mt-5">
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.title} className="column is-6-tablet is-4-desktop">
                <div className="kcd-ny-feature-box">
                  <h3 className="title is-5 kcd-ny-feature-box-title">{item.title}</h3>
                  <p className="kcd-ny-feature-box-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="section kcd-ny-cta-banner">
        <div className="container">
          <div className="kcd-ny-cta-banner-inner">
            <div>
              <h2 className="title is-4 kcd-ny-cta-banner-title">Ready to Join Us?</h2>
              <p className="kcd-ny-cta-banner-text">
                Be part of New York's premier cloud native community event. Register today to secure your spot!
              </p>
            </div>
            <div className="kcd-ny-cta-banner-button">
              <span className="button kcd-ny-cta is-medium" aria-disabled="true">
                Register (coming soon)
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
