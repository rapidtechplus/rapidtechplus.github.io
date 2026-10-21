/**
 * Featured-project visual (Phase 40): a laptop showing a product dashboard
 * with a phone showing an assistant conversation in front of it. Pure
 * HTML/CSS (`.show-*` in globals.css) — an illustrative product interface,
 * not a client's data, and labelled as such by the caption. The mockup itself
 * is hidden from assistive tech; the caption is the accessible description.
 */
export function ProductShowcase({ note }: { note: string }) {
  return (
    <figure className="show">
      <div className="show-laptop" aria-hidden="true">
        <div className="show-lid">
          <div className="show-screen">
            <div className="show-side surface-dark">
              <span className="show-side-brand">Dashboard</span>
              <span className="show-side-item is-active">
                <i /> Overview
              </span>
              <span className="show-side-item">
                <i /> Projects
              </span>
              <span className="show-side-item">
                <i /> AI assistant
              </span>
              <span className="show-side-item">
                <i /> Analytics
              </span>
              <span className="show-side-item">
                <i /> Team
              </span>
            </div>
            <div className="show-main">
              <div className="show-top">
                <span className="show-search">Search anything…</span>
                <span className="show-brand">Rapid Tech Plus</span>
                <span className="show-user" />
              </div>
              <span className="show-h">Project overview</span>
              <div className="show-tiles">
                <span className="show-tile">
                  <b>12</b>
                  <span>Active projects</span>
                </span>
                <span className="show-tile">
                  <b>8</b>
                  <span>Team members</span>
                </span>
                <span className="show-tile">
                  <b>4</b>
                  <span>Integrations</span>
                </span>
                <span className="show-tile">
                  <b>3</b>
                  <span>Environments</span>
                </span>
              </div>
              <div className="show-panels">
                <div className="show-card">
                  <div className="show-card-head">
                    <span>Growth</span>
                    <em>↑ trending</em>
                  </div>
                  <svg
                    className="show-chart"
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="show-area"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0"
                          stopColor="var(--brand-sky)"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="1"
                          stopColor="var(--brand-sky)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 50 C 20 46, 30 40, 50 42 S 80 30, 100 28 S 130 20, 150 16 S 180 10, 200 4 V60 H0 Z"
                      fill="url(#show-area)"
                    />
                    <path
                      d="M0 50 C 20 46, 30 40, 50 42 S 80 30, 100 28 S 130 20, 150 16 S 180 10, 200 4"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <div className="show-card is-activity">
                  <div className="show-card-head">
                    <span>Recent activity</span>
                  </div>
                  <div className="show-act">
                    <i />
                    <span>
                      <b>New deployment</b>
                      <span>2 minutes ago</span>
                    </span>
                  </div>
                  <div className="show-act">
                    <i />
                    <span>
                      <b>Model evaluation passed</b>
                      <span>12 minutes ago</span>
                    </span>
                  </div>
                  <div className="show-act">
                    <i />
                    <span>
                      <b>New team member added</b>
                      <span>1 hour ago</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show-base" />

        <div className="show-phone">
          <div className="show-phone-screen">
            <span className="show-phone-h">
              How can I help
              <br />
              you today?
            </span>
            <span className="show-chip">
              <i /> Analyse data
            </span>
            <span className="show-chip">
              <i /> Generate insights
            </span>
            <span className="show-chip">
              <i /> Automate workflow
            </span>
            <span className="show-chip">
              <i /> Answer questions
            </span>
            <span className="show-input">Type a message…</span>
          </div>
        </div>
      </div>
      <figcaption>{note}</figcaption>
    </figure>
  );
}
