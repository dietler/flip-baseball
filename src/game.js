const teams = [
  {
    id: "moonshot-meteors",
    name: "Moonshot Meteors",
    initials: "MM",
    primary: "#7c3aed",
    glow: "rgba(124, 58, 237, 0.42)",
    motto: "Launching souvenirs into orbit.",
    lineup: [
      ["Nova Vega", "CF"], ["Jax Comet", "SS"], ["Luna Sparks", "2B"],
      ["Orion Blast", "RF"], ["Mira Moon", "1B"], ["Cosmo Quinn", "3B"],
      ["Rhea Rocket", "LF"], ["Atlas Stone", "C"], ["Pip Starlight", "P"]
    ]
  },
  {
    id: "bayou-banjos",
    name: "Bayou Banjos",
    initials: "BB",
    primary: "#16a34a",
    glow: "rgba(22, 163, 74, 0.42)",
    motto: "Swampy swings with a perfect twang.",
    lineup: [
      ["Remy Reed", "SS"], ["Clara Cypress", "LF"], ["Gator Grace", "1B"],
      ["Beau Banjo", "3B"], ["Moss Malone", "RF"], ["June Jambalaya", "2B"],
      ["Tilly Toad", "CF"], ["Otis Okra", "C"], ["Nellie Nightjar", "P"]
    ]
  },
  {
    id: "canyon-cactus",
    name: "Canyon Cactus",
    initials: "CC",
    primary: "#ea580c",
    glow: "rgba(234, 88, 12, 0.42)",
    motto: "Prickly defense, desert-hot bats.",
    lineup: [
      ["Sage Arroyo", "2B"], ["Dusty Mesa", "CF"], ["Ruby Rattler", "SS"],
      ["Hank Highnoon", "1B"], ["Penny Prickle", "3B"], ["Cal Caldera", "RF"],
      ["Sunny Saguaro", "LF"], ["Ivy Ironwood", "C"], ["Rio Flint", "P"]
    ]
  },
  {
    id: "harbor-hushpuppies",
    name: "Harbor Hushpuppies",
    initials: "HH",
    primary: "#0284c7",
    glow: "rgba(2, 132, 199, 0.42)",
    motto: "Small-town charm, big-league bark.",
    lineup: [
      ["Finn Ferry", "CF"], ["Mabel Marina", "2B"], ["Skipper Chowder", "C"],
      ["Pearl Pier", "1B"], ["Benny Buoy", "RF"], ["Coral Cove", "3B"],
      ["Tug McGee", "SS"], ["Sally Seaglass", "LF"], ["Wade Wake", "P"]
    ]
  },
  {
    id: "thunder-tacos",
    name: "Thunder Tacos",
    initials: "TT",
    primary: "#facc15",
    glow: "rgba(250, 204, 21, 0.42)",
    motto: "Crunch-time power from the cleanup spot.",
    lineup: [
      ["Tito Tempest", "SS"], ["Mina Masa", "CF"], ["Churro Cruz", "RF"],
      ["Gus Guac", "1B"], ["Pepper Paz", "3B"], ["Lola Lime", "LF"],
      ["Nacho Navarro", "2B"], ["Rosa Roja", "C"], ["Stormy Salsa", "P"]
    ]
  },
  {
    id: "frostbite-foxes",
    name: "Frostbite Foxes",
    initials: "FF",
    primary: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.42)",
    motto: "Cool heads, quick paws, frozen ropes.",
    lineup: [
      ["Kira North", "LF"], ["Felix Flurry", "2B"], ["Aurora Snow", "SS"],
      ["Brock Blizzard", "1B"], ["Tessa Tundra", "CF"], ["Niko Nippy", "RF"],
      ["Vera Vixen", "3B"], ["Iggy Ice", "C"], ["Polly Polar", "P"]
    ]
  },
  {
    id: "neon-narwhals",
    name: "Neon Narwhals",
    initials: "NN",
    primary: "#db2777",
    glow: "rgba(219, 39, 119, 0.42)",
    motto: "Undersea style with electric speed.",
    lineup: [
      ["Nia Neon", "CF"], ["Mako Marquee", "SS"], ["Glimmer Gill", "2B"],
      ["Trix Tide", "RF"], ["Opal Ocean", "1B"], ["Barry Brine", "3B"],
      ["Daphne Deep", "LF"], ["Cecil Current", "C"], ["Wally Wave", "P"]
    ]
  },
  {
    id: "prairie-pickles",
    name: "Prairie Pickles",
    initials: "PP",
    primary: "#84cc16",
    glow: "rgba(132, 204, 22, 0.42)",
    motto: "Dilly rallies from the heartland.",
    lineup: [
      ["Dill Dawson", "SS"], ["Maisie Meadow", "2B"], ["Pickle Pete", "1B"],
      ["Briney Brooks", "RF"], ["Vinegar Val", "3B"], ["Clover Cain", "CF"],
      ["Harper Haystack", "LF"], ["Jasper Jar", "C"], ["Fern Ferment", "P"]
    ]
  }
].map((team) => ({
  ...team,
  lineup: team.lineup.map(([name, position], index) => ({ id: `${team.id}-${index}`, name, position }))
}));

