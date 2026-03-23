const Exceljs = require('exceljs');
async function exceltest() {
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile('C:/Users/Pranav/Downloads/exceldata.xlsx');
const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row ,rownumber) =>{
    row.eachCell((cell,colnumber) =>{
       // console.log(cell.value);
        console.log(colnumber.val);
    })
})}
exceltest();