import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnviroment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation />
    </div>
  );
}
