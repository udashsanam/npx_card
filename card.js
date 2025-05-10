#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

const data = {
  name: chalk.white.bold("Aashish Moktan"),
  work: chalk.cyan("Software Engineer"),
  github: chalk.gray("https://github.com/") + chalk.green("aashish-moktan"),
  twitter: chalk.gray("https://twitter.com/") + chalk.blue("aashishmoktan9"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.cyan("aashish-moktan-b65784171"),
  web: chalk.magenta("https://yourwebsite.com"),
  labelWork: chalk.white.bold("      Work:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
};

const output = `
    ${data.name}
    ${data.labelWork} ${data.work}
    ${data.labelGitHub} ${data.github}
    ${data.labelLinkedIn} ${data.linkedin}
    ${data.labelWeb} ${data.web}
`;

const boxed = boxen(output, {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
});

console.log(boxed);
