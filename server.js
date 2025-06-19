const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@example.com' && password === 'test123') {
    res.send('<h1>Login Successful</h1><p>Welcome back!</p>');
  } else {
    res.status(401).send('<h1>Login Failed</h1><p>Invalid credentials.</p>');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
