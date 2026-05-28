import { Animation } from "@/modules/animation/animation"
import { Contacts } from "@/modules/contacts/contacts";
import { Experience } from "@/modules/experience/experience";
import { Greeting } from "@/modules/greeting/greeting";
import { Portfolio } from "@/modules/portfolio/portfolio";
import { Skills } from "@/modules/skills/skills";


export default function Home() {
  return (
    <>
      <Animation />

      <Greeting />
      <Skills />
      <Experience />
      <Portfolio />
      <Contacts />
    </>
  );
}
