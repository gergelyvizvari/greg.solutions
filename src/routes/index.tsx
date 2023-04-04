import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from '../components/layouts/router'
import Home from '../pages/homepage'
import GameOfLifePage from '../pages/projects/game-of-life'
import { PageLayout } from '../components/layouts/page'
import Projects from '../pages/projects'

type Props = {}

export function AppRoutes({ }: Props) {
	return (
		<Routes>
			<Route path="/" element={<RouterLayout />} >
				<Route path="/" element={<Home />} />
				<Route path="contact" element={<div>contact</div>} />
				<Route path="projects" element={<Projects />} />
				<Route path="projects/game-of-life" element={<GameOfLifePage />}/>
			</Route>
			<Route path="*" element={<div>404</div>} ></Route>
		</Routes>
	)
}
