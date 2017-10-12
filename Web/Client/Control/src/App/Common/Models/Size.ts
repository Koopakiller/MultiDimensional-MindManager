export class Size {
    constructor(
        public width: number,
        public height: number
    ) {
    }

    public toString(): string{
        return `width = ${this.width}, height = ${this.height}`;
    }
}