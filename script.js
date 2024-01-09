const itemContainer = document.getElementById("item-container");
const itemCounters = document.getElementById("item-counters");
const rarityIndex = document.getElementById("rarity-index");

let luckBoost = 1;

function changeBackgroundColor() {
  // Get the input value
  var hexColor = document.getElementById("colorInput").value;

  // Validate if the input is a valid hex color
  if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
    // Set the background color
    document.body.style.backgroundColor = hexColor;
  }
}

function changeInventoryColor() {
  // Get the input value
  var hexColor = document.getElementById("invInput").value;

  // Validate if the input is a valid hex color
  if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
    // Set the background color of the container
    document.getElementsByClassName("container")[0].style.backgroundColor =
      hexColor;
  }
}

// you can mod this game if you want just give me credit k thx byee

const items = [
  { name: "the true final boat", rarity: luckBoost / 999999999999999 },
  { name: "haribo gummy bear", rarity: luckBoost / 202000000000000 },
  { name: "Deverium Biasium", rarity: luckBoost / 100000000000000 },
  { name: "Tom", rarity: luckBoost / 22000000000000 },
  { name: "ETHEREAL QUANDERIGUS", rarity: luckBoost / 10000000000000 },
  { name: "hydrogen bomb vs coughing baby", rarity: luckBoost / 1000000000000 },
  { name: "gyatcore-pinephrine", rarity: luckBoost / 999999999999 },
  { name: "super deadly seeking eyes that stare at you until you pass out", rarity: luckBoost / 999999999999 },
  { name: "the true krabby Patty's recipe", rarity: luckBoost / 999999999999 },
  { name: "IM NOT LOOKSMAXXING IM FANUMTAXXING", rarity: luckBoost / 999999999999 },
  { name: "steamed ham", rarity: luckBoost / 947328938274 },
  { name: "🍔", rarity: luckBoost / 777777777777 },
  { name: "femboy crystal", rarity: luckBoost / 686686686686 },
  { name: "MY DAD OWNS ROBLOX 🤑", rarity: luckBoost / 288272673027 },
  { name: "bomb vs baby", rarity: luckBoost / 281258712819 },
  { name: "raw hotdog", rarity: luckBoost / 150000000000 },
  { name: "Lobotomy", rarity: luckBoost / 50000000000 },
  { name: "the true french baguette", rarity: luckBoost / 40000000009 },
  { name: "everything is gone crystal", rarity: luckBoost / 19000000000 },
  { name: "the seventeenth ore", rarity: luckBoost / 17000000000 },
  { name: "Hawaii: Part IV", rarity: luckBoost / 12120120120 },
  { name: "the last boat", rarity: luckBoost / 10000000000 },
  { name: "😍", rarity: luckBoost / 9292922929 },
  { name: "walter white", rarity: luckBoost / 8923908103 },
  { name: "2.2 singularity", rarity: luckBoost / 2200000000 },
  { name: "old man emoji", rarity: luckBoost / 1500000000 },
  { name: "carbingle boamian", rarity: luckBoost / 1400000000 },
  { name: "12345 noches con alfredo", rarity: luckBoost / 1234500000},
  { name: "BOATS UNITE", rarity: luckBoost / 1111111111},
  { name: "moderator crystal", rarity: luckBoost / 1000000003 },
  { name: "REAL boat", rarity: luckBoost / 1000000000 },
  { name: "Pookie Crystal :3", rarity: luckBoost / 999999999 },
  { name: "biggest stone in the world (its big i think)", rarity: luckBoost / 999999999 },
  { name: "smallest stone in the world (its small i think)", rarity: luckBoost / 999999999 },
  { name: "adrenaline", rarity: luckBoost / 999999997 },
  { name: "chess pulsar", rarity: luckBoost / 975318642 },
  { name: "Ban Crystal", rarity: luckBoost / 765000020 },
  { name: "WHAT crystal", rarity: luckBoost / 740000000 },
  { name: "Super Altered Snowstrobe", rarity: luckBoost / 700000000 },
  { name: "super stinky socks", rarity: luckBoost / 69691281 },
  { name: "krill fish from sad geido", rarity: luckBoost / 666251821 },
  { name: "sailent", rarity: luckBoost / 621220000 },
  { name: "weaponized battle toaster", rarity: luckBoost / 555555555 },
  { name: "checkmate crystal", rarity: luckBoost / 500000003 },
  { name: "en passant crystal", rarity: luckBoost / 500000002 },
  { name: "the super altered racoon farting crystal", rarity: luckBoost / 500000000 },
  { name: "common crystal", rarity: luckBoost / 300000000 },
  { name: "submit rng game for an stuff", rarity: luckBoost / 205000000 },
  { name: "ding fries are done", rarity: luckBoost / 200000000 },
  { name: "halflife 2 stalker screamer crystal", rarity: luckBoost / 195666666 },
  { name: "old mac", rarity: luckBoost / 150000000 },
  { name: "ding", rarity: luckBoost / 150000000 },
  { name: "Krogglerine", rarity: luckBoost / 125692192 },
  { name: "nuclear strikium", rarity: luckBoost / 125000000 },
  { name: "the stew", rarity: luckBoost / 111111111 },
  { name: "Clown nose verse", rarity: luckBoost / 100000000 },
  { name: "golden crown of chaos", rarity: luckBoost / 100000000 },
  { name: "boat v8", rarity: luckBoost / 100000000 },
  { name: "stupid baby", rarity: luckBoost / 100000000 },
  { name: "ohio fanum gyatt sigma 🤑🤑", rarity: luckBoost / 99999999 },
  { name: "nice find", rarity: luckBoost / 99999999 },
  { name: "blue doctor", rarity: luckBoost / 1/98571036.7 },
  { name: "Shiny Rainbow Titanic Fingulated Tonsil Trevor", rarity: luckBoost / 90000000 },
  { name: "Transgenderine", rarity: luckBoost / 77000777 },
  { name: "helicopter ium", rarity: luckBoost / 63222222 },
  { name: "ultra bomb kit", rarity: luckBoost / 52251121 },
  { name: "fladingle mobile", rarity: luckBoost / 50000000 },
  { name: "Hood of Heroes crystal", rarity: luckBoost / 30000000 },
  { name: "crewmate costume in real life", rarity: luckBoost / 29000000 },
  { name: "bucket of wet slop", rarity: luckBoost / 28000000 },
  { name: "John: ore edition", rarity: luckBoost / 11111111 },
  { name: "a really really rare pebble", rarity: luckBoost / 10000000 },
  { name: "🤑", rarity: luckBoost / 10000000 },
  { name: "boat v7", rarity: luckBoost / 10000000 },
  { name: "sparkle", rarity: luckBoost / 10000000 },
  { name: "my gyatt rumbled", rarity: luckBoost / 8283929 },
  { name: "the big bidi", rarity: luckBoost / 8000000 },
  { name: "kevin", rarity: luckBoost / 5000000 },
  { name: "William", rarity: luckBoost / 2000000 },
  { name: "10 dollar shipping", rarity: luckBoost / 1000000 },
  { name: "boat v6", rarity: luckBoost / 1000000 },
  { name: "female skibidi", rarity: luckBoost / 1000000 },
  { name: "skibidi toilet plushie", rarity: luckBoost / 1000000 },
  { name: "John's legendary tome of janitor business", rarity: luckBoost / 870000 },
  { name: "purplx", rarity: luckBoost / 739000 },
  { name: "random rotating spinkler", rarity: luckBoost / 700000 },
  { name: "dancing airpods", rarity: luckBoost / 600000 },
  { name: "Emoji if you look at it hard enough", rarity: luckBoost / 502000 },
  { name: "joeverite", rarity: luckBoost / 460500 },
  { name: "obama icespice", rarity: luckBoost / 400000 },
  { name: "ores if they were awesome", rarity: luckBoost / 252520 },
  { name: "UGC Dominus", rarity: luckBoost / 125000 },
  { name: "legendary cyan pebble", rarity: luckBoost / 110000 },
  { name: "boat v5", rarity: luckBoost / 100000 },
  { name: "JOHN", rarity: luckBoost / 91378 },
  { name: "air conditioner ium", rarity: luckBoost / 53000 },
  { name: "IT IONIZED", rarity: luckBoost / 34567 },
  { name: "12/28/23 incident", rarity: luckBoost / 31000 },
  { name: "hacker", rarity: luckBoost / 25000 },
  { name: "dolla dolla bills💰💰💰💸💸💸", rarity: luckBoost / 15000 },
  { name: "slightly functional toaster", rarity: luckBoost / 12500 },
  { name: "boat v4", rarity: luckBoost / 10000 },
  { name: "farty party", rarity: luckBoost / 10000 },
  { name: "molten water (how is this possible)", rarity: luckBoost / 8150 },
  { name: "fragmental core", rarity: luckBoost / 7500 },
  { name: "PvZ forehead 😱😭", rarity: luckBoost / 4000 },
  { name: "online spanish lessons", rarity: luckBoost / 2300 },
  { name: "THESE WILL BE ORES IN 2014", rarity: luckBoost / 2014 },
  { name: "poor people", rarity: luckBoost / 2000 },
  { name: "peanut plant", rarity: luckBoost / 1992 },
  { name: "boat v3", rarity: luckBoost / 1000 },
  { name: "fanny pack", rarity: luckBoost / 1000 },
  { name: "police gun but its mad (very salt)", rarity: luckBoost / 989 },
  { name: "prplx", rarity: luckBoost / 739 },
  { name: "cat", rarity: luckBoost / 561 },
  { name: "methane in the air", rarity: luckBoost / 399 },
  { name: "pro", rarity: luckBoost / 250 },
  { name: "roblox studio ball metadata", rarity: luckBoost / 200 },
  { name: "$2 crystal (so poor)", rarity: luckBoost / 170 },
  { name: "Pantone 448 C", rarity: luckBoost / 170 },
  { name: "i like mushrooms more than u", rarity: luckBoost / 110 },
  { name: "ik someone who likes mushrooms more than u", rarity: luckBoost / 110 },
  { name: "boat v2", rarity: luckBoost / 100 },
  { name: "SMALLEST STONE IN THE WORLD", rarity: luckBoost / 100 },
  { name: ":plonk:", rarity: luckBoost / 100 },
  { name: "a really rare mineral", rarity: luckBoost / 100 },
  { name: ":plink:", rarity: luckBoost / 75 },
  { name: "slightly saturated copper", rarity: luckBoost / 60 },
  { name: "kevin macleod", rarity: luckBoost / 50 },
  { name: "default roblox sparkle", rarity: luckBoost / 33 },
  { name: "noob", rarity: luckBoost / 25 },
  { name: "piece of plastic over there and around the corner", rarity: luckBoost / 25 },
  { name: "Shiny Quarter", rarity: luckBoost / 25 },
  { name: "robert topalla", rarity: luckBoost / 20 },
  { name: "rublux boolleey storey", rarity: luckBoost / 15 },
  { name: "mr krabs figurine", rarity: luckBoost / 13 },
  { name: "SUPERFICIAL DINGLE", rarity: luckBoost / 12 },
  { name: "boat v1", rarity: luckBoost / 10 },
  { name: "really rare ore", rarity: luckBoost / 10 },
  { name: "seegma", rarity: luckBoost / 10 },
  { name: "The entire country of St Vincent & the Grenadines", rarity: luckBoost / 8 },
  { name: "cuddly buddy", rarity: luckBoost / 7 },
  { name: "schlawgite", rarity: luckBoost / 6 },
  { name: "ParticleEmitter", rarity: luckBoost / 5 },
  { name: "number", rarity: luckBoost / 2 },
  { name: "letter", rarity: luckBoost / 1 },
];

