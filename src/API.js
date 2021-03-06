const STATE_IMAGES = {
  TT: "https://upload.wikimedia.org/wikipedia/commons/5/55/IN-DL.svg",
  UN: "https://upload.wikimedia.org/wikipedia/commons/5/55/IN-DL.svg",
  MH: "https://upload.wikimedia.org/wikipedia/commons/1/16/IN-MH.svg",
  TN: "https://upload.wikimedia.org/wikipedia/commons/1/14/IN-TN.svg",
  DL: "https://upload.wikimedia.org/wikipedia/commons/5/55/IN-DL.svg",
  GJ: "https://upload.wikimedia.org/wikipedia/commons/1/1e/IN-GJ.svg",
  RJ: "https://upload.wikimedia.org/wikipedia/commons/c/cd/IN-RJ.svg",
  MP: "https://upload.wikimedia.org/wikipedia/commons/9/91/IN-MP.svg",
  UP: "https://upload.wikimedia.org/wikipedia/commons/9/91/IN-UP.svg",
  WB: "https://upload.wikimedia.org/wikipedia/commons/c/c7/IN-WB.svg",
  AP: "https://upload.wikimedia.org/wikipedia/commons/a/a8/IN-AP.svg",
  BR: "https://upload.wikimedia.org/wikipedia/commons/c/cd/IN-BR.svg",
  KA: "https://upload.wikimedia.org/wikipedia/commons/4/42/IN-KA.svg",
  PB: "https://upload.wikimedia.org/wikipedia/commons/1/10/IN-PB.svg",
  TG: "https://upload.wikimedia.org/wikipedia/commons/a/ae/IN-TG.svg",
  JK:
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/IN-JK_%282019%29.svg",
  OR: "https://upload.wikimedia.org/wikipedia/commons/2/2e/IN-OR.svg",
  HR: "https://upload.wikimedia.org/wikipedia/commons/c/cf/IN-HR.svg",
  KL: "https://upload.wikimedia.org/wikipedia/commons/4/4b/IN-KL.svg",
  AS: "https://upload.wikimedia.org/wikipedia/commons/8/80/IN-AS.svg",
  UT: "https://upload.wikimedia.org/wikipedia/commons/d/de/IN-UT.svg",
  JH: "https://upload.wikimedia.org/wikipedia/commons/1/19/IN-JH.svg",
  CT: "https://upload.wikimedia.org/wikipedia/commons/0/0d/IN-CT.svg",
  CH: "https://upload.wikimedia.org/wikipedia/commons/f/f3/IN-CH.svg",
  HP: "https://upload.wikimedia.org/wikipedia/commons/5/54/IN-HP.svg",
  TR: "https://upload.wikimedia.org/wikipedia/commons/e/e8/IN-TR.svg",
  GA: "https://upload.wikimedia.org/wikipedia/commons/4/4b/IN-GA.svg",
  LA: "https://upload.wikimedia.org/wikipedia/commons/0/0f/IN-LA.svg",
  PY: "https://upload.wikimedia.org/wikipedia/commons/b/b7/IN-PY.svg",
  MN: "https://upload.wikimedia.org/wikipedia/commons/0/0e/IN-MN.svg",
  AN: "https://upload.wikimedia.org/wikipedia/commons/9/9d/IN-AN.svg",
  ML: "https://upload.wikimedia.org/wikipedia/commons/e/ef/IN-ML.svg",
  NL: "https://upload.wikimedia.org/wikipedia/commons/4/4f/IN-NL.svg",
  DN: "https://upload.wikimedia.org/wikipedia/commons/0/0a/IN-DN.svg",
  AR: "https://upload.wikimedia.org/wikipedia/commons/4/40/IN-AR.svg",
  MZ: "https://upload.wikimedia.org/wikipedia/commons/3/37/IN-MZ.svg",
  SK: "https://upload.wikimedia.org/wikipedia/commons/c/ce/IN-SK.svg",
  LD: "https://upload.wikimedia.org/wikipedia/commons/1/1b/IN-LD.svg",
};

export const getStateImageUrl = (state_code) => STATE_IMAGES[state_code];

export const fetchStateDetails = async () => {
  const url = "https://api.covid19india.org/data.json";

  let response = await fetch(url);
  let data = await response.json();
  return data.statewise;
};

export const fetchDistrictDetails = async () => {
  const url = "https://api.covid19india.org/state_district_wise.json";

  let response = await fetch(url);
  let data = await response.json();
  return data;
};
