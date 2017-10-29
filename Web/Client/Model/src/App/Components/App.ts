import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { DataService } from "../Services/DataService";


@Component({
    selector: "app",
    templateUrl: "App.html",
    styleUrls: [
        "App.less"
    ]
})
export class AppComponent implements OnInit {

    public constructor(
        private canvas: ElementRef,
        private _dataService: DataService
    ) {
        this._dataService.displayModelChanged.subscribe(() => {
            this.init();
        });
    }

    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private light: THREE.HemisphereLight;

    private mc: MouseControl;

    ngOnInit(): void {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 5;
        this.light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.canvas.nativeElement.appendChild(this.renderer.domElement);

        this.mc = new MouseControl(this.canvas.nativeElement, this.scene, this.renderer, this.camera);

        this.init();
    }

    private init() {

        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }

        this.scene.add(this.light);

        let geometry: THREE.Geometry;
        let material: THREE.Material;
        let mesh: THREE.Mesh;

        let zero = new THREE.Vector3(0, 0, 0);

        // draw the zero-sphere
        this.scene.add(this.createSphere(zero, 0.02, 0xffffff));

        // draw the speres for each enabled dimension
        let dimPoints: THREE.Vector3[] = [];
        let dims = this._dataService.getEnabledDimensions();
        for (let index = 0; index < dims.length; ++index) {
            let sphere = this.createSphere(new THREE.Vector3(index == 0 ? 1 : 0, index == 1 ? 1 : 0, index == 2 ? 1 : 0), 0.1, dims[index].color);
            dimPoints.push(sphere.position);
            this.scene.add(sphere);
        }

        // draw lines between dimension spheres
        for (let p of dimPoints) {
            let material2 = new THREE.LineBasicMaterial({ color: 0xffffff });
            geometry = new THREE.Geometry();
            geometry.vertices.push(zero);
            geometry.vertices.push(p);
            var line = new THREE.Line(geometry, material2);
            this.scene.add(line);
        }

        this.renderer.render(this.scene, this.camera);
    }

    private distance(p1: THREE.Vector3, p2: THREE.Vector3) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
    }

    private createSphere(pos: THREE.Vector3, radius: number, color: number) {
        let geometry = new THREE.SphereGeometry(radius, 32, 32)
        let material = new THREE.MeshLambertMaterial({ color: color });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = pos.x
        mesh.position.y = pos.y;
        mesh.position.z = pos.z;

        return mesh;
    }
}

export class MouseControl {
    public constructor(
        private _canvas: HTMLElement,
        private _scene: THREE.Scene,
        private _renderer: THREE.Renderer,
        private _camera: THREE.Camera) {
        this._canvas.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
        this._canvas.addEventListener('mousedown', (e) => this.onMouseDown(e), false);
        this._canvas.addEventListener('mouseup', (e) => this.onMouseUp(e), false);
        this._canvas.addEventListener('wheel', (e) => this.onScroll(e), false);
    }

    private onMouseDown(evt: any) {
        evt.preventDefault();

        this.mouseDown = true;
        this.mouseX = evt.clientX;
        this.mouseY = evt.clientY;
    }

    private onMouseUp(evt: any) {
        evt.preventDefault();

        this.mouseDown = false;
    }

    private onScroll(evt: any) {
        evt.preventDefault();

        let z = this._camera.position.z + evt.deltaY / 100;
        if (z < 0.5) { z = 0.5; }
        if (z > 10) { z = 10 };
        this._camera.position.z = z;
        this._renderer.render(this._scene, this._camera);
    }

    private rotateScene(deltaX: number, deltaY: number) {
        this._scene.rotation.y += deltaX / 100;
        this._scene.rotation.x += deltaY / 100;
        this._renderer.render(this._scene, this._camera);
    }

    private mouseDown = false;
    private mouseX = 0;
    private mouseY = 0;

    private onMouseMove(evt: any) {
        if (!this.mouseDown) {
            return;
        }

        evt.preventDefault();

        var deltaX: number = evt.clientX - this.mouseX,
            deltaY: number = evt.clientY - this.mouseY;
        this.mouseX = evt.clientX;
        this.mouseY = evt.clientY;
        this.rotateScene(deltaX, deltaY);
    }
}