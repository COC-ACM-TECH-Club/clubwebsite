import React from "react";
import "./Foot.css";

const tabs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const Foot: React.FC = () => {
  return (
    <nav className="Foot">
      <main className="FootContainer">
        <p style={{ width: "50%" }}>
          <h1 style={{ color: "white" }}>COC Tech Club</h1>
        </p>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 30,
          }}
        >
          {tabs.map((tab) => {
            return (
              <a href={tab.path} className="NavItems" key={tab.name}>
                {tab.name}
              </a>
            );
          })}
        </section>
      </main>
    </nav>
  );
};

export default Foot;
