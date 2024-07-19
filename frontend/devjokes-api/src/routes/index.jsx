import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home.jsx";
import FourOhFour from "./404.jsx";



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="*" element={<FourOhFour/>}/>
                <Route path="/" element={<Home/>}/>
			</Routes>
		</BrowserRouter>
	);
}