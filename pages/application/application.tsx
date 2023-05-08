import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-red-200">HOLA mundo soy aplicationaaaaa</div>
      <li>
        <Link href="/">Volver Home</Link>
        <Link href="/application/steps/stepsPersonalInfoPage">Step 1</Link>
        <Link href="/application/steps/stepsYourLoadInfo">Step 2</Link>
      </li>
    </>
  );
}

// pruebas de steven
