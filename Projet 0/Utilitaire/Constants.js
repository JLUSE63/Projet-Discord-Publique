const COMMANDS = {
  INFORMATIONS: {
    HELP: {
      name: "help",
      alias: ["h"],
      category: "informations",
      description: "Donne des information sur les commandes du bot",
      usage: "<help>",
      cooldown: 3,
      args: false,
    },
  },
  PROJET: {
    COMMANDE: {
      name: "",
      alias: [""],
      category: "",
      description: "",
      usage: false,
      cooldown: 3,
      args: false,
    }
  }
};

/*
name: "",
alias: [""],
category: "",
description: "",
usage: false,
cooldown: 3,
args: false,
*/

exports.COMMANDS = COMMANDS;