const playDeckTemplate = [
  ...Array(12).fill({ type: "groundout", label: "Ground Out", outs: 1, bases: 0, description: "A chopper is scooped cleanly for an out." }),
  ...Array(9).fill({ type: "popout", label: "Pop Out", outs: 1, bases: 0, description: "A sky-high popup settles into a fielder's glove." }),
  ...Array(12).fill({ type: "single", label: "Single", outs: 0, bases: 1, hit: true, description: "A sharp liner drops into the outfield grass." }),
  ...Array(6).fill({ type: "double", label: "Double", outs: 0, bases: 2, hit: true, description: "The ball rattles into the gap for extra bases." }),
  ...Array(3).fill({ type: "triple", label: "Triple", outs: 0, bases: 3, hit: true, description: "A rocket to the corner sends everyone sprinting." }),
  ...Array(4).fill({ type: "homerun", label: "Home Run", outs: 0, bases: 4, hit: true, description: "No doubt about it — that one is gone!" }),
  ...Array(1).fill({ type: "insidepark", label: "Inside-the-Park HR", outs: 0, bases: 4, hit: true, description: "Chaos in the outfield turns into a wild lap around the bases." }),
  ...Array(7).fill({ type: "walk", label: "Walk", outs: 0, bases: 1, walk: true, description: "Ball four! The batter trots to first." })
];

const baseCoordinates = {
  home: { left: 50, top: 82 },
  first: { left: 71, top: 61 },
  second: { left: 50, top: 40 },
  third: { left: 29, top: 61 }
};

const baseOrder = ["home", "first", "second", "third"];
const state = {
  teams: { away: teams[0], home: teams[1] },
  half: "away",
  inning: 1,
  outs: 0,
  deck: [],
  bases: { first: null, second: null, third: null },
  lineupIndex: { away: 0, home: 0 },
  score: null,
  gameOver: false,
  playNumber: 0
};

const $ = (selector) => document.querySelector(selector);
const teamGrid = $("#teamGrid");
const awaySelect = $("#awayTeam");
const homeSelect = $("#homeTeam");
const runnerLayer = $("#runnerLayer");
const ball = $("#ball");

function init() {
  renderTeamPicker();
  $("#startGame").addEventListener("click", startGame);
  $("#newGame").addEventListener("click", () => {
    $("#gameScreen").classList.add("hidden");
    $("#teamSelect").classList.remove("hidden");
  });
  $("#flipCard").addEventListener("click", flipCard);
}

function renderTeamPicker() {
  teams.forEach((team, index) => {
    [awaySelect, homeSelect].forEach((select) => {
      const option = document.createElement("option");
      option.value = team.id;
      option.textContent = team.name;
      select.append(option);
    });

    const card = document.createElement("article");
    card.className = "team-card";
    card.style.setProperty("--team-primary", team.primary);
    card.style.setProperty("--team-glow", team.glow);
    card.innerHTML = `
      <div class="team-topline">
        <div class="logo-badge" aria-hidden="true">${team.initials}</div>
        <div>
          <h2>${team.name}</h2>
          <p>${team.motto}</p>
        </div>
      </div>
      <ul class="lineup-list">
        ${team.lineup.map((player) => `<li><span>${player.name}</span><strong>${player.position}</strong></li>`).join("")}
      </ul>
    `;
    teamGrid.append(card);
    if (index === 1) homeSelect.value = team.id;
  });
}

function startGame() {
  const away = teams.find((team) => team.id === awaySelect.value);
  let home = teams.find((team) => team.id === homeSelect.value);
  if (away.id === home.id) {
    home = teams.find((team) => team.id !== away.id);
    homeSelect.value = home.id;
  }

  state.teams = { away, home };
  state.half = "away";
  state.inning = 1;
  state.outs = 0;
  state.deck = shuffleDeck();
  state.bases = { first: null, second: null, third: null };
  state.lineupIndex = { away: 0, home: 0 };
  state.score = createScorebook();
  state.gameOver = false;
  state.playNumber = 0;
  $("#playLog").innerHTML = "";
  $("#lastCard").textContent = "Flip to begin";
  $("#cardDescription").textContent = "The batter is waiting for the pitch.";
  $("#flipCard").disabled = false;
  $("#teamSelect").classList.add("hidden");
  $("#gameScreen").classList.remove("hidden");
  renderAll();
  logPlay(`Welcome to the ballpark! ${away.name} visit the ${home.name}.`);
}

