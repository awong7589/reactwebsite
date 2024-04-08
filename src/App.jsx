import './App.css'
import molang from "./images/molang.png"
import dango from "./images/dango.jpg"
import ditto from "./images/ditto.jpg"
import donut from "./images/donut.jpg"
import pineapple from "./images/pineapple.jpg"
import { useState } from 'react';

const nav_components = ["Home", "About", "Projects/Art"];
const imgs = [
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
      <div className = "pic_container">
        <img className = "pictures" src = {s} alt = {l} />
      </div>
    </>
  );
}

function App() {
  const [like, setLike] = useState(false)

  function likeClick() {
    setLike(!like)
  }

  return (
    <>
    <div className = {like && "background"}>
    <NavBar />
    <img className = "banner" src = {molang}/>
    <div >
      <h3>About</h3>
      <About />
    </div>
    <div>
      <h3>Art</h3>
      <div>
        <button className = "button" onClick={likeClick}>
            Like!
        </button>
      </div>
      <div>
      {imgs.map((element) => <Art key={element.id} l={element.label} d = {element.desc} s = {element.img}/>)}
      </div>
      {like && <img className = "liked" src = "https://static-00.iconduck.com/assets.00/red-heart-emoji-512x469-jzvvrv9l.png"/>}
      {like && <p>Thanks for liking!</p>}

    </div>
    </div>
    </>
  );
}

export default App


