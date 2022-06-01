const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const { jsPDF } = require('jspdf');
const pdfGenerator = require('pdfkit')
const fs = require('fs');

const width = 1000;   // define width and height of canvas 
const height = 1000;   
const chartCallback = (ChartJS) => {
 console.log('chart built')
};
const canvasRenderService = new ChartJSNodeCanvas({width, height, chartCallback});



const createImage = async () => {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','ttt'],
        datasets: [{
          label: 'Weekly Sales',
          data: [10, 12, 6, 9, 12, 30, 9,9],
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(255, 159, 64, 1)',
             
          ],
          borderWidth: 1
        }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
   let theOutput = new pdfGenerator()
   const dataUrl = await canvasRenderService.renderToDataURL(config); // converts chart to image
    //console.log(dataUrl)
    const image = await canvasRenderService.renderToBuffer(config);
    fs.writeFileSync('./tmp.png',image)
    let pdf = new jsPDF();
    pdf.setFontSize(20)
    pdf.addImage(dataUrl,'JPEG',15,15,150,150)

    pdf.save('chart.pdf')

    theOutput.pipe(fs.createWriteStream('TestDocument.pdf'))
    theOutput.image('tmp.png', {
        fit: [300, 300],
        align: 'center',
        valign: 'center'
      });
    
    theOutput.end()
   return dataUrl;
};

module.exports = {
createImage   //for exporting to another file
}