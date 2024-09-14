app.post("/planets/:id/image", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;

    const imageFilePath = `./uploads/${filename}`;

    await client.query("UPDATE planets SET image=$2 WHERE id=$1", [
      id,
      imageFilePath,
    ]);

    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});
