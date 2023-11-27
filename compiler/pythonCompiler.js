const { spawn } = require('child_process')

const compileAndRunPython = (code, input) => {

  return new Promise((resolve, reject) => {

    const process = spawn('python', ['-c', code])

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
    })

    // Handle error during process creation
    process.on('error', (err) => {
      reject(new Error(`Error starting Python process: ${err.message}`))
    })

    // Provide input to the process if needed
    if (input) {
      process.stdin.write(input)
      process.stdin.end()
    }

  })

}

module.exports = { compileAndRunPython }