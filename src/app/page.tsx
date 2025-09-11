import { Animation } from "@/modules/animation/animation"
import { Greeting } from "@/modules/greeting/greeting";
import { Skills } from "@/modules/skills/skills";


export default function Home() {
  return (
    <>
      <Animation />

      <Greeting />
      <Skills />
    </>
  );
}
