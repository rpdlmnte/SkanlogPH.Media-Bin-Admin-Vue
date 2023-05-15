# Skanlog Vue Shell

## Introduction

This Vue SPA shell is created to speed up initial creation process of an Vue SPA App.
This contains all the basic setup and also needed configurations to make sure the app is ready on the get go.

## Initial Project Setup

1. Clone this repository
2. Copy contents of this repository **EXCEPT** for the following:
   - _.git_ folder
   - _node_modules_ folder
3. Update '_package.json_' to **Project Name**
4. Update '_index.html_' title to **Project Name**
5. Install dependencies using **Yarn**
6. Setup **OIDC** configuration on _.env.development_ file.
7. Setup **API Endpoint** on _.env.development_ file.

## Vue Pre Requisites

- NodeJS v16
- Visual Studio Code
- Yarn
- Git bash (or terminal of your choice)
- Google Chrome (Latest)

## Visual Studio Code Extensions (Required)

- ESLint
- Prettier
- Volar

## Development Guide

1. Locate root of Project
2. Install all dependencies and node_modules using Yarn
3. Run app using _yarn dev_ command on terminal
4. Open app in **localhost:8080**

## Deployment Guide

- Copy _dist_ folder to designated server.

### - Testing SG

- Build project using **yarn testing** command.

### - Testing DK

- Build project using **yarn staging** command.
