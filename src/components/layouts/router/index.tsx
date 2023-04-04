import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../header'
import { PageLayout } from '../page'

type Props = {}

export function RouterLayout({ }: Props) {
	return (
		<div>
			<Header />
			<PageLayout>
				<Outlet />
			</PageLayout>
		</div>
	)
}
