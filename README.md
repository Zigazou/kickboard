# Kickboard, le bookmarklet

![Logo Kickboard](https://raw.githubusercontent.com/Zigazou/kickboard/main/kickboard-logo.png)

Kickboard est un bookmarklet pour chatter rapidement pendant les concerts de
Kickban sur Twitch.

Il est conçu pour fonctionner dans un navigateur desktop sur le site web de
Twitch et plus particulièrement sur la page Twitch de Kickban (bien qu’en
réalité il ne soit destiné à cette page que par son fichier de configuraiton).

## Génération du bookmarklet

Pour générer le bookmarklet, les éléments suivants sont pré-requis :

- Environnement Linux,
- Node JS,
- Terser.

Sur Debian ou Ubuntu, les lignes de commandes suivantes permettent
l’installation des paquets nécessaires :

```Shell
sudo apt install nodejs npm
sudo npm install terser -g
```

Si ces pré-requis sont remplis, il suffit de lancer les commandes suivantes :

```Shell
make clean
make
```

Si tout se passe bien, le fichier `install-page.html` a été généré.

Il peut être ouvert directement dans un navigateur, il n’est pas nécessaire de
l’installer sur un serveur pour s’en servir.

## Fichier de configuration

### La constante `kickboardConfig`

Le fichier de configuration consiste en la déclaration de la constante
`kickboardConfig`.

`kickboardConfig` contient deux entrées :

- `kickboardConfig.bits` : des morceaux de chaînes de caractères qui reviennent
  souvent dans le reste de la configuration et qu’il est donc pratique de
  définir une fois pour toute.
- `kickboardConfig.groups` : un dictionnaire des groupes tels qu’ils
  apparaîtront dans la liste déroulante ; cela permet d’organiser la liste
  déroulante quand il y a beaucoup de chansons.

### Les groupes

Chaque groupe contient une liste de chansons (même s’il n’y a qu’une seule
chanson, le groupe est obligatoire).

### Les chansons

Par exemple, `kicboardConfig.groups.F[0]` correspond à la chanson
« Une fille » :

- `kicboardConfig.groups.F[0].name` : titre de la chanson (Une fille)
- `kicboardConfig.groups.F[0].msgs` : liste des messages disponibles pour cette
  chanson ; à chaque message sera associé un bouton dans la Kickboard.

```JavaScript
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
      }
```

### Les messages

Chaque message est constituté de 2 éléments :

- `kicboardConfig.groups.F[0].msgs[0].name` : nom du bouton, ce que
  l’utilsiateur verra (ici « Mais... »).
- `kicboardConfig.groups.F[0].msgs[0].parts` : liste des éléments constituant
  le message à générer et à envoyer dans le chat.

Dans le cas de la chanson « Une fille », les messages sont simples et toujours
identiques. Par exemple, le message « Mais... » enverra toujours « Mais... »
dans le chat. C’est la fonction de la clé « str » (str pour string ou chaîne de
caractères).

Pour faire apparaître une emote dans le message, il suffit d’utiliser le titre
de l’emote en faisant attention :

- aux majuscules et minuscules : c’est « VoHiYo » et non « vohiyo »,
- aux espaces avant et après : « VoHiYoVoHiYo » n’affichera aucune emote tandis
  que « VoHiYo VoHiYo » affichera deux emote côte à côte,
- aux droits d’utilisation des emotes : le chat n’affichera l’emote
  correspondante que si vous avez le droit d’utiliser l’emote ; ce n’est pas
  gênant si vous prévoyez d’être le seul à utiliser la kickboard, cela le
  devient si vous comptez diffusez votre propre kickboard.

### Les éléments d’un message

Un message peut être constitué des éléments suivants :

- `str` : une chaîne constante,
- `rnd` : une chaîne généralement aléatoirement selon un motif,
- `bit` : un morceau défini dans `kickboardConfig.bits`.

Les éléments d’un message sont concaténés avant d’être envoyés dans le chat.

#### L’élément `str` (pour string)

La clé « str » a été vue précédemment.

#### L’élément `rnd` (pour random)

Voici un exemple d’utilisation de l’élément `rnd` :

```JavaScript
            [
              { 'rnd': ['You... ', 'YOU... '], 'rng': [1, 1] },
              { 'rnd': ['pi ', 'PI '], 'rng': [1, 1] },
              { 'rnd': '!', 'rng': [1, 3] }
            ]
```

La clé `rnd` accepte une chaîne de caractères ou une liste de chaînes de
caractères.

La clé `rnd` doit toujours être accompagnée d’une clé `rng` (pour range) qui
indique le nombre minimal et maximal de copies de la chaîne.

L’exemple pourra produire toutes les chaînes suivantes :

- You... pi !
- You... pi !!
- You... pi !!!
- YOU... pi !
- YOU... pi !!
- YOU... pi !!!
- You... PI !
- You... PI !!
- You... PI !!!
- YOU... pi !
- YOU... pi !!
- YOU... pi !!!

Voic un autre exemple :

```JavaScript
{ 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 3] }
```

Cet exemple pourra générer chacune des chaînes suivantes : ♩, ♪, ♫, ♬, ♩♩, ♩♪, 
♩♫, ♩♬, ♪♩, ♪♪, ♪♫, ♪♬, ♫♩, ♫♪, ♫♫, ♫♬, ♬♩, ♬♪, ♬♫, ♬♬, ♩♩♩, ♩♪♩, ♩♫♩, ♩♬♩, 
♪♩♩, ♪♪♩, ♪♫♩, ♪♬♩, ♫♩♩, ♫♪♩, ♫♫♩, ♫♬♩, ♬♩♩, ♬♪♩, ♬♫♩, ♬♬♩, ♩♩♪, ♩♪♪, ♩♫♪, ♩♬♪, 
♪♩♪, ♪♪♪, ♪♫♪, ♪♬♪, ♫♩♪, ♫♪♪, ♫♫♪, ♫♬♪, ♬♩♪, ♬♪♪, ♬♫♪, ♬♬♪, ♩♩♫, ♩♪♫, ♩♫♫, 
♩♬♫, ♪♩♫, ♪♪♫, ♪♫♫, ♪♬♫, ♫♩♫, ♫♪♫, ♫♫♫, ♫♬♫, ♬♩♫, ♬♪♫, ♬♫♫, ♬♬♫, ♩♩♬, 
♩♪♬, ♩♫♬, ♩♬♬, ♪♩♬, ♪♪♬, ♪♫♬, ♪♬♬, ♫♩♬, ♫♪♬, ♫♫♬, ♫♬♬, ♬♩♬, ♬♪♬, ♬♫♬, 
♬♬♬.

Cela fait 84 chaînes différentes en tout. C’est le résultat d’un produit
cartésien. En combinant plusieurs générations aléatoires il est ainsi possible
de créer de très nombreuses variantes.

Note : n’oubliez pas de rajouter des espaces avant ou après les emotes que vous
pourriez utiliser avec une génération aléatoire pour éviter qu’elles se
retrouvent collées les unes aux autres.

#### L’élément `bit` (pour bit ou morceau)

L’élément `bit` permet de rappeler un morceau à partir de la bibliothèque
`kickboardConfig.bits`.

Par exemple, si un message est constitué ainsi :

```JavaScript
            [
              { 'bit': 'notes' },
              { 'str': ' Mes chats ne t’aiment pas ! ' },
              { 'bit': 'chats' },
              { 'bit': 'notes' },
            ]
```

et que les `bits` contiennent les définitions suivantes :

```JavaScript
const kickboardConfig = {
  'bits': {
    'notes': { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 3] },
    'chats': {
      'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
      'rng': [1, 3]
    }
  }
}
```

alors l’exemple sera équivalent à :

```JavaScript
            [
              { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 3] },
              { 'str': ' Mes chats ne t’aiment pas ! ' },
              {
                'rnd': ['GlitchCat ', 'mcaT ', 'CoolCat ', 'InuyoFace '],
                'rng': [1, 3]
              },
              { 'rnd': ['♩', '♪', '♫', '♬'], 'rng': [1, 3] },
            ]
```