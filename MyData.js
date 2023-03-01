
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
     

module.exports = {
    addPerson,
    deleteData, 
    readData,
    listData
}