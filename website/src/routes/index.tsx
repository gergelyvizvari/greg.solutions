import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from '../components/layouts/router'
import Home from '../pages/homepage'

type Props = {}

export function AppRoutes({ }: Props) {
	return (
		<Routes>
			<Route path="/" element={<RouterLayout />} >
				<Route path="/" element={<Home />} />
				<Route path="contact" element={<div>contact</div>} />
				<Route path="projects" element={<div>projects</div>} />
			</Route>
			<Route path="*" element={<div>404</div>} ></Route>
		</Routes>
	)
}
