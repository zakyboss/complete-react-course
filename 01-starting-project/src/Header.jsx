import coreConceptImg from './assets/react-core-concepts.png'
export default function Header(){
    let randomNum = Math.floor(Math.random()*3);
    return (
    <>
    <header>
          <img src={coreConceptImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {   

            randomNum==1 ? 'Fundamentals':randomNum==2?'Core':'Essentials'} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    </>)
  }