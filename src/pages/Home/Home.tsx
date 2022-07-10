import Head from "next/head";
import {Header} from "../../components/Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () =>{
    return (
        <>  <Header></Header>
            <section className="mt-48">
                <h1 className="font-extrabold text-center text-black text-8xl">Toma tu pedido, espera tu turno!</h1>
                <p className="font-bold max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-95">Tomate tu tiempo</p>

                <div className="bg-white max-w-3xl mx-auto mt-40 h-72 p-10 rounded-lg">
                    <h2>Cola:</h2>
                    <ul>
                        <li>asdasd</li>
                        <li>asdada</li>
                        <li>adadadas</li>
                    </ul>
                </div>
            </section>            
        </>
    )
};

export default Home;