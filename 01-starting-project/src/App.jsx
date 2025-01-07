import MainGoal from "./MainGoal";
// function Header(){
//   return (
//   <>
//   <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//   </>)
// }
function App() {
  return (
    <div>
      <main>
      <MainGoal/>

        <h2 style={{  marginLeft: '100px'
}}>Time to get started!</h2>

      </main>
    </div>
  );
}

export default App;
