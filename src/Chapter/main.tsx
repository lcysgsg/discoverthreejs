import React, { useCallback, useEffect, useRef } from 'react'
import { World } from './World/World'

export default function Main() {
    const world = useRef<World>()
    const containerRef = useCallback((node: HTMLElement | null) => {
        if (world.current) {
            world.current.dispose()
            world.current = undefined
        }

        if (node) {
            world.current = new World(node)
            // world.render()
            world.current.start()
        }
    }, [])

    return (
        <div
            // style={{ width: '500px', height: '500px' }}
            style={{ width: '100vw', height: '100vh' }}
            ref={containerRef}
        ></div>
    )
}
