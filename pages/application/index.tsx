import ApplicationCard from '@/components/Application-Card';

import Swal from "sweetalert2";


export default function Application() {

  const hola = () => {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }

  return (
    <>
      <button onClick={hola}>hola mundo</button>
      <ApplicationCard />
    </>
  );
}
