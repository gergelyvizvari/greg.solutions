import React from 'react'

type Props = {}

export default function Header({ }: Props) {
	return (
		<div className=' bg-base-100 shadow-lg fixed top-0 w-full'>
			<div className='container navbar mx-auto w-full'>
				<div className="flex-none  md:hidden">
					<button className="btn btn-square btn-ghost">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					</button>
				</div>
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">Greg Solutions</a>
				</div>
				<div className="flex-none ">
					<ul className="menu menu-horizontal px-1">
						<li><a>Item 1</a></li>
						<li tabIndex={0}>
							<a>
								About
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</a>
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
