import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SobreMim from "./pages/SobreMim";
import Home from "./pages/Home"
import MeusDreads from "./pages/MeusDreads"
import {FaWhatsapp} from "react-icons/fa"

function App() {
	return (
		<React.Fragment>
			 <a href="//wa.me/5516988685717" target="_blank" rel="Numero">
			 <FaWhatsapp className='whats-link FaWhatsapp' />
			 </a>
			<Navbar/>
			<Home />
			<MeusDreads />
			<SobreMim />
			<Footer />
		</React.Fragment>
	);
}

export default App;