const fs=require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
// fs.writeFileSync("./data1.txt","./ABES promise");
// fs.appendFileSync("./data1.txt", "AKTU");
// fs.renameSync("./data.txt", "./data2.txt");
// fs.unlinkSync("./data2.txt");
if (data.match("H")){
    console.log("H is present");
    const changedata=data.replace("H", "ABES");
    fs.writeFileSync("./data1.txt", changedata);
}