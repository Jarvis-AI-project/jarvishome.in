#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Build the React app
npm run build

# Serve the built React app using 'serve'
serve -s dist
