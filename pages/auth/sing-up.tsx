import SingUp_Card from "@/components/SingUp-Card";
// import { Button } from "@material-tailwind/react";
// import Swal from "sweetalert2";

const sing_up = () => {
  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })
  // const alert1 = () => {
  //   Toast.fire({
  //     icon: 'success',
  //     title: 'Signed in successfully'
  //   })
  // }

  return (
    <>
      {/* <Button onClick={alert1}>HOLA MUNDO SOY BOTTON</Button> */}
      <SingUp_Card />
    </>
  );
};

export default sing_up;