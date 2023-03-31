import React from 'react'

type PageProps = {
	title?: string
	children?: React.ReactNode
}

export function PageLayout({ title, children }: PageProps) {

	return (
		<main className="container mx-auto mt-20 px-6 py-4 min-h-[400px] prose-lg ">
			{title && <h2 className="prose">{title}</h2>}
			<div className=''>
				{children}
			</div>
		</main>
	)
}
