import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import LatestNews from "../components/LatestNews";
import LaftAside from "../components/homelayout/LaftAside";
import RightAside from "../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-10/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-10/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3">
          <LaftAside></LaftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
