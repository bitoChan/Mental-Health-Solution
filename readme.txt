<html>
    <head>
        <title>Mental-Health-Solution</title>
        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        <script src=".\aframe-extras-master\dist\aframe-extras.min.js"></script>
    </head>

    <body>
        <a-scene>
        <a-assets>
            <a-asset-item
            id="Student"
            src="https://github.com/bitoChan/Mental-Health-Solution/blob/main/3D-Model/Student/Student.gltf"
            >
            </a-asset-item>
        </a-assets>

        <a-gltf-model
            position="0 0 0"
            scale="1 1 1"
            src="#Student"
            animation-mixer="clip: mixamo.com"
        ></a-gltf-model>
        </a-scene>
    </body>
</html>