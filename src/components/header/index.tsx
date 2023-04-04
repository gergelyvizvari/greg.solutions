import React, { useCallback, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}



export function Header({ }: Props) {

	return (
		<div className='bg-base-100 drop-shadow-lg w-full h-28 z-20 relative'>
			<div className='container navbar mx-auto w-full relative h-full ' >
				<div className="flex-1 gap-2">
					<img className="w-20 drop-shadow-lg rounded-full" src="/images/1589370417789.jpeg" />
					<NavLink to="/" className="btn btn-ghost normal-case text-xl">Greg Solutions</NavLink>

					<div className='ml-auto'>
						<div className='flex gap-x-2 z-20'>
							<ul className="menu menu-horizontal px-1">
								<li className='hidden sm:block'><NavLink to='/contact'>Contact</NavLink></li>
								<li className='hidden sm:block'><NavLink to='/projects'>Projects</NavLink></li>
								<li className='block sm:hidden'>
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
										</svg>										
									</a>
									<ul className="p-2 bg-base-100 z-20 absolute right-0">
										<li><NavLink to='/contact'>Contact</NavLink></li>
										<li><NavLink to='/projects'>Projects</NavLink></li>
									</ul>
								</li>								
							</ul>

						</div>
					</div>
				</div>
			</div >
		</div >
	)
}
