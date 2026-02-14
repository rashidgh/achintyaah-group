import React from "react";
import ProjectShowcaseSlider from "./ProjectShowcaseSlider";
import projectSliderData from "../../data/projectSliderData";

const ProjectShowcaseSection = ({ theme }) => {
    return (
        <div className="px-4 md:px-12" id="projects">
            {projectSliderData.map((item) => (
                <ProjectShowcaseSlider
                    key={item.id}
                    title={item.title}
                    images={item.images}
                    content={item.content}
                    theme={theme}
                />
            ))}
        </div>
    );
};

export default ProjectShowcaseSection;
