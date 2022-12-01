const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const { jsPDF } = require('jspdf');

const {de} = require('date-fns/locale');


const fns = require('date-fns')

const pdfGenerator = require('pdfkit')
const fs = require('fs');
const { DH_NOT_SUITABLE_GENERATOR } = require('constants');


const width = 1000;   // define width and height of canvas 
const height = 1000;   
const chartCallback = (ChartJS) => {
 console.log('chart built')
};
const canvasRenderService = new ChartJSNodeCanvas({width, height, chartCallback});

//const datapoints = Array.from(Array(100).keys())


const newlabels = fns.eachDayOfInterval({
  start: new Date(2019,00,01),
  end: new Date(2019,03,31)
})
console.log(newlabels)
// const datapoints = Array(newlabels.length).fill().map(() => Math.round(Math.random() * 500))

const createImage = async (req) => {
  
    let number = Math.random();
    const dataUrl = await canvasRenderService.renderToDataURL(req); // converts chart to image
    const image = await canvasRenderService.renderToBuffer(req);
    fs.writeFileSync('./images/tmp'+number+'.png',image)
    let pdf = new jsPDF();
    pdf.setFontSize(20)
    pdf.addImage(dataUrl,'JPEG',15,15,150,150)

   // pdf.save('chart'+number+'.pdf')

    /* theOutput.pipe(fs.createWriteStream('TestDocument.pdf'))
    theOutput.image('tmp.png', {
        fit: [300, 300],
        align: 'center',
        valign: 'center'
      });
    
    theOutput.end() */
   return req;
};


module.exports = {
createImage   //for exporting to another file
}