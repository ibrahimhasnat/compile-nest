const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

const compileAndRunJavaScript = (code, input) => {

  return new Promise((resolve, reject) => {

    // Generate a unique identifier for the filename
    const uniqueIdentifier = uuid.v4()

    // Save the JavaScript code to a temporary file.
    const fileName = path.join(__dirname, `script_${uniqueIdentifier}`)
    fs.writeFile(fileName, code, (writeError) => {
      if (writeError) {
        reject(new Error(`Error writing file: ${writeError.message}`))
        return
      }
    })

    // Run the JavaScript code using Node.js
    const process = spawn('node', [fileName])

    let output = ''
    let error = ''

    process.stdout.on('data', (data) => {
      output += data.toString()
    })

    process.stderr.on('data', (data) => {
      error += data.toString()
    })

    process.on('close', (code) => {

      if (code == 0) {
        resolve({ output, error })
      } else {
        reject(new Error(`Process exited with code ${code}: ${error}`))
      }

      // Clean up: remove the remporary file.
      fs.unlink(fileName, (unlinkError) => {
        if (unlinkError) {
          console.log(`Error deleting file: ${unlinkError.message}`)
        }
      })

    })

    // Handle error during process creation
    process.on('error', (err) => {
      reject(new Error(`Error starting Node.js process: ${err.message}`))
    })    

    // Provide input to the process if needed.
    if (input) {
      process.stdin.write(input)
      process.stdin.end()
    }

  })

}

module.exports = { compileAndRunJavaScript }