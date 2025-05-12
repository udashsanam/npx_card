#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import gradient from "gradient-string";

figlet("Sanam Udash", (err, data) => {
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
    `${chalk.white.bold("🛠️ Skills:")}      ${chalk.magenta(
      "JAVA, Angular, Microservice, Spring boot, Docker, Jenkins, Git"
    )}`,
    `${chalk.white.bold("🌐  Website:")}     ${chalk.blue(
      "http://www.sanamudash.com.np"
    )}`,
    `${chalk.white.bold("🐙  GitHub:")}      ${chalk.green(
      "https://github.com/udashsanam"
    )}`,
    `${chalk.white.bold("🔗  LinkedIn:")}    ${chalk.cyan(
      "https://www.linkedin.com/in/sanamudash"
    )}`,
    `${chalk.white.bold("📫  Email:")}       ${chalk.white(
      "udashsanam@gmail.com"
    )}`,
    "",
    `${chalk.gray.italic('"Building things that matter."')}`,
    "",
    chalk.dim("npx sanam"),
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
