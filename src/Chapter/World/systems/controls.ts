import { PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

declare module 'three/examples/jsm/controls/OrbitControls' {
    interface OrbitControls {
        tick: (delta: number) => void
    }
}

function createControls(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
    const controls = new OrbitControls(camera, canvas)

    controls.enableDamping = true

    controls.tick = () => controls.update()

    return controls
}

export { createControls }
