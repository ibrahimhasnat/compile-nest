# Compile Nest

Compile Nest is a simple Online Code Compiler and Runner built using Express.js. It currently supports Python and JavaScript languages, allowing users to submit code snippets for execution.

## Features

- **Python Compiler:** Execute Python code snippets.
- **JavaScript Compiler:** Run JavaScript code snippets.

## Getting Started

1. **Install Dependencies:**
   
    ```bash
    npm install
    ```

2. **Run the Server:**
    ```bash
    npm start
    ```
3. **API Endpoints:**
   - Python Compiler: `POST /code/python`
   - JavaScript Compiler: `POST /code/js`

**Note:** Ensure that Node.js and Python are installed on your system.

## Usage
- To execute a code snippet, send a POST request to the respective compiler endpoint.
  - Python Compiler:
    - Endpoint: `POST /code/python`
    - Request Body:
  
      ```json
      {
        "code": "print('Hello, World!')",
        "input": null
      }
      ```
    - Response:
      ```json
        {
          "result": "Hello, World!"
        }
      ```
  - JavaScript Compiler:
    - Endpoint: `POST /code/js`
    - Request Body:

      ```json
      {
        "code": "console.log('Hello, World!')",
        "input": null
      }

      ```
    - Response:
      ```json
      {
        "result": "Hello, World!"
      }
      ```
- For multiline code, consider the following example:
  
  ```json
  {
    "code": "def add_numbers(a, b):\n    print(a + b)\n\nadd_numbers(2, 2)",
    "input": null
  }
  ```

## Additional Notes
- Customize the code submission format based on the language and features you are using.
- If your code includes user input, make sure to provide it in the `input` field of the request body.
- For multiline code, use appropriate line breaks to ensure accurate execution.

Feel free to explore and experiment with different code structures!

**Important Note:** Exercise caution when executing user-provided code. Implement proper security measures to prevent potential risks. Enhance security measures and error handling as required.