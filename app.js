const MyData = require ("./MyData")
const yargs = require("yargs")
const validator = require("validator")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        MyData.addPerson(x.fname , x.lname , x.city , x.age , x.id )
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        MyData.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        MyData.readData (x.id)
    }
 })

  yargs.command({
      command: "degree",
      describe: "to calculate total and average",
      builder: {
          id: {
              describe: "this is id description in degree command",
              demandOption: true,
              type: "string"
          },
          degArr: {
              describe: "this is id description in degree command",
              demandOption: true,
              type: "string"
          }

      },
      handler: (x) => {
         const ArrayConvert = x.degArr.split(",");
         MyData.calculateDegree(x.id, ArrayConvert)
          //console.log(validator.isNumeric(ArrayConvert[0]),ArrayConvert[0])
          //console.log(parseInt(ArrayConvert[0]) + parseInt(ArrayConvert[1]))
      }
  })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        MyData.listData()
    }
 })
 
yargs.parse() 
   
  



