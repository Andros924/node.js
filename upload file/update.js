const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');   

  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
});

const upload = multer({ storage: storage });

router.post('/planets/:id/image', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }
  
      const imagePath = req.file.path;
  
      await db.none('UPDATE planets SET image = $1 WHERE id = $2', [imagePath, req.params.id]);
      res.json({ message: 'Planet image updated', imagePath });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
