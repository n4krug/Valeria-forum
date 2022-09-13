import { NavLink, Outlet, Route, RouteDefinition, Routes } from "solid-app-router";
import { mergeProps, Suspense } from "solid-js";
import Navbar from "../Components/Navbar";



export default function Forum() {
  document.title = "Valeria Roleplay | Forum";

  return (
  <>
   <div data-page="forum">
    <Navbar />
    <div class="tab-content">
        <Suspense
          fallback={
            <p>Laddar innehåll</p>
          }
        >
          <Outlet />
        </Suspense>
      </div>
   </div>
  </>)
}