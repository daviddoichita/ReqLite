# ReqLite
A VERY lightweight and user-friendly CLI to test HTTP/HTTPS APIs in a fast manner.

## Features:
1. Quick request management: CURL power with a user-friendly approach.
2. Save secrets locally: `.env`-like secret storing.
3. Import/export request collections.
4. Save and run request templates.

## Commands
```
─── reql
    ├── req
    │   ├── get
    │   ├── post
    │   ├── put
    │   ├── delete
    │   └── list
    ├── templ # TODO
    │   ├── save
    │   └── run
    ├── var # TODO 
    │   ├── get
    │   └── set
    ├── secret # TODO
    │   ├── get
    │   └── set
    ├── export
    └── import
```
- `req`: Send HTTP/HTTPS requests.
    - `get`: Send a GET request.
    - `post`: Send a POST request.
    - `put`: Send a PUT request.
    - `delete`: Send a DELETE request.
    - `list`: List all requests saved.
- `templ`: Manage request templates.
    - `save`: Save a request template.
    - `run`: Load and run a request template.
- `var`: Manage local variables.
    - `get`: Get a variable.
    - `set`: Set a variable.
- `secret`: Manage secrets:
> NOTE: Secrets are confidential information (passwords, auth tokens...) stored at `.reqlite/secret.json`, it is recommended to ignore that file in `.gitignore` and create a `.reqlite/secret-example.json` (just like `.env` and `.env-example`).
    - `get`: Get a secret.
    - `set`: Set a secret.
- `export`: Export all requests saved.
- `import`: Import requests from a JSON file.

For more information on a command, run `reql <command> --help`
