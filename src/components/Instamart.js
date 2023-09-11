import { useState } from "react";

const Section = ({ title, description, showInfo, changeSectionConfig }) => {
  return (
    <div style={{ border: "1px black solid", marginTop: "10px" }}>
      <h3>{title}</h3>
      <button
        onClick={() =>
          changeSectionConfig(!showInfo ? title.split(" ")[0] : null)
        }
      >
        {showInfo ? "Hide" : "Show"}
      </button>
      {showInfo && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  function changeSectionConfig(section) {
    setVisibleSection(section);
  }
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of instamart"}
        showInfo={visibleSection == "About"}
        changeSectionConfig={changeSectionConfig}
      ></Section>

      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of instamart, the team os 50 members ...."
        }
        showInfo={visibleSection == "Team"}
        changeSectionConfig={changeSectionConfig}
      ></Section>

      <Section
        title={"Career"}
        description={
          "This is the team section of instamart, the team os 50 members ...."
        }
        showInfo={visibleSection == "Career"}
        changeSectionConfig={changeSectionConfig}
      ></Section>
    </div>
  );
};

export default Instamart;
