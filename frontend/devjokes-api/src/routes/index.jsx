import {BrowserRouter, Route, Routes} from "react-router-dom";



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="*" element={<h1>nope.. 404</h1>}/>
                <Route path="/" element={<h1>Welcome Home</h1>}/>
			</Routes>
		</BrowserRouter>
	);
}