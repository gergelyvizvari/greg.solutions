import React from 'react'

type PageProps = {
	title?: string
}

export default function Page({ title }: PageProps) {
	return (
		<main className="container mx-auto mt-20 px-6 py-4 min-h-[400px] prose-lg ">
			{title && <h2 className="prose">{title}</h2>}
			<div className=''>
				adsasd
			</div>
		</main>
	)
}
