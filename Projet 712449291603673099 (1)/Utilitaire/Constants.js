const COMMANDS = {
  INFORMATIONS: {
    HELP: {
      name: "help",
      alias: ["h"],
      category: "Informations",
      description: "Donne des information sur les commandes du bot",
      pttdesc: "Donne cette page",
      usage: "<commande>",
      cooldown: 3,
      args: false,
    }
  },
  GENERAL: {
    ON: {
      name: "on",
      alias: false,
      category: "Commandes-Général",
      description: "Commande à faire quand le serveur est on",
      pttdesc: "Serveur on",
      usage: false,
      cooldown: 3,
      args: false,
    },
    REBOOT: {
      name: "reboot",
      alias: false,
      category: "Commandes-Général",
      description: "Commande à faire quand le serveur redémarre",
      pttdesc: "Redémarrage du serveur",
      usage: false,
      cooldown: 3,
      args: false,
    },
    OFF: {
      name: "off",
      alias: false,
      category: "Commandes-Général",
      description: "Commande à faire quand le serveur est off",
      pttdesc: "Serveur off",
      usage: false,
      cooldown: 3,
      args: false,
    },
    SUGGESTIONS: {
      name: "suggestion",
      alias: false,
      category: "Commandes-Général",
      description: "Commande pour faire des suggestion pour le serveur",
      pttdesc: "Suggérer le staff",
      usage: "<ta-suggestion>",
      cooldown: 3,
      args: true,
    },
    VIDECACHE: {
      name: "cache",
      alias: false,
      category: "Commandes-Général",
      description: "Commande qui permet de savoir comment vider le cache",
      pttdesc: "Vider le cache",
      usage: false,
      cooldown: 3,
      args: false,
    },
    VOTER: {
      name: "voter",
      alias: false,
      category: "Commandes-Général",
      description: "Commande pour avoir les liens des votes",
      pttdesc: "Liens des votes",
      usage: false,
      cooldown: 3,
      args: false,
    },
    DON: {
      name: "don",
      alias: false,
      category: "Commandes-Général",
      description: "Commande qui envoie l'email de donation en mp",
      pttdesc: "Email de donation",
      usage: false,
      cooldown: 3,
      args: false,
    },
    STEAMHEX: {
      name: "steamhex",
      alias: false,
      category: "Commandes-Général",
      description: "Commande qui permet de savoir comment avoir le steamhex",
      pttdesc: "Avoir le steamhex",
      usage: false,
      cooldown: 3,
      args: false,
    },
    JOBS: {
      name: "entreprise",
      alias: ("jobs"),
      category: "Commandes-Général",
      description: "Commande donnant la liste des jobs du serveur",
      pttdesc: "Liste des jobs",
      usage: false,
      cooldown: 3,
      args: false,
    }
  },
  DOUANIERS: {
    OUVERTURE:{
      name: "ouverture",
      alias: false,
      category: "Commandes-du-douanier",
      description: "Commande à mettre lors de l'ouverture de la douane",
      pttdesc: "Ouverture de la douane",
      usage: false,
      cooldown: 3,
      args: false,
    },
    FERMETURE: {
      name: "fermeture",
      alias: false,
      category: "Commandes-du-douanier",
      description: "Commande à mettre lors de la fermeture de la douane",
      pttdesc: "Fermeture de la douane",
      usage: false,
      cooldown: 3,
      args: false,
    },
    ANO: {
      name: "ano",
      alias: false,
      category: "Commandes-du-douanier",
      description: "Commande permettant d'envoyer un message anonymement",
      pttdesc: "Envoyer un message anonyme",
      usage: "<message>",
      cooldown: 3,
      args: true,
    },
    DOUANE: {
      name: "douane",
      alias: false,
      category: "Commandes-du-douanier",
      description: "Commande postant un message de rappel pour les douaniers",
      pttdesc: "Rappel des douaniers",
      usage: false,
      cooldown: 3,
      args: false,
    }
  },
  ADMINISTRATION: {
    NEWJOB: {
      name: "newjob",
      alias: ["njob"],
      category: "Admin",
      description: "Commande pour ajouter une entreprise dans la liste",
      pttdesc: "ajout d'entreprise",
      usage: "<entreprise>",
      cooldown: 3,
      args: true,
    }
  }
};

/*
name: "",
alias: [""],
category: "",
description: "",
pttdesc: "",
usage: false,
cooldown: 3,
args: false,
*/

exports.COMMANDS = COMMANDS;