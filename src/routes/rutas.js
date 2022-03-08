
const { Router } = require("express")
const router = Router()

const prueba = require("./data.json")
console.log(prueba)

//Rutas
router.get("/", (req, res) => {
    res.json(prueba)
})

router.get("/:var7", (req, res) => {
    const { var7 } = req.params
    console.log(prueba[1].var8)
    console.log(var7)
    res.send("todo bien pana")
})

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

module.exports = router;