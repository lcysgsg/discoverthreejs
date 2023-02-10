import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'

class Resizer {
    constructor(
        container: HTMLElement,
        camera: PerspectiveCamera,
        renderer: WebGLRenderer
    ) {
        const setSize = () => {
            camera.aspect = container.clientWidth / container.clientHeight
            camera.updateProjectionMatrix()

            renderer.setSize(container.clientWidth, container.clientHeight)
            renderer.setPixelRatio(window.devicePixelRatio)
        }

        // set initial size
        setSize()

        window.addEventListener('resize', () => {
            // set the size again if a resize occurs
            setSize()
            // perform any custom actions
            this.onResize()
        })
    }

    onResize() {}
}

export { Resizer }
