import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";


@Component({
    selector: "app",
    templateUrl: "App.html",
    styleUrls: [
        "App.less"
    ]
})
export class AppComponent implements OnInit {

    public constructor(
        private canvas: ElementRef
    ) {

    }

    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.SphereGeometry;
    private material: THREE.MeshNormalMaterial;
    private mesh: THREE.Mesh;

    ngOnInit(): void {
        this.init();
    }

    private init() {

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 5;

        this.scene = new THREE.Scene();

        for (let point of this.data.dimensions) {
            let geometry = new THREE.SphereGeometry(0.3, 32, 32)
            let material = new THREE.MeshLambertMaterial({ color: point.color });
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = point.point[0];
            mesh.position.y = point.point[1];
            mesh.position.z = point.point[2];
            this.scene.add(mesh);
        }

        var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        this.scene.add(light);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.canvas.nativeElement.appendChild(this.renderer.domElement);

        this.renderer.render(this.scene, this.camera);

        //this.mc = new MouseControl(document.getElementById("canvas"), this.scene, this.renderer, this.camera);
    }


    private data = {
        "dimensions": [
            {
                "name": "A",
                "description": "Rationales Ich",
                "point": [0, -1, 0],
                "color": 0xffff00
            },
            {
                "name": "B",
                "description": "Emotionales Ich",
                "point": [0, 0, 0],
                "color": 0xff00ff
            },
            {
                "name": "C",
                "description": "Körperliches Ich",
                "point": [0, 0, 1],
                "color": 0x00ff00
            }
        ],
        "drugs": [
            {
                "name": "Ecstasy",
                "polygons": [
                    ["A", "", ""],
                    ["", "B", ""]
                ]
            }
        ]
    };
}
