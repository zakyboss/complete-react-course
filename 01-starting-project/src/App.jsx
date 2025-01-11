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
    <>
            <h3 style={{marginLeft:'40%'}}>Core Concepts</h3>

      <main >
        <section id = 'core-concepts' style={{display:'flex'}}>
 {
    CORE_CONCEPTS.map(concept=> {
      return <Content ley={concept.title} conceptObj = {concept}/>
    })
  }
       
        <ul>
 
</ul>
</section>

<section id='examples'>
        <h1>Examples</h1>
        <menu>
        <TabButton isSelected={content==='components'} onClick={()=> handleSelect('components')}>Components</TabButton>
        <TabButton  isSelected={content==='jsx'} onClick={()=> handleSelect('jsx')} >JSX</TabButton>
        <TabButton  isSelected={content==='props'} onClick={()=> handleSelect('props')}>props</TabButton>
        <TabButton  isSelected={content==='state'} onClick={()=> handleSelect('state')}>state</TabButton>

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
  
    </>
  );
}

export default App;
