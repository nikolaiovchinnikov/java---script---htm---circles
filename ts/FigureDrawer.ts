class FigureDrawer {
    private _wid:number = 1024;
    private _heig:number  = 768;
    private _window!:HTMLElement | null;
    private _numberCircle:number;
    constructor(window:string, numberCircle:number){
        this._window = this.SetOrGetWindow(window, this._wid, this._heig);
        this._numberCircle = numberCircle;
    }
    public drawCircles = () => {
        this.getCircles();
    }
    private SetOrGetWindow = (window:string, wid:number, heig:number, create:boolean=false):HTMLElement|null => {
        let body:HTMLElement|null = null;
        if(create){
            body = document.createElement(window);
            body.style.position = "absolute";
        }else if (create === false){
            body = document.querySelector(window);
            if(body){
                body.style.position = "relative";
            }
        }
        if(body){
            body.style.width =`${wid}px`;
            body.style.height = `${heig}px`;
            return body;
        }else {
            alert("errror setWindow");
            return body;
        }
    }
    private getCircles = () => {
        for (let i = 1; i < this._numberCircle; i++) {
            const diametr:number = this.getRandom(50 ,200);
            const circles = this.SetOrGetWindow("div", diametr, diametr,true);
            if(circles){
                circles.style.borderRadius = "50%";
                circles.style.backgroundColor = this.getColor();
                circles.style.left = `${this.getRandom(0 ,this._wid - diametr)}px`;
                circles.style.top = `${this.getRandom(0 ,this._heig - diametr)}px`;
                this._window?.appendChild(circles);
            }
        }
    }
    private getColor = ():string => {
        return `rgb(${this.getRandom(0,256)},${this.getRandom(0,256)},${this.getRandom(0,256)})`;
    }
    private getRandom = (min:number, max:number):number => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
