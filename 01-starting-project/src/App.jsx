import Content from './CoreConcept'
import { CORE_CONCEPTS } from './data';
function App() {
  return (
    <div>
            <h3 style={{marginLeft:'40%'}}>Core Concepts</h3>

      <main id = 'core-concepts' style={{display:'flex'}}>
        <ul>
  {
    CORE_CONCEPTS.map(concept=> {
      return <Content  conceptObj = {concept}/>
    })
  }
</ul>
      </main>
    </div>
  );
}

export default App;
