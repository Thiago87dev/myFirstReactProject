import { useState, useEffect } from "react";

import styles from "../project/ProjectForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

export default function ServiceForm({ handleSubmit, btnText, projectData }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChance(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChance}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChance}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChance}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
