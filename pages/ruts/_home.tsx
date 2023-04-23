import Link from 'next/link';

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ruts/_auth">Ahth</Link>
        </li>
        <li>
          <Link href="/ruts/_home-application">Application</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;

// pruebas de steven
