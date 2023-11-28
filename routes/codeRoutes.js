const express = require('express')
const router = express.Router()
const { compileAndRunPython } = require('../compiler/pythonCompiler')
const { compileAndRunJavaScript } = require('../compiler/javascriptCompiler')

// Endpoint for Python code execution
router.post('/python', async (req, res) => {

  const code = req.body.code
  const input = req.body.input

  try {
    const { output, error } = await compileAndRunPython(code, input)
    if (error) {
      res.status(500).json({ error: error.message})
    } else {
      res.json({ result: output.trim() })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

})

// Endpoint for JavaScript code execution
router.post('/js', async (req, res) => {

  const code = req.body.code
  const input = req.body.input

  try {
    const { output, error } = await compileAndRunJavaScript(code, input)
    if (error) {
      res.status(500).json({ error: error.message})
    } else {
      res.json({ result: output.trim() })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

})


module.exports = router