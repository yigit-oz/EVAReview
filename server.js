const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // To serve HTML and assets

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Simulate a simple check
  if (email === 'admin@example.com' && password === 'test123') {
    res.redirect('/dashboard.html');
  } else {
    res.send('<h2>Login Failed</h2><p>Invalid email or password.</p><a href="login.html">← Try again</a>');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
