import Ruts_menu from './ruts';
import LayoutHome from '@/layout_auth/layout_auth';
import Swipers from './login/swipers';
import Sing_up from './login/sing_up';
// import React, { useState } from 'react';

// type Data = {
//   contador: number,
//   setContador:number
// }

export default function App() {

  // const {contador, setContador} = useState(0)


  return (
    <>
    <style jsx>{
            `
            .box_auth{
            display: grid;
            grid-template-columns: 1fr 59vh;
            width: 100%;
            height: 100%;
           
          }
          `
        }</style>
        
          <div className="box_auth">
        <LayoutHome>
          <Sing_up/>
        </LayoutHome>

        <Swipers/>
      </div>

    </>
  );
}
