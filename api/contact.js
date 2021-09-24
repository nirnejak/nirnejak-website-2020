module.exports = (req, res) => {
  if (req.method === "POST") {
    console.log(req.body)
    res.status(201).json({ message: "Success" })
  } else {
    res.status(405).json({ message: "Invalid method" })
  }
}
