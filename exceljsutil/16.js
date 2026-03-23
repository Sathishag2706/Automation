const Exceljs = require('exceljs');
async function exceltest() {
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile('C:/Users/Pranav/Downloads/exceldata.xlsx');
const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row,rownumber) =>{

    row.eachCell((cell,colnumber) =>{
      
       // console.log(cell.value);
        //console.log(colnumber.val);
        if (cell.value ==='Apple') {
            console.log(rownumber);
            console.log(colnumber);
        }  })
       // const cell = worksheet.getCell(3,2);
        //cell.value = 'India';
        //workbook.xlsx.writeFile('C:/Users/Pranav/Downloads/exceldata.xlsx');

  
})}
exceltest();