import Content from './CoreConcept'
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';
function App() {
  function handleSelect(){
    alert('Hello You selected Me!')
  };
  return (
    <div>
            <h3 style={{marginLeft:'40%'}}>Core Concepts</h3>

      <main >
        <section id = 'core-concepts' style={{display:'flex'}}>

       
        <ul>
  {
    CORE_CONCEPTS.map(concept=> {
      return <Content  conceptObj = {concept}/>
    })
  }
</ul>
</section>

<section id='examples'>
        <h1>Examples</h1>
        <menu>
        <TabButton onSelect={handleSelect}>Components</TabButton>
        <TabButton  onSelect={handleSelect} >JSX</TabButton>
        <TabButton  onSelect={handleSelect}>Props</TabButton>
        <TabButton  onSelect={handleSelect}>State</TabButton>

        </menu>
      </section>
      </main>
  
    </div>
  );
}

export default App;
