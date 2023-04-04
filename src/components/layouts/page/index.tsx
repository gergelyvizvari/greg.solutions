import React from 'react'
import { Link, useLocation } from 'react-router-dom';

type PageProps = {
	title?: string
	children?: React.ReactNode
}

const generateRoute = (locationArray: string[], locationIndex: number) => {
	let result = '';
	locationArray.forEach((location, index)=>{
		if (index<=locationIndex) result+='/' + location;
	});
	return result;
}

export function PageLayout({ title, children }: PageProps) {
	const classNames = "btn btn-sm";
	const location = useLocation();
	const locationArray = location.pathname.split('/').filter(route => route != '');

	return (
		<main className="container mx-auto px-4 pb-4 min-h-[400px] prose-lg ">
			{title && <h2 className="prose mt-0">{title}</h2>}			
			<div className="text-sm breadcrumbs -ml-5">
				<ul>
					<li><Link to={''}>home</Link></li>
					{
						locationArray.map((location: string, index: number) => {
							return <li key={location}><Link to={generateRoute(locationArray,index)}>{location}</Link></li>
						})
					}
				</ul>
			</div>
			<div className=''>
				{children}
			</div>
		</main>
	)
}
