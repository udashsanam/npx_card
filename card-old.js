#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

const newline = "\n";
const heading = `${chalk.white.bold("👋 Aashish Moktan")}`;
const working = `${chalk.white.bold("   Work:")}  ${chalk.cyan(
  "Software Engineer"
)}`;
const github = `${chalk.white.bold(" GitHub:")}  ${chalk.gray(
  "https://github.com/"
)}${chalk.green("aashish-moktan")}`;
const linkedin = `${chalk.white.bold("LinkedIn:")}  ${chalk.gray(
  "https://linkedin.com/in/"
)}${chalk.cyan("aashish-moktan-b65784171")}`;
const web = `${chalk.white.bold("    Web:")}  ${chalk.magenta(
  "https://aashishmoktan.com.np"
)}`;

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  github +
  newline +
  linkedin +
  newline +
  web;

console.log(
  boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
  })
);
