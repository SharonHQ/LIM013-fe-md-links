<br />
<p align="center">
  <a href="https://github.com/SharonHQ/LIM013-fe-md-links/blob/master/README.md">
    <img src="src/img/terminal.svg" alt="Logo" width="80" height="80">
  </a>
  <h1 align="center">&#60SharonHQ&#62/md-links</h1>
</p>

## Table of Contents

* [About the Project](#about-the-project)
* [Flowchart](#flowchart)
* [Implementation Board ](#implementation-board)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contact](#contact)

## About The Project

![md-links](src/img/demo.png)

This module extracts all the links that are in a markdown file, it has two options: 

1. --validate: Check if there are valid or broken links
2. --stats: Shows a statistic of the total number of links and how many of them are unique.
3. --validate --stats: Adds to the statistics the total amount of broken links.

## Flowchart
![flow-chart](src/img/Diagram.svg)

## Implementation Board
![board](src/img/board.png)

## Getting Started

### Installation

1. Install NPM packages
```sh
npm i sharonhq
```

## Usage

We will use the *md-links* command to get the links of the path.
```sh
sharonhq md-links <path>
```
* ### **--validate**
```sh
sharonhq md-links <path> --validate
```
* ### **--stats**
```sh
sharonhq md-links <path> --stats
```
* ### **--validate --stats**
```sh
sharonhq md-links <path> --validate --stats
```

## Contact

[Sharon](https://github.com/SharonHQ)

Project Link: [https://github.com/SharonHQ/LIM013-fe-md-links](https://github.com/SharonHQ/LIM013-fe-md-linkse)
