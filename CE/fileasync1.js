const fs=require("fs/promises");
const read =async ()  => {
    const data = await fs.readFile("./data.txt","utf-8");
    console.log(data);
}
const write=async()=>{
    const newdata="This is my todays work";
    await fs.writeFile("./data3.txt",newdata,"utf-8");
    console.log("file written successfully");
}
write();
read();
console.log("first")
console.log("2nd")
console.log("3rd")
console.log("4th")

