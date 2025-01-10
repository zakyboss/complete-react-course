import { useState } from 'react';
import Content from './CoreConcept'
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';
function App() {
  const [content , setContent]= useState('')
  function handleSelect(selectedButton){
    if(selectedButton=='components'){
      setContent(selectedButton)
    }else {
      setContent(selectedButton)

    }
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
        <TabButton onClick={()=> handleSelect('Components')}>Components</TabButton>
        <TabButton  onClick={()=> handleSelect('JSX')} >JSX</TabButton>
        <TabButton  onClick={()=> handleSelect('Props')}>Props</TabButton>
        <TabButton  onClick={()=> handleSelect('State')}>State</TabButton>

        </menu>
      </section>
       <section>
        <ul>
        
          
        </ul>
       </section>
      </main>
  
    </div>
  );
}

export default App;
