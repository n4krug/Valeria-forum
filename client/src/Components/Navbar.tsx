import { NavLink } from "solid-app-router";
import { mergeProps } from "solid-js";

export default function Navbar() {
  document.title = "Valeria Roleplay | Forum";

  return (
  <>
   <nav data-component="navbar">
    <div>
      <a href="/">Valeria Forum</a>
      </div>
    <ul>
        <NavLink href="a">Feed</NavLink>
        <NavLink href="b">Ansökningar</NavLink>
    </ul>
    <div>
        <img src="https://media.discordapp.net/attachments/907975522003333150/981084630771982376/unknown.png" alt="Profilbild" />
        Grizly
    </div>
   </nav>
  </>)
}