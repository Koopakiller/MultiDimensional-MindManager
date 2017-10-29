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

    }

    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.SphereGeometry;
    private material: THREE.MeshNormalMaterial;
    private mesh: THREE.Mesh;

    private mc: MouseControl;

    ngOnInit(): void {
        this.init();
    }

    private init() {

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 5;

        this.scene = new THREE.Scene();
        
        for (let point of this._dataService.data.dimensions) {
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

        this.mc = new MouseControl(this.canvas.nativeElement, this.scene, this.renderer, this.camera);
    }
}

export class MouseControl{
	public constructor(
		private _canvas: HTMLElement,
		private _scene: THREE.Scene,
		private _renderer: THREE.Renderer,
		private _camera: THREE.Camera){
		this._canvas.addEventListener('mousemove', (e)=>this.onMouseMove(e), false);
		this._canvas.addEventListener('mousedown', (e)=>this.onMouseDown(e), false);
		this._canvas.addEventListener('mouseup', (e)=>this.onMouseUp(e), false);
		this._canvas.addEventListener('wheel', (e)=>this.onScroll(e), false);
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
	private	mouseX = 0;
	private	mouseY = 0;
	
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