let itemCounts = {};

// Add a flag to indicate whether a rare item has been found
let rareItemFound = false;

items.forEach((item) => {
  itemCounts[item.name] = 0;
});

let cumulativeProbabilities = calculateCumulativeProbabilities();

function getRandomItem() {
  const randomValue = Math.random();
  let low = 0;
  let high = items.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (randomValue >= cumulativeProbabilities[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return items[low];
}

function calculateCumulativeProbabilities() {
  const cumulativeProbabilities = [];
  let cumulativeProbability = 0;

  for (const item of items) {
    cumulativeProbability += item.rarity;
    cumulativeProbabilities.push(cumulativeProbability);
  }

  return cumulativeProbabilities.map((value) => value / cumulativeProbability);
}

function updateCumulativeProbabilities() {
  cumulativeProbabilities = calculateCumulativeProbabilities();
}

function collectItem() {
  const item = getRandomItem();
  itemCounts[item.name]++;

  updateItemDisplay();
  saveGameState(); // Save the game state after collecting items
}

// Call this function whenever the items list changes
updateCumulativeProbabilities();

function saveGameState() {
  try {
    localStorage.setItem("itemCounts", JSON.stringify(itemCounts));
  } catch (error) {}
}

function loadGameState() {
  try {
    const savedItemCounts = localStorage.getItem("itemCounts");

    if (savedItemCounts) {
      itemCounts = JSON.parse(savedItemCounts); // Assign the parsed game state to itemCounts
      updateItemDisplay();
    } else {
    }
  } catch (error) {}
}

function updateItemDisplay() {
  itemCounters.innerHTML = "";

  items.forEach((item) => {
    if (itemCounts[item.name] > 0) {
      const itemCounter = document.createElement("p");
      itemCounter.textContent = `${item.name}: ${formatNumberWithCommas(
        itemCounts[item.name]
      )}`;
      itemCounters.appendChild(itemCounter);
    }
  });
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateRarityIndex() {
  rarityIndex.innerHTML = "<h2>Index</h2> <h3>the super rare things are jokes, they aren't meant to be obtainable <3</h3>";

  items.forEach((item) => {
    const rarityEntry = document.createElement("p");
    const rarityValueFormatted = formatNumberWithCommas(
      Math.round(1 / item.rarity)
    );
    rarityEntry.textContent = `${item.name}: 1/${rarityValueFormatted}`;
    rarityIndex.appendChild(rarityEntry);
  });
}

setInterval(updateItemDisplay, 10);
setInterval(saveGameState, 10);

// Initialize the rarity index
updateRarityIndex();

// Load the game state
loadGameState();

// Set up a timer to automatically collect items super fast
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
setInterval(collectItem, 0.0000000000000000000001);
