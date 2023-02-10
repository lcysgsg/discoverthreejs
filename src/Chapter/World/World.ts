import { createCamera } from './components/camera.js'
import { createLights } from './components/lights.js'
import { createCube } from './components/createCube.js'
import { createScene } from './components/scene.js'

import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'

let container: HTMLElement
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let scene: Scene
let loop: Loop

class World {
    constructor(dom: HTMLElement) {
        camera = createCamera()
        renderer = createRenderer()
        scene = createScene()
        loop = new Loop(camera, scene, renderer)
        container = dom
        container.append(renderer.domElement)

        const controls = createControls(camera, renderer.domElement)
        const cube = createCube()
        const { ambientLight, mainLight } = createLights()

        loop.updatables.push(controls)
        scene.add(ambientLight, mainLight, cube)
        // scene.add(ambientLight, cube)

        const resizer = new Resizer(container, camera, renderer)
    }

    render() {
        renderer.render(scene, camera)
    }

    dispose() {
        container.removeChild(renderer.domElement)
        renderer.dispose()
    }

    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }
}

export { World }
