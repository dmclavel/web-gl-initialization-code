class Main {
    constructor() {
        this.canvas = document.querySelector('#glCanvas');
        //Initialize the GL context
        this.gl = this.canvas.getContext('webgl');

        if (this.gl == null) 
            alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        else {
            //Set clear color to black, fully opaque
            this.gl.clearColor(0,0,0,1);
            //Clear the color buffer with specified clear color
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        }
    }

    //GL Getter
    getGlInstance = function () {
        return this.gl;
    }

    /************** Functions for creating and linking the shaders **************/
    createShader = function (gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

        if (success)
            return shader;

        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }

    createProgram = function (gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        const success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success)
            return program;

        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
    /***************************************************************************/
}