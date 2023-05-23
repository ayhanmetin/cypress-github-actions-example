# Cypress Github Actions Example

## Overview

This repository demonstrates the integration of [Cypress](https://www.cypress.io/), a powerful front-end testing tool, with [GitHub Actions](https://github.com/features/actions) for continuous integration and deployment (CI/CD). 

Cypress allows for writing tests that interact with a web application in the same way a user would, and GitHub Actions provides a platform for automating these tests every time code is pushed to the repository.

## Cypress Test Suite

This repository includes a Cypress test suite that interacts with a todo list web application, much like a real user would. 

## GitHub Actions Workflow

The main workflow file, `ci.yml`, orchestrates the execution of Cypress tests on every push event. The workflow runs on an Ubuntu 22.04 environment.

Below is a step-by-step explanation of the workflow:

### Checkout

The workflow checks out your repository using `actions/checkout@v3`.

### Cypress Run

This step installs the necessary npm dependencies, correctly caches them, and runs all Cypress tests using `cypress-io/github-action@v5`.

### Upload Artifacts

If the Cypress run fails, the workflow uploads the screenshots taken during the test run for debugging purposes using `actions/upload-artifact@v3`. The artifact is named `cypress-screenshots` and is stored at the `cypress/screenshots` path.

### Upload Videos

Regardless of the test run's outcome, the workflow uploads the test run video for further examination, if necessary. The artifact is named `cypress-videos` and is stored at the `cypress/videos` path.







