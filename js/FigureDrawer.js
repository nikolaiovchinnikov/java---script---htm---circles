"use strict";
class FigureDrawer {
    constructor(window, numberCircle) {
        this._wid = 1024;
        this._heig = 768;
        this.drawCircles = () => {
            this.getCircles();
        };
        this.SetOrGetWindow = (window, wid, heig, create = false) => {
            let body = null;
            if (create) {
                body = document.createElement(window);
                body.style.position = "absolute";
            }
            else if (create === false) {
                body = document.querySelector(window);
                if (body) {
                    body.style.position = "relative";
                }
            }
            if (body) {
                body.style.width = `${wid}px`;
                body.style.height = `${heig}px`;
                return body;
            }
            else {
                alert("errror setWindow");
                return body;
            }
        };
        this.getCircles = () => {
            var _a;
            for (let i = 1; i < this._numberCircle; i++) {
                const diametr = this.getRandom(50, 200);
                const circles = this.SetOrGetWindow("div", diametr, diametr, true);
                if (circles) {
                    circles.style.borderRadius = "50%";
                    circles.style.backgroundColor = this.getColor();
                    circles.style.left = `${this.getRandom(0, this._wid - diametr)}px`;
                    circles.style.top = `${this.getRandom(0, this._heig - diametr)}px`;
                    (_a = this._window) === null || _a === void 0 ? void 0 : _a.appendChild(circles);
                }
            }
        };
        this.getColor = () => {
            return `rgb(${this.getRandom(0, 256)},${this.getRandom(0, 256)},${this.getRandom(0, 256)})`;
        };
        this.getRandom = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        this._window = this.SetOrGetWindow(window, this._wid, this._heig);
        this._numberCircle = numberCircle;
    }
}
//# sourceMappingURL=FigureDrawer.js.map