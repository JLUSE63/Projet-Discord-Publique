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
    PUBADD: {
      name: "pubadd",
      alias: ["pa"],
      category: "projet",
      description: "Permet de mettre un salon pub",
      usage: "<channel>",
      cooldown: false,
      args: true,
    },
    PUBCREATE: {
      name: "pub",
      alias: ["p"],
      category: "projet",
      description: "Permet de pub sur tous les serveur du bot",
      usage: "<pub>",
      cooldown: false,
      args: true,
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
