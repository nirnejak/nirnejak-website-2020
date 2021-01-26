module.exports = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        name: "Jitendra Nirnejak",
        phone: "7869290297",
        email: "hello@nirnejak.com",
        website: "https://nirnejak.com",
        social: {
          linkedin: "https://www.linkedin.com/in/nirnejak/",
          facebook: "https://www.facebook.com/nirnejak",
          instagram: "https://www.instagram.com/jitendra.nirnejak/",
          twitter: "https://twitter.com/jeetnirnejak",
        },
      })
      break
    case "POST":
      console.log(req.body)
      res.status(201).json(req.body)
      break
    default:
      res.status(400).json({
        error: {
          message: "Invalid Request Method",
        },
      })
  }
}
