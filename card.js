#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import gradient from "gradient-string";

figlet("Aashish Moktan", (err, data) => {
  if (err) {
    console.error("Something went wrong with figlet.");
    return;
  }

  const header = gradient.pastel.multiline(data);

  const info = [
    "",
    `${chalk.white.bold("💼  Role:")}        ${chalk.cyan(
      "Software Engineer"
    )}`,
    `${chalk.white.bold("📍  Location:")}    ${chalk.yellow("Nepal")}`,
    `${chalk.white.bold("🛠️   Skills:")}      ${chalk.magenta(
      "Node.js, Express, React, Python"
    )}`,
    `${chalk.white.bold("🌐  Website:")}     ${chalk.blue(
      "https://aashishmoktan.com.np"
    )}`,
    `${chalk.white.bold("🐙  GitHub:")}      ${chalk.green(
      "https://github.com/aashish-moktan"
    )}`,
    `${chalk.white.bold("🔗  LinkedIn:")}    ${chalk.cyan(
      "https://www.linkedin.com/in/aashish-moktan-b65784171/"
    )}`,
    `${chalk.white.bold("📫  Email:")}       ${chalk.white(
      "aashiislama@gmail.com"
    )}`,
    "",
    `${chalk.gray.italic('"Building things that matter."')}`,
    "",
    chalk.dim("npx aashish-moktan"),
  ].join("\n");

  const box = boxen(info, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    align: "left",
  });

  console.log(header + "\n" + box);
});
