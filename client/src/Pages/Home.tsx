import { mergeProps, Show } from "solid-js";
import {Router,Routes, Route, Link, useRoutes, Outlet, RouteDefinition} from "solid-app-router";

export default function Home() {
  document.title = "Valeria Roleplay";
  const isAdmin = false;
  return (
  <>
    <div data-page="home">
        <div>
          <img src="https://media.discordapp.net/attachments/958276034002812958/966061819296890970/unknown.png" alt="Bild" />
          <h1>Valeria Roleplay</h1>
          <div class="buttons">
            <button><a>Discord</a></button>
            <button><Link href="/forum">Forum</Link></button>
            <button><a>FiveM</a></button>
            <Show when={isAdmin}>
                <button>Admin</button>
              </Show>
          </div>
        </div>
    </div>
  </>)
}