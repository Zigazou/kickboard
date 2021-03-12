if (document.querySelector('div#kickboard') !== null) {
  alert('Kickboard déjà installée !');
  throw new Error('Already installed');
}

const kickboardConfig = {
  'refreshDelay': 60000,
  'bits': {
    'notes': {
      'rnd': ['SingsNote ', 'SingsMic ', 'TwitchSings '],
      'rng': [1, 3]
    },
    'chats': {
      'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
      'rng': [1, 3]
    },
    'chatsss': {
      'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
      'rng': [4, 10]
    },
    'coeurs': {
      'rnd': ['TwitchUnity ', 'BisexualPride ', 'VirtualHug ', '<3 '],
      'rng': [1, 10]
    },
    'foster': { 'rnd': 'kickba2Foster ', 'rng': [1, 10] },
  },

  'everywhere': [
    {
      'name': 'Foster !',
      'parts': [ { 'bit': 'foster' } ],
    },

    {
      'name': 'Cœurs, cœurs',
      'parts': [ { 'bit': 'coeurs' } ],
    },

    {
      'name': 'Solo',
      'parts': [
        { 'bit': 'notes' },
        { 'rnd': ' kickba2Solo ', 'rng': [3, 10] },
        { 'bit': 'notes' },
      ],
    },

    {
      'name': 'Wohoh',
      'parts': [
        { 'bit': 'notes' },
        { 'rnd': ' kickba2Wohoh ', 'rng': [2, 10] },
        { 'bit': 'notes' },
      ],
    },

    {
      'name': 'Applaudissements',
      'parts': [
        { 'rnd': ['bravo ', 'clap '], 'rng': [5, 10] }
      ]
    },

    '',

    {
      'name': 'Caliner',
      'type': 'select',
      'parts': [ { 'str': '!hug ' } ],
      'cls': 'tw-snackbar--warning'
    },

    {
      'name': 'Attaquer',
      'type': 'select',
      'parts': [ { 'str': '!attack' } ],
      'cls': 'tw-snackbar--warning'
    },

    {
      'name': 'Danser',
      'parts': [ { 'str': '!dance' } ],
      'cls': 'tw-snackbar--warning'
    },

    {
      'name': 'Sauter',
      'parts': [ { 'str': '!jump' } ],
      'cls': 'tw-snackbar--warning'
    },

    {
      'name': 'Bombe',
      'parts': [ { 'str': '!bomb' } ],
      'cls': 'tw-snackbar--warning'
    },
  ],

  'groups': {
    'A': [
      /************************************************************************/
      /* Alone in the dark                                                    */
      /************************************************************************/
      {
        'name': 'Alone in the dark',
        'msgs': [
          {
            'name': 'Ah ah ah',
            'parts': [
              { 'str': 'Ah ah ' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'h ' },
              { 'rnd': '!', 'rng': [1, 3] },
            ]
          },

          {
            'name': 'Le sexe pour toi',
            'parts': [
              { 'str': 'Le sexe pour toi' },
            ]
          },

          {
            'name': 'C’est la saga Zelda',
            'parts': [
              { 'str': 'C’est la saga Zelda' },
            ]
          },

          {
            'name': 'C’est une légende !',
            'parts': [
              { 'str': 'C’est une légende !' },
            ]
          },
        ]
      },

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
                'rng': [1, 5]
              }
            ]
          },

          {
            'name': 'Beaucoup de briquets',
            'parts': [
              {
                'rnd': [' GlitchLit ', ' CurseLit ', ' TwitchLit'],
                'rng': [5, 10]
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
              { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 10] },
              { 'str': ' Et tu me manques d' },
              { 'rnd': 'é', 'rng': [1, 10] },
              { 'str': 'jà ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 10] },
            ]
          },

          {
            'name': 'Comment vivre sans toi',
            'parts': [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 10] },
              { 'str': ' Comment vi' },
              { 'rnd': 'i', 'rng': [1, 10] },
              { 'str': 'vre sans toi ? ' },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 10] },
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
              { 'bit': 'notes' },
              { 'str': ' Est-ce qu’elle pense à m' },
              { 'rnd': 'o', 'rng': [1, 5] },
              { 'rnd': 'i', 'rng': [1, 10] },
              { 'rnd': ' ou à mon avatar', 'rng': [0, 1] },
              { 'str': ' ? ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Est-ce qu’elle rêve de moi ?',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Est-ce qu’elle rêve de m' },
              { 'rnd': 'o', 'rng': [1, 5] },
              { 'rnd': 'i', 'rng': [1, 10] },
              { 'rnd': ' ou de mon avatar', 'rng': [0, 1] },
              { 'str': ' ? ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Mon cœur est perdu dans le blizzard',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Mon coeur est perdu dans le blizzard ' },
              { 'bit': 'notes' }
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
            'name': 'Waou',
            'parts': [
              { 'bit': 'notes' },
              { 'rnd': [' W',' Ou'], 'rng': [1, 1] },
              { 'rnd': 'a', 'rng': [2, 10] },
              { 'rnd': 'h', 'rng': [0, 1] },
              { 'rnd': 'o', 'rng': [1, 5] },
              { 'rnd': 'u', 'rng': [1, 5] },
              { 'rnd': 'h', 'rng': [0, 1] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Ooyeah',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' O' },
              { 'rnd': 'o', 'rng': [1, 5] },
              { 'rnd': 'u', 'rng': [0, 5] },
              { 'str': 'y' },
              { 'rnd': 'e', 'rng': [1, 5] },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'h ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Je garde ma carapace bleue',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' J' },
              { 'rnd': 'e', 'rng': [3, 10] },
              { 'str': ' garde ma carapace bl' },
              { 'rnd': 'e', 'rng': [3, 10] },
              { 'rnd': 'u', 'rng': [3, 10] },
              { 'rnd': 'e', 'rng': [3, 10] },
              { 'rnd': ' si t’es en première place', 'rng': [0, 1] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': '…bleeeeeeeeeuuuuuue',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' J' },
              { 'rnd': 'e', 'rng': [3, 10] },
              { 'str': ' garde ma carapace bl' },
              { 'rnd': 'e', 'rng': [10, 20] },
              { 'rnd': 'u', 'rng': [10, 20] },
              { 'rnd': 'e', 'rng': [10, 20] },
              { 'rnd': ' si t’es en première place', 'rng': [0, 1] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Toudoudoudou',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tou' },
              { 'rnd': 'dou', 'rng': [5, 15] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Puis rejouer',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Puis rejouer et rejouer ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* La chanson des balances                                              */
      /************************************************************************/
      {
        'name': 'La chanson des balances',
        'msgs': [
          {
            'name': 'C’est la chanson des balances',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' C\'est la chanson des balances ' },
              { 'bit': 'notes' }
            ]
          },

          {
            'name': 'C’est la chanson version astrologique',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' C\'est la chanson des ' },
              {
                'rnd': [
                  'béliers',
                  'taureaux',
                  'gémeaux',
                  'cancers',
                  'lions',
                  'vierges',
                  'balances',
                  'scorpions',
                  'sagittaires',
                  'capricorne',
                  'verseaux',
                  'poissons'
                ],
                'rng': [1, 1]
              },
              { 'bit': 'notes' }
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
            'name': 'Code Lyoko, tout reprogrammer',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Code Lyoko, tout reprogrammer ! ' },
              { 'bit': 'notes' }
            ]
          },

          {
            'name': 'Code Lyoko, un monde sans danger',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Code Lyoko, un monde sans danger ! ' },
              { 'bit': 'notes' }
            ]
          },
        ]
      },

      /************************************************************************/
      /* Coucou                                                               */
      /************************************************************************/
      {
        'name': 'Coucou',
        'msgs': [
          {
            'name': 'Coucou !',
            'parts': [ { 'str': 'Coucou ! VoHiYo' } ]
          },

          {
            'name': 'Tu veux voir ma 🍆 ?',
            'parts': [
              { 'str': 'Tu veux voir ma 🍆 ?' },
              { 'rnd': ' <3', 'rng': [2, 10] },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Crise de la quarantaine                                              */
      /************************************************************************/
      {
        'name': 'Crise de la quarantaine',
        'msgs': [
          {
            'name': 'Restez chez vous !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Restez chez vous ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'NON !',
            'parts': [
              { 'str': 'N' },
              { 'rnd': 'O', 'rng': [1, 4] },
              { 'str': 'N ' },
              { 'rnd': '!', 'rng': [1, 3] },
            ]
          },

          {
            'name': 'J’ai l’habitude',
            'parts': [
              { 'bit': 'notes' },
              {
                'rnd': [' Bien sûr, bien sûr, j’ai ', ' J’ai '],
                'rng': [1, 1]
              },
              { 'rnd': 'déjà ', 'rng': [0, 1] },
              { 'str': 'l’habitude ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },
    ],

    'D': [
      /************************************************************************/
      /* Développeurs                                                         */
      /************************************************************************/
      {
        'name': 'Développeurs',
        'msgs': [
          {
            'name': 'Oh oui on aime les bits',
            'parts': [ { 'str': 'Oh oui on aime les bits !' } ]
          },

          {
            'name': 'Dééév\'loooppeurs',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' D' },
              { 'rnd': 'é', 'rng': [1, 5] },
              { 'str': 'v\'l' },
              { 'rnd': 'o', 'rng': [1, 5] },
              { 'str': 'pp' },
              { 'rnd': 'e', 'rng': [1, 5] },
              { 'rnd': 'u', 'rng': [1, 5] },
              { 'str': 'rs ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Vous savez…',
            'parts': [
              { 'str': 'Vous savez, ' },
              {
                'rnd': [
                  'notre langage à nous c\'est pas les mots',
                  'Github, forms, listes de diffusion',
                  'nous sommes des gens très très conscienceux'
                ],
                'rng': [1, 1]
              },
            ]
          },

          {
            'name': 'Et si t’insistes…',
            'parts': [
              { 'str': 'Et si t\'insistes lourdement, on dit à Hadopi ' },
              { 'str': 'que tu télécharges tes séries illégalement' },
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
              { 'rnd': 'o', 'rng': [1, 7] },
              { 'str': 'n, n' },
              { 'rnd': 'o', 'rng': [1, 7] },
              { 'str': 'n, n' },
              { 'rnd': 'o', 'rng': [1, 7] },
              { 'str': 'n' },
              {
                'rnd': [
                  ' UWot',
                  ' UnSane',
                  ' RuleFive',
                  ' WutFace',
                  ' BrokeBack',
                  ' SMOrc',
                  ' DansGame',
                  ' >(',
                  ' :('
                ],
                'rng': [3, 5]
              },
            ]
          },

          {
            'name': 'Une erreur de compilation',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Une erreur de compilation ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Une erreur de ponctuation',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Une erreur de ponctuation ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Il manquait juste un point-virgule',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Il manquait juste un point-virgule' },
              { 'rnd': ' ;', 'rng': [8, 15] },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Point-virgule',
            'parts': [
              { 'rnd': ';', 'rng': [8, 30] },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Et il en reste plein d’autres                                        */
      /************************************************************************/
      {
        'name': 'Et il en reste plein d’autres',
        'msgs': [
          {
            'name': 'Un jeu au hasard',
            'parts': [
              { 'rnd': '<3 ', 'rng': [1, 3] },
              {
                'rnd': [
                  'Dal’X',
                  'Strip Fighter',
                  'Gigallo',
                  'Jungle Fever',
                  'Sex games ',
                  'Teenage Queen',
                  'Stroker',
                  'Rapelay',
                  'Big momma',
                  'Brad Stallion',
                  'Astrotit',
                  'Orgasmatrion',
                  'Girl Test ',
                  'Fuck Quest',
                  'Phunk the world',
                  'Sex Sex Sex',
                ],
                'rng': [1, 1]
              },
              { 'rnd': ' <3', 'rng': [1, 3] },
            ]
          },
        ]
      },
    ],

    'F': [
      /************************************************************************/
      /* Une fille                                                            */
      /************************************************************************/
      {
        'name': 'Une fille',
        'msgs': [
          {
            'name': 'Mais...',
            'parts': [ { 'str': 'Mais...' } ]
          },

          {
            'name': 'Mais c’était un agent du FBI !',
            'parts': [ { 'str': 'Mais c’était un agent du FBI !' } ]
          },

          {
            'name': 'C’était un agent du F. B. I. !',
            'parts': [ { 'str': 'C’était un agent du Effe Bi Aïe !' } ]
          },
        ]
      },
    ],

    'G': [
      /************************************************************************/
      /* Gandalf                                                              */
      /************************************************************************/
      {
        'name': 'Gandalf',
        'msgs': [
          {
            'name': 'Zut, flûte !',
            'parts': [
              { 'rnd': ['Zut, ', 'ZUT, '], 'rng': [1, 1] },
              { 'rnd': ['flûte ', 'FLÛTE '], 'rng': [1, 1] },
              { 'rnd': '!', 'rng': [1, 3] }
            ]
          },

          {
            'name': 'You pi !',
            'parts': [
              { 'rnd': ['You... ', 'YOU... '], 'rng': [1, 1] },
              { 'rnd': ['pi ', 'PI '], 'rng': [1, 1] },
              { 'rnd': '!', 'rng': [1, 3] }
            ]
          },

          {
            'name': 'Vous ne passerez pas !',
            'parts': [ { 'str': 'Vous... ne... passerez... pas !' } ]
          },
        ]
      },
    ],

    'H': [
      /************************************************************************/
      /* Han shot first                                                       */
      /************************************************************************/
      {
        'name': 'Han shot first',
        'msgs': [
          {
            'name': 'Elle a de belles... tresses',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Elle a de belles... ' },
              {
                'rnd': ['tresses ', 'tresses ', 'ffftresses ', 'fesses '],
                'rng': [1, 1]
              },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'J’tire en premier !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' J’tire en premier ! ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },
    ],

    'I': [
      /************************************************************************/
      /* Ils attaquent                                                        */
      /************************************************************************/
      {
        'name': 'Ils attaquent',
        'msgs': [
          {
            'name': 'Zombies',
            'parts': [
              { 'rnd': 'kickba2Zombie ', 'rng': [3, 15] }
            ]
          },

          {
            'name': 'Martiens',
            'parts': [
              { 'rnd': 'kickba2Zombie ', 'rng': [3, 15] }
            ]
          },

          {
            'name': 'Robots',
            'parts': [
              { 'rnd': 'kickba2Zombie ', 'rng': [3, 15] }
            ]
          },

          {
            'name': 'Ma tête',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Ma tête, ma tête, ma tête ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Un par un',
            'parts': [
              { 'bit': 'notes' },
              { 'rnd': [' 1', ' Un'], 'rng':[1, 1] },
              { 'str': ' par ' },
              { 'rnd': ['1 ', 'un '], 'rng':[1, 1] },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Le rock’n’roll nous a sauvés',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Le rock’n’roll nous a sauvés ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Le reggae nous a sauvés',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Le reggae nous a sauvés ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Incompatibilité totale                                               */
      /************************************************************************/
      {
        'name': 'Incompatibilité totale',
        'msgs': [
          {
            'name': 'Incompatibilité totale !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Incompatibilité totale ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Mes chats ne t’aiment pas',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Mes chats ne t’aiment pas ! ' },
              { 'bit': 'chats' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Mes chats ne t’aimeeeeent pas',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Mes chats ne t’aim' },
              { 'rnd': 'e', 'rng': [3, 10] },
              { 'str': 'nt pas ! ' },
              { 'bit': 'chats' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Chats, chats',
            'parts': [ { 'bit': 'chatsss' } ]
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
            'parts': [ { 'rnd': '<3 ', 'rng': [1, 1] } ]
          },

          {
            'name': 'Je t’inférieur à trois Wohoh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Je t’inférieur à trois kickba2Wohoh kickba2Wohoh ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },
    ],

    'K': [
      /************************************************************************/
      /* Kickban                                                              */
      /************************************************************************/
      {
        'name': 'Kickban',
        'msgs': [
          {
            'name': 'Le groupe que tu retrouves en live',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Kickban, c’est le groupe que tu retrouves en live ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Le groupe qui te kick et qui te ban',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Kickban, c’est le groupe qui te kick et qui te ban ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Applaudissements',
            'parts': [
              { 'rnd': ['👏', '👏🏽', '👏🏿', '👏🏻'], 'rng': [5, 15] }
            ]
          },
        ]
      },
    ],

    'M': [
      /************************************************************************/
      /* Medley                                                               */
      /************************************************************************/
      {
        'name': 'Medley',
        'msgs': [
          {
            'name': 'Sonic',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' S' },
              { 'rnd': 'o', 'rng': [5, 15] },
              { 'str': 'nic ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Homme ou machine',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Homme ou mach' },
              { 'rnd': 'i', 'rng': [2, 5] },
              { 'str': 'ne ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Toujours, toujours...',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Toujours, toujours... ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Capitaine Flam',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' C' },
              { 'rnd': 'a', 'rng': [2, 5] },
              { 'str': 'pitaine Flam ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'La victoire !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' LA VICTOIRE ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Olive et Tom',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Olive et Tom ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tom, Olivier',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tom, Olivier ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tic, Tic, Tic, Tic et Tac',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tic, Tic, Tic, Tic et Tac ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Picsou',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' P' },
              { 'rnd': 'i', 'rng': [2, 5] },
              { 'str': 'cso' },
              { 'rnd': 'u', 'rng': [2, 5] },
              { 'str': ' ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Ouh ouh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Ouh ouh ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tortues Ninja',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tortues Ninja ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Cowabunga le cri... des ninjas',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Cowabunga le cri... des ninjas ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Wouh ouh ouh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Wouh ouh ouh ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Les Entrechats sont là',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Les Entrechats sont là ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Nous, les Minipouss',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Nous, les Minipouss ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Oui, les Minipouss',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Oui, les Minipouss ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Wahou !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' W' },
              { 'rnd': 'a', 'rng': [2, 5] },
              { 'str': 'h' },
              { 'rnd': 'o', 'rng': [2, 5] },
              { 'rnd': 'u', 'rng': [2, 5] },
              { 'str': ' ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Goldorak, go !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Goldorak, go !' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Denver !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Denver !' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Et bien plus encooore',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Et bien plus enc' },
              { 'rnd': 'o', 'rng': [4, 8] },
              { 'str': 're ! ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Le métro                                                             */
      /************************************************************************/
      {
        'name': 'Le métro',
        'msgs': [
          {
            'name': 'J’aime pas le métro',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' J’aime pas le m' },
              { 'rnd': 'é', 'rng': [3, 5] },
              { 'str': 'tr' },
              { 'rnd': 'o', 'rng': [3, 5] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Le métro wohoh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Le métr' },
              { 'rnd': 'o', 'rng': [3, 5] },
              { 'str': ' kickba2Wohoh ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Ça pue le métro',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Ça pue le m' },
              { 'rnd': 'é', 'rng': [3, 5] },
              { 'str': 'tr' },
              { 'rnd': 'o', 'rng': [3, 5] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Mon grand frère                                                      */
      /************************************************************************/
      {
        'name': 'Mon grand frère',
        'msgs': [
          {
            'name': 'Mon grand frère',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' PowerUpL Mon grand frère PowerUpR ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Palapa palapa',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' P' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'l' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'p' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': ' p' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'l' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'p' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'PALAPA PALAPA',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' P' },
              { 'rnd': 'A', 'rng': [1, 5] },
              { 'str': 'L' },
              { 'rnd': 'A', 'rng': [1, 5] },
              { 'str': 'P' },
              { 'rnd': 'A', 'rng': [1, 5] },
              { 'str': ' P' },
              { 'rnd': 'A', 'rng': [1, 5] },
              { 'str': 'L' },
              { 'rnd': 'A', 'rng': [1, 5] },
              { 'str': 'P' },
              { 'rnd': 'A', 'rng': [1, 5] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Jamais jamais',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Jamais ' },
              { 'rnd': 'jamais ', 'rng': [1, 5] },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Mon uptime                                                           */
      /************************************************************************/
      {
        'name': 'Mon uptime',
        'msgs': [
          {
            'name': 'Mon uptime',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Mon upt' },
              { 'rnd': 'i', 'rng': [1, 8] },
              { 'str': 'me ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'é é é',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' é é é ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'À s’éteindre ou à rebooter',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' À s’éteindre ou à rebooter ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* My spot                                                              */
      /************************************************************************/
      {
        'name': 'My spot',
        'msgs': [
          {
            'name': 'Ma place',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Ma pl' },
              { 'rnd': 'a', 'rng': [1, 5] },
              { 'str': 'ce ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'You are in my spot',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' You are in m' },
              { 'rnd': 'y', 'rng': [1, 5] },
              { 'str': ' sp' },
              { 'rnd': 'o', 'rng': [1, 5] },
              { 'str': 't ! ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },
    ],

    'N': [
      /************************************************************************/
      /* Nos super-héros                                                      */
      /************************************************************************/
      {
        'name': 'Nos super-héros',
        'msgs': [
          {
            'name': 'Un super-héros au hasard',
            'parts': [
              { 'str': 'MercyWing1 ' },
              {
                'rnd': [
                  'Natasha Romanoff',
                  'Steve Rogers',
                  'Clint Barton',
                  'Carol Danvers',
                  'Tony Stark',
                  'Bruce Banner',
                  'T-T-T-T-Thor',
                  'Wanda',
                  'Pietro Maximoff',
                  'Stephen Strange',
                  'Matt Murdock',
                  'Peter Parker',
                  'Susan Storm',
                  'Johnny Storm',
                  'Hope Van Dyne',
                  'T-T-T-T’Challa',
                  'Steve Ditko',
                  'Jack Kirby',
                  'Stan Lee'
                ],
                'rng': [1, 1]
              },
              { 'str': ' MercyWing2' },
            ]
          },

          {
            'name': 'Des cœurs',
            'parts': [ { 'bit': 'coeurs' } ]
          },
        ]
      },
    ],

    'P': [
      /************************************************************************/
      /* Pas vu à la télé                                                     */
      /************************************************************************/
      {
        'name': 'Pas vu à la télé',
        'msgs': [
          {
            'name': 'Foster Wohoh',
            'parts': [
              {
                'rnd': ['kickba2Foster ', 'kickba2Wohoh '],
                'rng': [1, 10]
              },
            ]
          },

          {
            'name': 'À la télé',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' À la tél' },
              { 'rnd': 'é', 'rng': [3, 8] },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Presque trop facile                                                  */
      /************************************************************************/
      {
        'name': 'Presque trop facile',
        'msgs': [
          {
            'name': 'Même avec, au hasard',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Même ' },
              {
                'rnd': [
                  'avec une main dans l’dos',
                  'avec les yeux bandés',
                  'sans pouvoir faire dodo',
                  'sans pouvoir rebooter',
                  'sans jamais sauvegarder',
                  'sans souris, sans clavier',
                  'sans écrire les paroles',
                  'sans Christian, sans Clavier',

                ],
                'rng': [1, 1]
              },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'C’est presque trop facile',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' C’est presque trop facile ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Bravo Tony',
            'parts': [
              { 'str': 'Bravo Tony !' },
              { 'rnd': ' FBCatch', 'rng': [2, 6] },
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
              { 'bit': 'notes' },
              { 'str': ' J’aimerais pouvoir reroll ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Steuplé MeuJeu dis-moi oui',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Steuplé MeuJeu dis-moi oui ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Wouh, wouh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' W' },
              { 'rnd': 'o', 'rng': [1, 3] },
              { 'rnd': 'u', 'rng': [1, 3] },
              { 'str': 'h, w' },
              { 'rnd': 'o', 'rng': [1, 3] },
              { 'rnd': 'u', 'rng': [1, 3] },
              { 'str': 'h ! ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Rouge, rouge, jaune, jaune, vert, vert                               */
      /************************************************************************/
      {
        'name': 'Rouge, rouge, jaune, jaune, vert, vert',
        'msgs': [
          {
            'name': '🔴🔴, 🟡🟡, 🟢🟢... 🟢🟢',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' 🔴🔴, 🟡🟡, 🟢🟢... 🟢🟢 ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': '🔵🔵, 🟢🟢, 🟡🟡... 🟢🟢🟢🟢',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' 🔵🔵, 🟢🟢, 🟡🟡... 🟢🟢🟢🟢 ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': '🔵🟡🟢🔵🔴🔵🟡🟢🔴🔵🔴🟢🔴🔵🔴🟢🔴',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' 🔵🟡🟢🔵🔴🔵🟡🟢🔴🔵🔴🟢🔴🔵🔴🟢🔴 ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Couleurs au hasard',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' ' },
              {
                'rnd': [
                  ' ', '🔴', '🟠', '🟡', ' ', '🟢', '🟤', '🟣', '🔵'
                ],
                'rng': [10, 20]
              },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },
    ],

    'S': [
      /************************************************************************/
      /* Souris-clavier                                                       */
      /************************************************************************/
      {
        'name': 'Souris clavier',
        'msgs': [
          {
            'name': 'Il n’y a pas mieux !',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Il n’y a pas mie' },
              { 'rnd': 'u', 'rng': [1, 8] },
              { 'str': 'x ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Le combo souris-clavier',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Le combo souris-cl' },
              { 'rnd': 'a', 'rng': [4, 8] },
              { 'str': 'vier ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },

      /************************************************************************/
      /* Sticks analos                                                        */
      /************************************************************************/
      {
        'name': 'Sticks analos',
        'msgs': [
          {
            'name': 'Ils arrachent les museaux Wohoh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Ils arrachent les museaux kickba2Wohoh ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'À des chiens et des chiots Wohoh',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' À des chiens et des chiots kickba2Wohoh ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Foster Wohoh',
            'parts': [
              {
                'rnd': ['kickba2Foster ', 'kickba2Wohoh '],
                'rng': [1, 10]
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
              { 'bit': 'notes' },
              { 'str': ' Toi, tu me plais avec ton cosplay ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Toi, tu me plaiiiiis',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Toi, tu me pla' },
              { 'rnd': 'i', 'rng': [5, 15] },
              { 'str': 's ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Avec ton cosplay',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Avec ton cospla' },
              { 'rnd': 'y', 'rng': [5, 15] },
              { 'str': ' ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'En convention',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' En conventi' },
              { 'rnd': 'o', 'rng': [5, 15] },
              { 'str': ' ! ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Aux Geek Faëries',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Aux geekfa1Ries Faëries ! geekfa1Love ' },
              { 'bit': 'notes' },
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
              { 'bit': 'notes' },
              { 'str': ' You know nothing Jon Snow ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Et le répète',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Et le répète' },
              { 'rnd': '...', 'rng': [0, 1] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tu ne sais rien',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tu ne sais rien ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tu ne sais rien Jon Snow',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tu ne sais rien Jon Snow ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tu ne sais rien Jean Neige',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tu ne sais rien Jean Neige ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Spoilerz',
            'parts': [
              { 'str': 'Spoil' },
              { 'rnd': ['e'], 'rng': [1, 10] },
              { 'str': 'r' },
              { 'rnd': ['z'], 'rng': [1, 10] },
              { 'str': ' ' },
              { 'rnd': ['!'], 'rng': [1, 10] },
            ]
          },

          {
            'name': 'Bouchez-vous les oreilles',
            'parts': [
              { 'str': 'Bouchez-vous les oreilles ' },
              { 'rnd': ['!'], 'rng': [1, 10] },
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
              { 'bit': 'notes' },
              { 'str': ' Tu es en version bêta ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Encore en version bêta',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Encore en version bêta ' },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Tu manques de finitions',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Tu manques de finitions ' },
              {
                'rnd': '(surtout point de vue graphismes) ',
                'rng': [0, 1]
              },
              { 'bit': 'notes' },
            ]
          },

          {
            'name': 'Et je t’accepte comme ça',
            'parts': [
              { 'bit': 'notes' },
              { 'str': ' Et je t’accepte comme ç' },
              { 'rnd': 'a', 'rng': [1, 10] },
              { 'str': ' ' },
              { 'bit': 'notes' },
            ]
          },
        ]
      },
    ],
  }
};
