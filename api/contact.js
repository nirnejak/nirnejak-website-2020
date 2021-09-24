module.exports = (req, res) => {
  if (req.method === "POST") {
    console.log(req.body)
    res.status(201).json({ message: "Success" })
  } else {
    res.status(405).send("Invalid method")
  }
}
