import { ViewerConfiguration } from './../configuration';

export let extendedDefaultConfiguration: ViewerConfiguration = {
    version: "3.2.0-alpha4",
    extends: "default",

    lights: {
        "light1": {
            type: 0,
            shadowEnabled: true,
            target: { x: -0.07100000337231904, y: -0.7150000339606777, z: -1.0 },
            position: { x: -0.78, y: 1.298, z: 1.62 },
            diffuse: { r: 1.0, g: 1.0, b: 1.0 },
            intensity: 6,
            intensityMode: 0,
            radius: 0.135,
            spotAngle: 59.9967,
            shadowBufferSize: 512,
            shadowFieldOfView: 60.977,
            shadowFrustumSize: 2.0,
            shadowMinZ: 1.0,
            shadowMaxZ: 10.0
        },
        "light2": {
            type: 0,
            shadowEnabled: true,
            target: { x: 1.0, y: 0.53, z: 0.18 },
            position: { x: 1.49, y: 1.39, z: -1.33 },
            diffuse: { r: 0.867, g: 0.816, b: 0.788 },
            intensity: 4.887,
            intensityMode: 0,
            radius: 0.0,
            spotAngle: 34.285,
            shadowBufferSize: 512,
            shadowFieldOfView: 28,
            shadowFrustumSize: 2.0,
            shadowMinZ: 0.2,
            shadowMaxZ: 10.0
        },
        "light3": {
            type: 2,
            shadowEnabled: true,
            target: { x: 0, y: 1, z: 0 },
            position: { x: -4, y: -2, z: 2.23 },
            diffuse: { r: 0.718, g: 0.772, b: 0.749 },
            intensity: 7.052,
            intensityMode: 0,
            radius: 0.5,
            spotAngle: 42.85,
            shadowBufferSize: 512,
            shadowFieldOfView: 45,
            shadowFrustumSize: 2.0,
            shadowMinZ: 0.2,
            shadowMaxZ: 10.0
        }
    },
    scene: {
        imageProcessingConfiguration: {
            colorCurves: {
                shadowsHue: 43.359,
                shadowsDensity: 1,
                shadowsSaturation: -25,
                shadowsExposure: -3.0,
                midtonesHue: 93.65,
                midtonesDensity: -15.24,
                midtonesExposure: 7.37,
                midtonesSaturation: -15,
                highlightsHue: 37.2,
                highlightsDensity: -22.43,
                highlightsExposure: 45.0,
                highlightsSaturation: -15,

            }
        }
    },
    model: {
        rotationOffsetAxis: {
            x: 0,
            y: 1,
            z: 0
        },
        rotationOffsetAngle: 3.66519
    }
}