function createScorebook() {
  return {
    away: { innings: Array(9).fill(null), runs: 0, hits: 0, errors: 0 },
    home: { innings: Array(9).fill(null), runs: 0, hits: 0, errors: 0 }
  };
}

function shuffleDeck() {
  return playDeckTemplate
    .map((card, index) => ({ ...card, cardId: `${card.type}-${index}-${Math.random()}` }))
    .sort(() => Math.random() - 0.5);
}

function flipCard() {
  if (state.gameOver) return;
  if (state.deck.length === 0) state.deck = shuffleDeck();

  const card = state.deck.pop();
  const teamKey = state.half;
  const batter = getCurrentBatter();
  state.lineupIndex[teamKey] = (state.lineupIndex[teamKey] + 1) % 9;
  ensureInningSlot(teamKey);

  animateBall(card.type);

  let runsScored = 0;
  if (card.outs) {
    state.outs += card.outs;
  } else if (card.walk) {
    runsScored = walkBatter(batter);
  } else {
    runsScored = advanceRunners(card.bases, batter);
    state.score[teamKey].hits += 1;
  }

  if (runsScored > 0) {
    state.score[teamKey].runs += runsScored;
    state.score[teamKey].innings[state.inning - 1] += runsScored;
  }

  if (teamKey === "home" && state.inning >= 9 && state.score.home.runs > state.score.away.runs) {
    finishGame();
  }

  state.playNumber += 1;
  $("#lastCard").textContent = card.label;
  $("#cardDescription").textContent = card.description;
  logPlay(`${inningText()} — ${batter.name} (${batter.position}) flips ${card.label}${runsScored ? `, scoring ${runsScored}` : ""}.`);

  if (state.outs >= 3) changeSides();
  renderAll();
}

function getCurrentBatter() {
  return state.teams[state.half].lineup[state.lineupIndex[state.half]];
}

function ensureInningSlot(teamKey) {
  const slot = state.inning - 1;
  if (state.score[teamKey].innings[slot] === null) state.score[teamKey].innings[slot] = 0;
}

function advanceRunners(bases, batter) {
  const occupied = [
    { baseIndex: 3, runner: state.bases.third },
    { baseIndex: 2, runner: state.bases.second },
    { baseIndex: 1, runner: state.bases.first },
    { baseIndex: 0, runner: batter }
  ].filter((entry) => entry.runner);

  state.bases = { first: null, second: null, third: null };
  let runs = 0;

  occupied.forEach(({ baseIndex, runner }) => {
    const destination = baseIndex + bases;
    if (destination >= 4) {
      runs += 1;
      showScoredRunner(runner);
    } else {
      state.bases[baseOrder[destination]] = runner;
    }
  });

  return runs;
}

function walkBatter(batter) {
  let runs = 0;
  if (state.bases.first && state.bases.second && state.bases.third) {
    showScoredRunner(state.bases.third);
    runs += 1;
    state.bases.third = state.bases.second;
    state.bases.second = state.bases.first;
    state.bases.first = batter;
  } else if (state.bases.first && state.bases.second) {
    state.bases.third = state.bases.second;
    state.bases.second = state.bases.first;
    state.bases.first = batter;
  } else if (state.bases.first) {
    state.bases.second = state.bases.first;
    state.bases.first = batter;
  } else {
    state.bases.first = batter;
  }
  return runs;
}

function changeSides() {
  state.outs = 0;
  state.bases = { first: null, second: null, third: null };

  if (state.half === "away") {
    state.half = "home";
    ensureInningSlot("home");
    if (state.inning === 9 && state.score.home.runs > state.score.away.runs) finishGame();
  } else {
    if (state.inning >= 9 && state.score.home.runs !== state.score.away.runs) {
      finishGame();
      return;
    }
    state.half = "away";
    state.inning += 1;
    if (state.inning > 9) extendScorebookForExtras();
    ensureInningSlot("away");
  }
}

function extendScorebookForExtras() {
  state.score.away.innings.push(null);
  state.score.home.innings.push(null);
}

