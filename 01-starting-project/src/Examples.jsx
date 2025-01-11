
import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
export default function Examples(){
    const [content , setContent]= useState('')
    function handleSelect(selectedButton){
      setContent(selectedButton)
    };
    return (
        <>
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
    
      </>
    );
}