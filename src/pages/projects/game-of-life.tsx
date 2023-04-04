import React, { Suspense } from 'react';

const GameOfLife = React.lazy(() => import('remote_app/GameOfLife'));

export default function GameOfLifePage() {
    return (
        <Suspense fallback="...loading">
            <div className='w-[80vw] max-w-[90vh] mx-auto'><GameOfLife /></div>
        </Suspense>
    )
}
