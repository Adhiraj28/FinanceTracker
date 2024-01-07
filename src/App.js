import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation";
import React, { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from './Components/Incomes/Income'
import Expenses from './Components/Expenses/Expenses'
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global)

  const displayData = ()=>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: <Dashboard/>
    } 
  }

  const orbMemo = useMemo(() => {
    return <Orb/>
  }, [])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f0f0f0;
  position: relative;
  z-index: 1; // Added z-index
  main{
    flex:1;
    background: rgba(40, 40, 40, 0.8);
    border: 3px solid rgb(240, 240, 225);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`;

export default App;
