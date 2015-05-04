These are the source files for [www.surveil.social](http://www.surveil.social).

The website they generate is in the [gh-pages branch](https://github.com/amonks/surveil.social/tree/gh-pages) of this same repository.

## what

If you want to make a similar website, this might be a good starting point.

*   The artist pages are generated from data in [pieces.json](https://github.com/amonks/wunder.xyz/blob/master/pieces.json).
*   The statement on the [info page](http://www.wunder.xyz/info) is generated from text in [src/md](https://github.com/amonks/wunder.xyz/tree/master/src/md).
*   [Gruntfile.js](https://github.com/amonks/wunder.xyz/blob/master/Gruntfile.js) tells `grunt` which pages to build. You'll have to edit it if you want different artist pages.
*   Anything in [/pub](https://github.com/amonks/wunder.xyz/tree/master/pub) is copied directly into the final website. The images and the custom css for the cover page are in there.
*   Templates for each page are in [/src/jade](https://github.com/amonks/wunder.xyz/tree/master/src/jade).

## how

to build:

    npm install
    grunt build

to push to github-pages:

    grunt dist


# Surveil

## A pervasive game, suited for `8 to ∞` players.

## Products

### ITERATION ONE

*   To enter the game:
    *   post a clear, identifiable picture of yourself on the public internet with the tag `#surveiling`.
        *   you must now avoid being *spotted*. You are in the role `citizen`.

*  *spot* another player on camera. You are in the role `camera`
    *   take a picture, post it publicly with the `#spotted` tag. Don't tag the player. The picture must include the surveillance infrastructure and the player being surveilled.

*   As you see images tagged `#spotted`, collect them. You are in the role `surveillor`
    *   If you see someone [in person] who has been `#spotted`, you have surveilled them. Show them the `#spotted` picture, the `#surveil` picture, and say `you've been surveilled`.
        *   The `surveilled` player must take a picture with you and post it publicly, tagged `#gotme`

## Thoughts

### How pervasive should it be, really?

*   playable in one sitting (~30-60 mins)
    *   more room for specific tooling, costume, pieces
    *   can take full concentration
        *   but is this better? less like surveillance irl ...
*   durational [a la assassin]
    *   more room for emergent intrigue
    *   probably less simple; probably worse
        *   but it can't really depend on any outside objects if it's meant to go on for `time`.
    *   harder to get participation, maybe?
        *   unless it's joinable at any time; see enough ppl playing and you'll start urself
            *   "you lost the game"-game
    *   can't have meaningful score tracking *no one can be trusted*
    *   can't have roles
        *   at least not permanent ones, there's no way to ensure people won't lie // flip flop
        *   maybe temporary roles enforced by some type of physical state
            *   maybe geographic, like `base` in [tag](http://en.wikipedia.org/wiki/Tag_(game)#Base_and_truce_terms)
            *   maybe temporary, like `it` in tag
                *   but if the game is geographically pervasive [[played in more than one place simultaneously]] it can't rely on there being "one" it
    *   games like `the game` and `birdman fancyman` succeed, because there's extremely low overhead if you might be the only player in the room.
        *   the game is cool, because you don't have to do anything outwardly visible to be playing. If you lose, you can casually say "I lost the game" and it's fine if nobody knows what you mean.
        *   in `birdman fancyman` you'll never throw up the bird goggles without a target in mind. If there are two players in a group, their play will introduce the other players. Even if it hasn't come up recently, if you see a known player you'll keep watch.. If there's one player in the group, the game will never come up.

#### on one hand

Surveilance is everywhere — you can't turn it off. If I make the game ongoing (birdman fancyman, 'the game'), it reflects that quality of surveillance. The classic ongoing games are very simple because they can't rely on anything that isn't everywhere, you only need to be present. In 2015, though, every person comes with a small computer (phone). Relying on technology is a slippery slope, though: the game can't depend on a particular app or website, only something more fundamental.

##### List of technologies that will be everywhere forever:

*   image-capture
*   audio recording
*   internet? (opposed to www)
    *   maybe premature? the train?
    *   a game that included the internet would have to also include the possibility of no-internet.
        *   should it be "better" or "worse" to be offline
            *   both! more offense less defense.
*   light source?
    *   **EXAMPLE**
        1.  find someone in the shadows
        1.  illuminate them
        1.  take a picture
            *   taking pictures of people in the shadows is creepy. Especially if you don't know whether they're playing.
*   timekeeping
*   `infrastructure`, as a concept, I guess. This might be out-of-scope, but it'd be kinda cool to make people see something they don't ordinarily.
    *   maybe something about spotting existing surveillance devices?
    *   and also using them somehow?
    *   but ideally without dependance on a particular type/model of surveillance
    *   **EXAMPLE**
        1.  see a camera
        2.  see that another player is seen by that camera
        3.  *beat them* some type of way
            *   maybe you *hack into the camera* [lol] and *do something* with the image
            *   or, realistically, maybe you take a picture of the camera seeing the person
*   can't forget: **people!!**

##### List of technologies that are too ephemeral to use:

*   any particular website // platform // non-infrastructural system
    *   any particular brand/model of phone, obviously, but beyond that:
        *   the fact that "phones" are the thing people carry. We certainly won't move away from connectivity, but "phones" are not forever.

#### but on the other

A timeboxed game is waaaaaay easier. I don't have to rely on it catching on organically. I can declare when and where it will be played, and provide necessary support.

I can have materials, costumes, and best-of-all, *complete focus* from the players. For the hour that you're playing, it's the thing you're doing and you won't get distracted. An ongoing game is easy to forget.

### mechanics

*   surveillance
    *   data gathering
        *   photography
        *   observation
        *   listening
            *   remote?
        *   _social media_
    *   analysis
        *   collaboration between surveillors
            *   but frought; maybe construct an iterated prisoner's dillema over the course of the game
            *   sharing information gives the other surveillors a leg up but reveals info // vulnerability
*   gamification
    *   is it too meta for a game to reference the increasing ubiquity/expanding-definition of games?
    *   what would that even mean?
*   coversion
    *   disguise
    *   sneakitude
    *   misinformation ??
        *   through the collaborative framework but how else?
            *   social media!
        *   false pictures?
        *   implicity?
*   *nobody wins*
    *   except maybe a secretly OP `nsa` player
        *   how else to represent gov?
        *   or maybe `facebook` player can see all online crosstalk but can't move irl
        *   **but a durational game can't have discreet player roles.**
*   nomic element?
    *   could represent the `wildcard` power of technology
    *   probably makes the game unnecessarily complex

### references

[the game](http://en.wikipedia.org/wiki/The_Game_(mind_game)) is the OG ongoing pervasive game. It can be explained in a single sentence, but it isn't especially fun or interesting. I wish I knew what made it so sticky.

[the man who was thursday](http://ludocity.org/wiki/The_Man_Who_Was_Thursday) incorporates collaborative data-gathering within an ambient background event

[poets vs policemen](http://ludocity.org/wiki/Poets_versus_Policemen) incorporates a disproportionately powerful government saboteur

[privacy is dead](http://ludocity.org/wiki/Privacy_Is_Dead) incorporates trading misinformation, bluffing, and no ordained strategy. Fails because of the trivial prechosen data.

[double agent / watch your back](http://ludocity.org/wiki/Double_Agent_/_Watch_Your_Back) totally nails the doubt around whom you can trust. Any team mate could be bluffing.

[paparazzi (coap ny)](http://comeoutandplay.org/2009_paparazzi.php) successfully incorporates GPS tracking // tech-data

[paparazzi (sandpit)](http://ludocity.org/wiki/Paparazzi) has better role-playing, with a swarm mentality rather than small teams. The feeling of being stalked is more pervasive.

[schniper](http://ludocity.org/wiki/Schniper) successfully implements 1v1 same-role surveilance // sneaking, *with* walkie taklies.

[birdman fancyman](http://www.urbandictionary.com/define.php?term=Bird-Man+%5Bthe+game%5D) uses rules that rhyme to help the game maintain consistancy country-wide. induces a constant feeling of fear, but makes you avoid looking at people rather than surveil them per se. Even so, the birdman role feels kinda surveilly

[successful apps fill gaps](http://rhizome.org/editorial/2014/apr/4/successful-apps-fill-gaps/) is an article in Rhizome about how simplicity makes things stickier


