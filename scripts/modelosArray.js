var modelos = [

    // logos
    logo,
    logomwd,

    // fnaf 1
    freddy,
    bonnie,
    chica,
    mrCupcake,
    foxy,

    // fnaf 2
    toyFreddy,
    toyBonnie,
    toyChica,
    toyCupcake,
    mangle,
    balloonBoy,
    puppet,
    witheredFreddy,
    witheredBonnie,
    witheredChica,
    witheredFoxy,
    witheredGoldenFreddy,

    // fnaf 3
    phantomFreddy,
    phantomChica,
    phantomFoxy,
    phantomMangle,
    phantomBalloonBoy,
    phantomPuppet,
    springtrap,

    // fnaf 4
    nightmareFreddy,
    freddles,
    nightmareBonnie,
    nightmareChica,
    nightmareCupcake,
    nightmareFoxy,
    nightmareFredbear,
    nightmare,
    jackOBonnie,
    jackOChica,
    nightmareMangle,
    nightmareBalloonBoy,
    plushtrap,
    nightmarionne,

    // fnaf sl
    circusBaby,
    funtimeFreddy,
    bonBon,
    ballora,
    funtimeFoxy,
    ennard,
    bidybab,
    minireena,

    // fnaf ffps
    trashAndTheGang,
    helpy,
    happyFrog,
    mrHippo,
    pigpatch,
    neddBear,
    orvilleElephant,
    rockstarFreddy,
    rockstarBonnie,
    rockstarChica,
    rockstarFoxy,
    musicMan,
    elChip,
    funtimeChica,
    moltenFreddy,
    scrapBaby,
    scraptrap,
    lefty,

    // fnaf sb
    glamrockFreddy,
    glamrockChica,
    roxanneWolf,
    montgomeryGator,
    shatteredGlamrockChica,
    shatteredRoxanneWolf,
    shatteredMontgomeryGator,
    sun,
    moon,
    glamrockEndo,
    djMusicMan,
    miniMusicMan,
    staffBot,
    securityBot,
    // mop bot skylajade69
    mapBot,
    partyBot,
    chefBot,
    serverBot,
    sewerBot,
    nightmarionneBot,
    cautionBot,
    gregory,
    vanessa,
    vanny,

    // fnaf sbr
    prototypeGlamrockFreddy,
    ruinedGlamrockChica,
    ruinedRoxanneWolf,
    ruinedMontgomeryGator,
    eclipse,
    ruinedMiniMusicMan1,
    ruinedMiniMusicMan2,
    shatteredBot,
    maskBot,
    cassie,
    entity,
    mimic,


    // fnaf 1 (world)
    adventureFreddy,
    adventureBonnie,
    adventureChica,
    adventureFoxy,
    adventureGoldenFreddy,

    // fnaf 2 (world)
    adventureToyFreddy,
    adventureToyBonnie,
    adventureToyChica,
    adventureMangle,
    adventureBalloonBoy,
    adventurePuppet,
    adventureWitheredFreddy,
    adventureWitheredBonnie,
    adventureWitheredChica,
    adventureWitheredFoxy,

    // fnaf 3 (world)
    adventurePhantomFreddy,
    adventurePhantomChica,
    adventurePhantomFoxy,
    adventurePhantomMangle,
    adventurePhantomBalloonBoy,
    adventurePhantomPuppet,
    adventureSpringtrap,

    // fnaf 4 (world)
    adventureNightmareFreddy,
    adventureNightmareBonnie,
    adventureNightmareChica,
    adventureNightmareFoxy,
    adventureNightmareFredbear,
    adventureNightmare,
    adventureJackOBonnie,
    adventureJackOChica,
    adventureNightmareBalloonBoy,
    adventurePlushtrap,
    adventureNightmarionne,

    adventureFuntimeFoxy,
]

var modelosExtras = [
    // Pra Comprar
    moeda3d,
    purpleGuy,
    // Fredbear

    // Pra Encontrar
    // Fnaf 1
    goldenFreddy,
    // endo-01
    poster,

    // Fnaf 2
    // shadow freddy
    // shadow bonnie (ou RWQFSFASXC)
    // endo-02
    // jj
    // paper pals
    mascaraFreddy,

    // Fnaf 3

    // Fnaf 4
    // nightmare endo

    // Fnaf sl
    lolbit,
    bonnet,
    //HandUnit,
    // Elizabeth Afton
    // 8-bit baby
    // Yenndo

    // fnaf ffps
    // candy cadet (aqui ou na seção principal do ffps)
    // Itens de compra (piscina de bolinha, pratos, etc)

    // Fnaf sb
    headChefBot,
    blob,
    burntrap,
    // Fazer blater
    // Faz-camera
    // Faz-watch
    // Mascara vanny
    // Prize box

    // Fnaf sbr
    // Glamrock bonnie
    // mascots
    // mascot mimic
    // candy cadet
    // ruined music man
    // Chica feeder
    // hologram ruined roxy
    // Roxy walkie talky
    // Freddy Talky ruin
    // Faz-Wench

    // Fnaf world
    // 

    // Fnaf filme
    pizzaria,
    springBonnieFilme,
    springBonniePixel,
    balloonBoyFilme,

    // Outros
    ventilador,
    phoneGuy,
    dreadbear,
    // dee dee
    // old man consequences
    // Pit bonnie
    // Drink Clowns
    // mystic hippo
    // barker
    // burnet barker
    // grim foxy
    // Pirate foxy
    // Jackie
    // Jackie's box
    // white tiger
    // Jack o Moon
    // Fnaf AR (skins originais)

    // Pra Encontrar Dourado
    fnaf1Mapa,
    mascaraVanny,
]

modelos = modelos.concat(modelosExtras);
modelos.forEach(modelo => {
    modelo.favoritado = false
    modelo.comLike = false
    modelo.comDislike = false
})
console.log(modelos)

var modelosbd = []
modelos.forEach(modelo => {
    var obj = {
        src: modelo.src,
        likes: 0,
        dislikes: 0
    }
    modelosbd.push(obj)
})
console.log(modelosbd.length)

function cadastrarModels() {
    axios.post("http://localhost:3000/models/cadastrar", {
        modelos: modelosbd
    });
}

(async () => {
    const res = await axios.get(`${API_URL}/models`)
    modelosbd.forEach((modelo, i) => {
        modelo.likes = res.data[i].likes
        modelo.dislikes = res.data[i].dislikes
    })
})()