function finishGame() {
  state.gameOver = true;
  $("#flipCard").disabled = true;
  const winnerKey = state.score.away.runs > state.score.home.runs ? "away" : "home";
  logPlay(`Final: ${state.teams[winnerKey].name} win ${state.score.away.runs}-${state.score.home.runs}!`);
}

function renderAll() {
  renderScoreboard();
  renderGameInfo();
  renderRunners();
  renderDugouts();
}

function renderScoreboard() {
  const innings = Math.max(9, state.score.away.innings.length, state.score.home.innings.length);
  const header = $("#inningHeader");
  header.innerHTML = `<th>Team</th>${Array.from({ length: innings }, (_, i) => `<th>${i + 1}</th>`).join("")}<th>R</th><th>H</th><th>E</th>`;

  $("#scoreRows").innerHTML = ["away", "home"].map((key) => {
    const club = state.score[key];
    const cells = Array.from({ length: innings }, (_, i) => `<td>${club.innings[i] ?? ""}</td>`).join("");
    return `<tr><td>${teamLogoMarkup(state.teams[key])} ${state.teams[key].name}</td>${cells}<td>${club.runs}</td><td>${club.hits}</td><td>${club.errors}</td></tr>`;
  }).join("");
}

function renderGameInfo() {
  $("#halfInning").textContent = state.half === "away" ? "Top" : "Bottom";
  $("#inningNumber").textContent = state.inning;
  $("#outsCount").textContent = state.outs;
  $("#deckCount").textContent = state.deck.length;
  const batter = getCurrentBatter();
  $("#batterName").textContent = state.gameOver ? "Final" : batter.name;
  $("#batterMeta").textContent = state.gameOver ? "Game complete" : `${state.teams[state.half].name} • ${batter.position}`;
  $("#baseState").textContent = ["first", "second", "third"].filter((base) => state.bases[base]).map(labelBase).join(" / ") || "Empty";
}

function renderRunners() {
  const activeRunnerIds = new Set();

  Object.entries(state.bases).forEach(([base, runner]) => {
    if (!runner) return;
    activeRunnerIds.add(runner.id);
    const coords = baseCoordinates[base];
    let el = runnerLayer.querySelector(`[data-runner-id="${runner.id}"]`);

    if (!el) {
      el = document.createElement("div");
      el.className = "runner";
      el.dataset.runnerId = runner.id;
      el.style.left = `${baseCoordinates.home.left}%`;
      el.style.top = `${baseCoordinates.home.top}%`;
      runnerLayer.append(el);
    }

    el.style.setProperty("--runner-color", state.teams[state.half].primary);
    el.title = `${runner.name} on ${labelBase(base)}`;
    el.textContent = runner.name.split(" ").map((part) => part[0]).join("");
    requestAnimationFrame(() => {
      el.style.left = `${coords.left}%`;
      el.style.top = `${coords.top}%`;
    });
  });

  runnerLayer.querySelectorAll(".runner:not(.scored)").forEach((el) => {
    if (!activeRunnerIds.has(el.dataset.runnerId)) el.remove();
  });
}

function showScoredRunner(runner) {
  const el = document.createElement("div");
  el.className = "runner scored";
  el.style.left = `${baseCoordinates.home.left}%`;
  el.style.top = `${baseCoordinates.home.top}%`;
  el.textContent = runner.name.split(" ").map((part) => part[0]).join("");
  runnerLayer.append(el);
  setTimeout(() => el.remove(), 900);
}

function renderDugouts() {
  ["away", "home"].forEach((key) => {
    const node = $(`#${key}Dugout`);
    const team = state.teams[key];
    node.innerHTML = `<strong>${teamLogoMarkup(team)} ${team.name}</strong>${team.lineup.slice(0, 5).map((player) => `<span>${player.position} ${player.name}</span>`).join("")}`;
  });
}

function animateBall(type) {
  ball.className = `ball hit-${type}`;
  ball.classList.remove("hidden");
  ball.style.left = `${baseCoordinates.home.left}%`;
  ball.style.top = `${baseCoordinates.home.top}%`;
  setTimeout(() => ball.classList.add("hidden"), 1200);
}

function teamLogoMarkup(team) {
  return `<span aria-hidden="true" style="color:${team.primary};font-weight:950">${team.initials}</span>`;
}

function labelBase(base) {
  return { first: "1B", second: "2B", third: "3B" }[base] || base;
}

function inningText() {
  return `${state.half === "away" ? "Top" : "Bottom"} ${state.inning}`;
}

function logPlay(message) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = message;
  $("#playLog").append(entry);
}

init();
