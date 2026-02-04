import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">404</h1>
            <p className="subtitle">Page not found</p>
            <Link to="/" className="button is-light">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
