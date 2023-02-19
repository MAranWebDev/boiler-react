/* env */
import { VITE_SECRET } from '../config/env';

/* features */
import { Counter } from '../features/counter';

function Home() {
  return (
    <main>
      <section>
        <h1>My secret is: {VITE_SECRET}</h1>
      </section>

      <section>
        <Counter value={100} />
      </section>
    </main>
  );
}

export { Home };
