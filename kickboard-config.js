const kickboardConfig = {
  'groups': {
    'Divers': [
      /************************************************************************/
      /* Utiles en toute circonstance                                         */
      /************************************************************************/
      {
        'name': 'Utiles en toute circonstance',
        'msgs': [
          {
            'name': 'Foster !',
            'parts': [
              { 'rnd': ' kickba2Foster ', 'min': 1, 'max': 10 }
            ]
          },

          {
            'name': 'Cœurs, cœurs',
            'parts': [
              {
                'rnd': ['TwitchUnity ', 'BisexualPride ', 'VirtualHug', '<3 '],
                'min': 1,
                'max': 10
              },
            ]
          },

          {
            'name': 'Solo',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Solo ', 'min': 3, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Wohoh ', 'min': 2, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Petits applaudissements',
            'parts': [
              { 'rnd': '👏 ', 'min': 1, 'max': 5 }
            ]
          },

          {
            'name': 'Gros applaudissements',
            'parts': [
              { 'rnd': '👏 ', 'min': 5, 'max': 15 }
            ]
          },
        ]
      },
    ],

    'A': [
      /************************************************************************/
      /* Autonomie                                                            */
      /************************************************************************/
      {
        'name': 'Autonomie',
        'msgs': [
          {
            'name': 'Quelques briquets',
            'parts': [
              {
                'rnd': [' GlitchLit ', ' CurseLit ', ' TwitchLit'],
                'min': 1,
                'max': 5
              }
            ]
          },

          {
            'name': 'Beaucoup de briquets',
            'parts': [
              {
                'rnd': [' GlitchLit ', ' CurseLit ', ' TwitchLit'],
                'min': 5,
                'max': 10
              }
            ]
          },

          {
            'name': 'Moins de 5%',
            'parts': [ { 'str': '⚠ █▒▒▒▒▒▒▒▒▒▒▒ < 5%' } ]
          },

          {
            'name': 'Moins de 4%',
            'parts': [ { 'str': '⚠ █▒▒▒▒▒▒▒▒▒▒▒ < 4%' } ]
          },

          {
            'name': 'Moins de 3%',
            'parts': [ { 'str': '⚠ █▒▒▒▒▒▒▒▒▒▒▒ < 3%' } ]
          },

          {
            'name': 'Et tu me manques déjà',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Et tu me manques d' },
              { 'rnd': 'é', 'min': 1, 'max': 10 },
              { 'str': 'jà ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Comment vivre sans toi',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Comment vi' },
              { 'rnd': 'i', 'min': 1, 'max': 10 },
              { 'str': 'vre sans toi ? ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },
        ]
      },
    ],

    'B': [
      /************************************************************************/
      /* Le blizzard                                                          */
      /************************************************************************/
      {
        'name': 'Le blizzard',
        'msgs': [
          {
            'name': 'Est-ce qu’elle pense à moi ?',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Est-ce qu’elle pense à m' },
              { 'rnd': 'o', 'min': 1, 'max': 5 },
              { 'rnd': 'i', 'min': 1, 'max': 10 },
              { 'rnd': ' ou à mon avatar', 'min': 0, 'max': 1 },
              { 'str': ' ? ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Est-ce qu’elle rêve de moi ?',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Est-ce qu’elle rêve de m' },
              { 'rnd': 'o', 'min': 1, 'max': 5 },
              { 'rnd': 'i', 'min': 1, 'max': 10 },
              { 'rnd': ' ou de mon avatar', 'min': 0, 'max': 1 },
              { 'str': ' ? ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Mon cœur est perdu dans le blizzard',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Mon cœur est perdu dans le blizzard ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 }
            ]
          },

          {
            'name': 'Solo',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Solo ', 'min': 3, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },
        ]
      },
    ],

    'C': [
      /************************************************************************/
      /* Carapace bleue                                                       */
      /************************************************************************/
      {
        'name': 'Carapace bleue',
        'msgs': [
          {
            'name': 'Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Wohoh ', 'min': 2, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Waou',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': [' W',' Ou'], 'min': 1, 'max': 1 },
              { 'rnd': 'a', 'min': 2, 'max': 10 },
              { 'rnd': 'h', 'min': 0, 'max': 1 },
              { 'rnd': 'o', 'min': 1, 'max': 5 },
              { 'rnd': 'u', 'min': 1, 'max': 5 },
              { 'rnd': 'h', 'min': 0, 'max': 1 },
              { 'str': ' ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Ooyeah',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' O' },
              { 'rnd': 'o', 'min': 1, 'max': 5 },
              { 'rnd': 'u', 'min': 0, 'max': 5 },
              { 'str': 'y' },
              { 'rnd': 'e', 'min': 1, 'max': 5 },
              { 'rnd': 'a', 'min': 1, 'max': 5 },
              { 'str': 'h ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Je garde ma carapace bleue',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' J' },
              { 'rnd': 'e', 'min': 3, 'max': 10 },
              { 'str': ' garde ma carapace bl' },
              { 'rnd': 'e', 'min': 3, 'max': 10 },
              { 'rnd': 'u', 'min': 3, 'max': 10 },
              { 'rnd': 'e', 'min': 3, 'max': 10 },
              { 'rnd': ' si t’es en première place', 'min': 0, 'max': 1 },
              { 'str': ' ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': '…bleeeeeeeeeuuuuuue',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' J' },
              { 'rnd': 'e', 'min': 3, 'max': 10 },
              { 'str': ' garde ma carapace bl' },
              { 'rnd': 'e', 'min': 10, 'max': 20 },
              { 'rnd': 'u', 'min': 10, 'max': 20 },
              { 'rnd': 'e', 'min': 10, 'max': 20 },
              { 'rnd': ' si t’es en première place', 'min': 0, 'max': 1 },
              { 'str': ' ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Toudoudoudou',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Tou' },
              { 'rnd': 'dou', 'min': 5, 'max': 15 },
              { 'str': ' ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Puis rejouer',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Puis rejouer et rejouer ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Code Lyoko                                                           */
      /************************************************************************/
      {
        'name': 'Code Lyoko',
        'msgs': [
          {
            'name': 'Foster !',
            'parts': [
              { 'rnd': 'kickba2Foster ', 'min': 1, 'max': 10 },
              { 'rnd': '!', 'min': 1, 'max': 5 }
            ]
          },

          {
            'name': 'Code Lyoko, tout reprogrammer',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Code Lyoko, tout reprogrammer ! ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 }
            ]
          },

          {
            'name': 'Code Lyoko, un monde sans danger',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Code Lyoko, un monde sans danger ! ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 }
            ]
          },
        ]
      },
    ],

    'E': [
      /************************************************************************/
      /* Erreur de compilation                                                */
      /************************************************************************/
      {
        'name': 'Erreur de compilation',
        'msgs': [
          {
            'name': 'Non, non, non',
            'parts': [
              { 'str': 'N' },
              { 'rnd': 'o', 'min': 1, 'max': 7 },
              { 'str': 'n, n' },
              { 'rnd': 'o', 'min': 1, 'max': 7 },
              { 'str': 'n, n' },
              { 'rnd': 'o', 'min': 1, 'max': 7 },
              { 'str': 'n' },
            ]
          },

          {
            'name': 'Une erreur de compilation',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Une erreur de compilation ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          }
        ]
      },
    ],

    'I': [
      /************************************************************************/
      /* Incompatibilité totale                                               */
      /************************************************************************/
      {
        'name': 'Incompatibilité totale',
        'msgs': [
          {
            'name': 'Incompatibilité totale !',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Incompatibilité totale ! ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Mes chats ne t’aiment pas',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Mes chats ne t’aiment pas ! ' },
              {
                'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
                'min': 1,
                'max': 3
              },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Mes chats ne t’aimeeeeent pas',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Mes chats ne t’aim' },
              { 'rnd': 'e', 'min': 3, 'max': 10 },
              { 'str': 'nt pas ! ' },
              {
                'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
                'min': 1,
                'max': 3
              },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Chats, chats',
            'parts': [
              {
                'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
                'min': 4,
                'max': 10
              },
            ]
          },
        ]
      },
    ],

    'J': [
      /************************************************************************/
      /* Je t’inférieur à trois                                               */
      /************************************************************************/
      {
        'name': 'Je t’inférieur à trois',
        'msgs': [
          {
            'name': '<3',
            'parts': [ { 'rnd': '<3 ', 'min': 1, 'max': 15 } ]
          },

          {
            'name': 'Cœurs, cœurs',
            'parts': [
              {
                'rnd': ['TwitchUnity ', 'BisexualPride ', 'VirtualHug', '<3 '],
                'min': 1,
                'max': 10
              },
            ]
          },

          {
            'name': 'Je t’inférieur à trois Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Je t’inférieur à trois kickba2Wohoh kickba2Wohoh ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Solo',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Solo ', 'min': 3, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Wohoh ', 'min': 2, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },
        ]
      },
    ],

    'R': [
      /************************************************************************/
      /* Reroll                                                               */
      /************************************************************************/
      {
        'name': 'Reroll',
        'msgs': [
          {
            'name': 'J’aimerais pouvoir reroll',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' J’aimerais pouvoir reroll ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Steuplé MeuJeu dis-moi oui',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Steuplé MeuJeu dis-moi oui ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Solo',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Solo ', 'min': 3, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },
        ]
      },
    ],

    'S': [
      /************************************************************************/
      /* Sticks analos                                                        */
      /************************************************************************/
      {
        'name': 'Sticks analos',
        'msgs': [
          {
            'name': 'Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Wohoh ', 'min': 2, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Ils arrachent les museaux Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' Ils arrachent les museaux kickba2Wohoh ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'À des chiens et des chiots Wohoh',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'str': ' À des chiens et des chiots kickba2Wohoh ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Foster',
            'parts': [
              { 'rnd': 'kickba2Foster ', 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Foster Wohoh',
            'parts': [
              {
                'rnd': ['kickba2Foster ', 'kickba2Wohoh '],
                'min': 1,
                'max': 10
              },
            ]
          },
        ]
      },
    ],

    'T': [
      /************************************************************************/
      /* Ton cosplay                                                          */
      /************************************************************************/
      {
        'name': 'Ton cosplay',
        'msgs': [
          {
            'name': 'Toi, tu me plais avec ton cosplay',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Toi, tu me plais avec ton cosplay ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Aux Geek Faëries',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Aux geekfa1Ries Faëries ! geekfa1Love ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Tu ne sais rien Jon Snow                                             */
      /************************************************************************/
      {
        'name': 'Tu ne sais rien Jon Snow',
        'msgs': [
          {
            'name': 'You know nothing Jon Snow',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' You know nothing Jon Snow ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Tu ne sais rien',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Tu ne sais rien ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Tu ne sais rien Jon Snow',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Tu ne sais rien Jon Snow ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Tu ne sais rien Jean Neige',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Tu ne sais rien Jean Neige ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Solo',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Solo ', 'min': 3, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },

          {
            'name': 'Spoilerz',
            'parts': [
              { 'str': 'Spoil' },
              { 'rnd': ['e'], 'min': 1, 'max': 10 },
              { 'str': 'r' },
              { 'rnd': ['z'], 'min': 1, 'max': 10 },
              { 'str': ' ' },
              { 'rnd': ['!'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Bouchez-vous les oreilles',
            'parts': [
              { 'str': 'Bouchez-vous les oreilles ' },
              { 'rnd': ['!'], 'min': 1, 'max': 10 },
            ]
          },
        ]
      },
    ],

    'V': [
      /************************************************************************/
      /* Version bêta                                                         */
      /************************************************************************/
      {
        'name': 'Version bêta',
        'msgs': [
          {
            'name': 'Tu es version bêta',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Tu es en version bêta ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Encore en version bêta',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Encore en version bêta ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Tu manques de finitions',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Tu manques de finitions ' },
              {
                'rnd': '(surtout point de vue graphismes) ',
                'min': 0,
                'max': 1
              },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Et je t’accepte comme ça',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
              { 'str': ' Et je t’accepte comme ç' },
              { 'rnd': 'a', 'min': 1, 'max': 10 },
              { 'str': ' ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 10 },
            ]
          },

          {
            'name': 'Solo',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
              { 'rnd': ' kickba2Solo ', 'min': 3, 'max': 10 },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'min': 1, 'max': 3 },
            ]
          },
        ]
      },
    ],
  }
};
