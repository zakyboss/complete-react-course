// import MainGoal from "./MainGoal";
// import Header from "./Header";
import  Content from "./Content"
import coreConcepts from './assets/react-core-concepts.png';
import component from './assets/components.png';
import state from './assets/state-mgmt.png';
import config from './assets/config.png';
import jsx from './assets/jsx-ui.png'

function App() {
  return (
    <div>
            <h3 style={{marginLeft:'40%'}}>Core Concepts</h3>

      <main id = 'core-concepts' style={{display:'flex'}}>
        <ul>
<Content title ='Components' description = 'They are Crucial Building blocks in React , they fit into each other like Legos' image ={coreConcepts}/>
<Content title ='JSX' description = 'They are a mixture of HTML CSS and JS which are returned by components ' image ={jsx}/>
<Content title ='State' description = 'States are current condition of an element, they can be varied and changing' image ={state}/>
<Content title ='Props' description = 'Props allow as to pass dynamic data to each individual element with dynamic Data' image ={config}/>
</ul>
      </main>
    </div>
  );
}

export default App;
