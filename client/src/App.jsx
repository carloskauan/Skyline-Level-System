import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import Login from "./login";
import Register from "./register"
import ConfirmEmail from "./confirmEmail"

export default function App () {
    return (
    <>
		<main>
			<Routes>
				<Route path="/" element={<Index/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
				<Route path="/Register" element={<Register/>}></Route>
				<Route path="/ConfirmEmail" element={<ConfirmEmail/>}></Route>
			</Routes>
		</main>
    </>
    )
}