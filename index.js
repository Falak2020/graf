
/* const { createCanvas,loadImage } = require('canvas');

const {CanvasRenderService} = require('chartjs-node-canvas'); */



const express = require('express');
const app = express();
const createChart = require('./modules/createChart');


const port = 3000;

const serverURI = 'http://localhost:'+port

app.listen(port,()=>console.log('Webseerver'+serverURI));
createChart.createImage()

app.get('/chart', async(req, res) => {

createChart.createImage()
    
})

/* app.get('/my-image.png',async(req,res) => {

    
    const canvas = createCanvas(1200,630) ;

    const ctx = canvas.getContext('2d');


   
    const bg_img = await loadImage('https://www.bing.com/th?id=AMMS_087fee78078f819bc176c462d9c86280&w=612&h=305&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1')
    
    const hRatio  = canvas.width / bg_img.width 
    const vRatio = canvas.height / bg_img.height
    const ratio = Math.max(hRatio,vRatio)

    const centerShift_x = (canvas.width - bg_img.width * ratio) / 2
    const centerShift_y = (canvas.height - bg_img.height * ratio) / 2

    ctx.drawImage( 
        bg_img ,
        0,
        0,
        bg_img.width,
        bg_img.height,
        centerShift_x,
        centerShift_y,
        bg_img.width * ratio,
        bg_img.height * ratio
        
        )

    //add semi transparent black

    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#000000aa';
    ctx.fill();
    canvas.createPNGStream().pipe(res);

    
})
 */


module.exports = app
