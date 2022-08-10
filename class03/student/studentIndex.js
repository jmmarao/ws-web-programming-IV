const router = require("express").Router();

router.get("/classrooms", (req, res) => {
    res.json({
        "id": "123"
    });
});

router.get("/subjects", (req, res) => {
    res.send("Students subjects....");
});

router.get("/:id", (req, res) => {
    res.send(`Student id: ${req.params.id}`);
});

module.exports = router;