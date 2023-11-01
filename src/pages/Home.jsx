import React from "react";
import Footer from "../components/layout/Footer";
import { loginTrainer } from "../store/slices/trainer.slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/Pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] ">
      <section className=" flex m-auto justify-center p-1 ">
        <article className="  text-center">
          <div>
            <img src="/imgs/image 11.png" alt="" />
          </div>
          <h2 className="font-inter text-3xl text-red-500">hello treiner!</h2>
          <p className="text-xl font-semibold"> to start give your name</p>
          <form onSubmit={handleSubmit}>
            <input
              className="outline-none p-2 shadow-xl w-72 bg-slate-100"
              id="nameTrainer"
              type="text"
              placeholder="your name"
              required
              autoComplete="off"
            />
            <button className="bg-red-500 text-white p-2 px-5">Start!</button>
          </form>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
