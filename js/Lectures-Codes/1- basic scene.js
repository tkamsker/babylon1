/// <reference path="js/babylon.max.js" />
var canvas;
var engine;
var scene;
document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
     canvas = document.getElementById("renderCanvas");
     engine = new BABYLON.Engine(canvas, true);
     scene = createScene();

    engine.runRenderLoop(function () {
        scene.render();
    });

}

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(1, 0, 1);
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.attachControl(canvas, false);
    var light = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 5, 0));
    light.intensity = .5;
    light.diffuse = new BABYLON.Color3.Blue;
    return scene;
};

window.addEventListener("resize", function () {
    engine.resize();
});



