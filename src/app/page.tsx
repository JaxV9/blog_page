import { Article } from "./components/article/article";
import { GetEmail } from "./components/getEmail/getEmail";
import { Hero } from "./components/hero/hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <Article />
      <GetEmail />
    </main>
  );
}
