import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export function Header({ }: Props) {
	return (
		<div className='bg-base-100 shadow-lg fixed top-0 w-full'>
			<div className='container navbar mx-auto w-full'>
				<div className="flex-1">
					<NavLink to="/" className="btn btn-ghost normal-case text-xl">Greg Solutions</NavLink>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal menu-compact gap-2 p-1">
						<li>
							<NavLink to="contact">
								Contact
							</NavLink>
						</li>
						<li tabIndex={0}>
							<NavLink to="projects">
								Projects
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</NavLink>
							<ul className="bg-base-100 rounded-box shadow-lg ">
								<li><a>Speller</a></li>
								<li><a>Game of life</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
