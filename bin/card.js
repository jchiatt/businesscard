#!/usr/bin/env node

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  margin: 1,
  padding: 3,
  backgroundColor: '#ffffff',
  borderColor: '#ffffff',
  borderStyle: 'doubleSingle',
};

// Text + chalk definitions
const data = {
  name: chalk.blue('J.C. Hiatt /'),
  handle: chalk.blue('jchiatt'),
  work: chalk.blue('Full Stack Developer'),
  twitter: chalk.blue('https://twitter.com/jchiatt'),
  github: chalk.blue('https://github.com/jchiatt'),
  linkedin: chalk.blue('https://linkedin.com/in/jchiatt'),
  web: chalk.blue('https://jchiatt.com'),
  npx: chalk.blue('npx jchiatt'),
  labelWork: chalk.red.bold('      Work:'),
  labelTwitter: chalk.red.bold('   Twitter:'),
  labelGitHub: chalk.red.bold('    GitHub:'),
  labelLinkedIn: chalk.red.bold('  LinkedIn:'),
  labelWeb: chalk.red.bold('       Web:'),
  labelCard: chalk.red.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const murica = '🇺🇸';
const heading = `${data.name} ${data.handle} ${murica}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(boxen(output, options));
