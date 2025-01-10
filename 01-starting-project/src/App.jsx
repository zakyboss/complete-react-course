import { useState } from 'react';
import Content from './CoreConcept'
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';
import { EXAMPLES } from './data';
function App() {
  const [content , setContent]= useState('')
  function handleSelect(selectedButton){
    setContent(selectedButton)
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
        <TabButton onClick={()=> handleSelect('components')}>Components</TabButton>
        <TabButton  onClick={()=> handleSelect('jsx')} >JSX</TabButton>
        <TabButton  onClick={()=> handleSelect('props')}>props</TabButton>
        <TabButton  onClick={()=> handleSelect('state')}>state</TabButton>

        </menu>
      </section>
      {
        content? <section id='tab-content'>
        <h3>{EXAMPLES[content].title}</h3>
        <p>
        {EXAMPLES[content].description}
        </p>
        <pre>
          <code>
          {EXAMPLES[content].code}
          </code>
        </pre>
       </section>: <p>Please Select a Topic</p>
      }
      
      </main>
  
    </div>
  );
}

export default App;
