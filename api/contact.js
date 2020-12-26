module.exports = (req, res) => {
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
}
