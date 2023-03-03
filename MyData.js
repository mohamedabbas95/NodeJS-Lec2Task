
  const fs = require("fs")  //File System Library

  ///////////////Adding Person To JSon File ////////////////////////
  const addPerson = (fname , lname , city , age , id) => {
       const allData = loadData()  

       // Check if there is An duplicated data By Id
        const duplicatedData = allData.filter ((obj) => { 
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname,
            city : city,
            age : age
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
  }

  /////////////////////////////////////////////////////////////////
  const loadData = () => {
    try {
        const dataJson = fs.readFileSync ("MyData.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }
///////////////////////////////////////////////////////////////////

  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData) 
      fs.writeFileSync("MyData.json" , saveAllDataJson)
  }
/////////////////////////////////////////////////////////////////////

 const deleteData = (id) => {
        const allData = loadData();

        const dataToKeep = allData.filter ((obj) => {
             return obj.id !== id 
        })
        saveAllData(dataToKeep)
 }

//////////////////////////////////////////////////////////////////
      
        const readData = (id) => {
            const allData = loadData()

            const itemNeeded = allData.find((obj) => {
                 return obj.id == id 
            })
            console.log(itemNeeded)

        }
//////////////////////////////////////////////////////////////////

    const listData = () => {
        const allData = loadData()

        allData.forEach ((obj) => {
            console.log(obj.fname,obj.lname , obj.age,obj.city)
        })
    }
////////////////////////////////////////////////////////////////////
 const calculateDegree = (id,degrees) =>{
    const allData = loadData();
    let total = 0;
    let avg = 0;
    let flag =true;
    // get the Desired Student TO calculate his Degree  
    const student = allData.find((obj) => {
        return obj.id == id
    })
    //check if Id exsist
    if (student){
            degrees.forEach((n)=>{
                if (n >= 0 && n <= 100) {
                  total += parseInt(n);
                }else{
                    flag = false;
                }
                
            })
            if(flag){
                avg = total / degrees.length;
                avg = avg.toFixed(2);
                student.total = total;
                student.avg = avg;
                console.log(student.fname, student.lname, student.age, student.city, "Total Degree Is :", total, "And Average Is :", avg);
                saveAllData(allData);
                
            }else{
                console.log("You should Enter Correct degree In Range from 0 To 100");
            }
            
    }else{
        console.log("You Have Entered An Id that Dose Not Exsist");
    }
 }


//////////////////////////////////////////////////////////////////////

module.exports = {
    addPerson,
    deleteData, 
    readData,
    listData,
    calculateDegree
}