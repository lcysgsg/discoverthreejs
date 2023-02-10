import {
    BoxGeometry,
    CapsuleGeometry,
    Color,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader,
} from 'three'
import ImgUvTestBw from '@/assets/textures/uv-test-bw.png'
import ImgUvTestCol from '@/assets/textures/uv-test-col.png'
import ImgHarshbricksAlbedo from '@/assets/textures/harshbricks-albedo.png'

declare module 'three' {
    interface Mesh {
        tick: (delta: number) => void
    }
}

function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader()

    // load a texture
    const texture = textureLoader.load(ImgUvTestBw)
    const texture2 = textureLoader.load(ImgUvTestCol)
    const texture3 = textureLoader.load(ImgHarshbricksAlbedo)

    // create a "standard" material
    // const material = new MeshStandardMaterial({ color: 'purple' })

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new MeshStandardMaterial({
        map: texture2,
        aoMap: texture,
    })

    // material.color = new Color(0xffcc66)

    return material
}

function createCube() {
    // const geometry = new BoxGeometry(2, 2, 2)
    const geometry = new CapsuleGeometry(1, 1, 4, 8)
    // const material = new MeshStandardMaterial({ color: 'purple' })
    const material = createMaterial()
    const cube = new Mesh(geometry, material)

    cube.rotation.set(-0.5, -0.1, 0.8)

    const radiansPerSecond = MathUtils.degToRad(30)

    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta
        cube.rotation.x += radiansPerSecond * delta
        cube.rotation.y += radiansPerSecond * delta
    }

    return cube
}

export { createCube }
