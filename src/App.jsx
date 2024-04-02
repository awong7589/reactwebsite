import './App.css'
import molang from "./images/molang.png"
import dango from "./images/dango.jpg"
import ditto from "./images/ditto.jpg"
import donut from "./images/donut.jpg"
import pineapple from "./images/pineapple.jpg"

const nav_components = ["Home", "About", "Projects/Art"];
const imgs = [
  {id: 1, label: "Molang", desc: "Molang is a bunny character. I freehanded this pattern", img: molang},
  {id: 2, label: "Dango", desc: "Dango is a japanese desert but this pattern made it into a bear dango.", img: dango},
  {id: 3, label: "Ditto", desc: "Ditto is a pokemon. This pattern was really interesting to crochet!", img: ditto},
  {id: 4, label: "Donut", desc: "This is a bear on a donut floatie. Super cute but this really hurt my hands to crochet", img: donut},
  {id: 5, label: "Pinapple", desc: "Pinapple Porcupine", img: pineapple}
];
// Navbar component
function NavBar() {
  return (
    <nav>
      <div className = "nav">
          {nav_components.map((element) => (<li><a href = "">{element}</a></li>) )}
      </div>
    </nav>
  );
}

function About() {
  return (
    <>
      <p>Hello, my name is Annika Wong and I am currently a student at the University of Maryland. I am currently a computer science Major and (hopefully) a math minor.</p>
      <p>Some extracirriculars that I am involved in are AppDev Club's bootcamp and UMIACS, a technical research help desk.</p>
      <p>In my free time, I like listening to a widge range of music, going on runs, working out, and crocheting!</p>
    </>
  );
}

function Art({l, d, s}) {
  return (
    <>
    <div>
        <h5>{l}</h5>
        <p>{d}</p>
        <img className = "smaller" src = {s} alt = {l} />
    </div>
    </>
  );
}

function App() {
  return (
    <>
    <NavBar />
    <img src = "https://thumb.ac-illust.com/7a/7ace6887fa230c744cd85d69a44edbf4_t.jpeg"/>
    <div >
      <h3>About</h3>
      <About />
    </div>
    <div>
      <h3>Projects</h3>
      <p>tbd</p>
    </div>
    <div>
      <h3>Art</h3>
      {imgs.map((element) => <Art key={element.id} l={element.label} d = {element.desc} s = {element.img}/>)}
      {/*Do some function where u map each element in the thing into a function (pass as a prop) and access and spit out the thing*/}
    </div>
    </>
  );
}

export default App


