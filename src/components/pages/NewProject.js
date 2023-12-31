import ProjectForm from "../project/ProjectForm";
import styles from "./NewProjects.module.css";

function NewProject() {
  return (
    <div className={styles.newprojects_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  );
}

export default NewProject;
