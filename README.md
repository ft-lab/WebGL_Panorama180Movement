## WebGL Panorama180 Movement (Demo)

[Japanese readme](./README_jp.md)

# In the beginning

This project is the WebVR version of the following project created in Unity.    

https://github.com/ft-lab/Unity_Panorama180Movement


It is a project that can move a little space of panorama 180-3D on WebGL(WebVR).    
It has been tested with Oculus Rift/Oculus Quest.    
When using a 180 degree panorama-3D image such as the VR 180, the player can turn around the camera on the VR but can not move it.     
This is 3DoF operation.    
It is possible to move in a specific direction on the VR space using this panoramic image,    
perform calculations with as little load as possible, and enable limited 6DoF operation.     

![img_00](images/unity_panorama180Movement_movie.gif)     

## Development environment

three.js r104    

## Code description

JavaScript files of three.js are placed in "../threejs".    
The three.js file is not included in this GitHub repository.    
Please rewrite it according to the environment.    

    <script src="../threejs/build/three.min.js"></script>
    <script src="../threejs/vr/WebVR.js"></script>
    <script src="../threejs/loaders/GLTFLoader.js"></script>		

## How to use

Below is the URL of the execution sample.    
Access the browser using Oculus Rift or Oculus Quest.    
If you move to the left front with VR, you can move a linear distance of about 2m.    

https://ft-lab.jp/WebGL/WebGLTest/Panorama180Movement/panorama180_movement.html

## Algorithm explanation

The following describes the algorithm of this demo.     

https://ft-lab.jp/VRTest/algorithm_jp.html

## Points considered when migrating WebVR (three.js)

### Put textures on the GPU cache

It uses 24 4K textures.    
Oculus Quest does not seem to get on the GPU cache at the time of texture generation,    
and it is made to be on the GPU cache by forcing RenderTarget to perform off-screen drawing by preprocessing.    
When this process was not done, it was slightly delayed at the first move.    

### Hold Depth in hdr format and read

In the case of reading exr file It used hdr because it took time to create texture.    

## Used assets when creating resources

Panoramic images as resources are output using the following assets of Unity Asset Store.    

- Asia-Pacific Common Residential Theme Pack    
https://assetstore.unity.com/packages/templates/packs/asia-pacific-common-residential-theme-pack-135233

- Panorama180 Render
https://assetstore.unity.com/packages/tools/utilities/panorama180-render-141234

I used "Asia-Pacific Common Residential Theme Pack" as a rendering scene of panorama images.    
Generation of the 180-degree panoramic images was output using "Panorama180 Render"(ver.1.0.2).    

## Change log

### [06/02/2019]

- First release

