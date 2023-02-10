import { Clock } from 'three'
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const clock = new Clock()

class Loop {
    camera
    scene
    renderer
    updatables: OrbitControls[]

    constructor(
        camera: PerspectiveCamera,
        scene: Scene,
        renderer: WebGLRenderer
    ) {
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.updatables = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this.tick()

            // render a frame
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        // only call the getDelta function once per frame!
        const delta = clock.getDelta()

        // console.log(
        //   `The last frame rendered in ${delta * 1000} milliseconds`,
        // );

        for (const object of this.updatables) {
            object.tick(delta)
        }
    }
}

export { Loop }
