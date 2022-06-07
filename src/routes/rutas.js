import SmiteApi from './smiteapi_index.js'
import Router from "express"
const router = Router()
//import data from "./data.json" assert {type: "json"};
//var arr = new Array();




////////////////////////////////////Rutas
////////////////////////GET
//function get(input) {
//    router.get("/get" + input + "/:herramienta", (req, res) => {
//        data.forEach((value, index) => {
//            var { herramienta } = req.params
//            var field = input.charAt(0).toUpperCase() + input.slice(1)
//            if ((herramienta.length > 0) && (herramienta.toLowerCase() == data[index]["Herramienta"].toLowerCase())) {
//                var obj = { [field]: data[index][field] };
//                var myJSON = JSON.stringify(obj);
//                res.send(myJSON)
//            } else if ((index == data.length - 1) && (!(herramienta.length > 0))) {
//                res.send("No se encontro la herramienta seleccionada")
//            }
//        })
//    })
//}


//todo
const CallSmiteApi = new SmiteApi();
console.log(await CallSmiteApi.getGods())

const ApiRoutes = () => {
    return (
        router.get("/todo", (req, res) => {
            res.send(CallSmiteApi.ping())
        })
    );
}



export default ApiRoutes;
 


//gettodo
//router.get("/gettodo", (req, res) => {
//    res.send(data)
//})
////herramientas
//router.get("/getherramientas", (req, res) => {
//    data.forEach((value, index) => {
//        arr.push(data[index]["Herramienta"])
//    })
//    var myJSON = "".concat("{", '"Herramientas": ', JSON.stringify(arr), "}")
//    res.send(myJSON)
//})
////descripcion
//get("descripcion")
////utilidad
//get("utilidad")
////tipo
//get("tipo")
////complejidad
//get("complejidad")
////costo
//get("costo")
////materias
//get("materias")


//export default router;


////////////////////////POST
/*
router.post('/', (req, res) => {
    const { var7, var8, var9 } = req.body
    if (var7 && var8 && var9) {
        const id = prueba.length + 1
        const newVar = { ...req.body, id }
        prueba.push(newVar)
        res.send(prueba)
    } else {
        res.status(500).json({error:"No data"})
    }
})
*/