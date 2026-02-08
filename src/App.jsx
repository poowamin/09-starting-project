import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };
      return {
        ...prevState,
        project: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
