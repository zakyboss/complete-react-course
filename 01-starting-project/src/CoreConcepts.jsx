import { CORE_CONCEPTS } from './data';
import CoreConcept from './CoreConcept'

export default function CoreConcepts(){
    return (
        <>
        
        <h3 style={{marginLeft:'40%'}}>Core Concepts</h3>
         
                 <section id = 'core-concepts' style={{display:'flex'}}>
          {
             CORE_CONCEPTS.map(concept=> {
               return <CoreConcept key={concept.title} conceptObj = {concept}/>
             })
           }
            
         </section>
        
        </>
          
         
    )
}