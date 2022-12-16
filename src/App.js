import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SobreMim from "./pages/SobreMim";
import Home from "./pages/Home"
import MeusDreads from "./pages/MeusDreads"


function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Home />
			<MeusDreads />
			<SobreMim />
			<Footer />
		</React.Fragment>
	);
}

export default App;