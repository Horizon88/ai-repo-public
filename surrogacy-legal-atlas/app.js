const sources = {
  canada: {
    label: "Health Canada",
    url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/biologics-radiopharmaceuticals-genetic-therapies/legislation-guidelines/assisted-human-reproduction/prohibitions-related-surrogacy.html",
  },
  ukGov: {
    label: "GOV.UK",
    url: "https://www.gov.uk/legal-rights-when-using-surrogates-and-donors",
  },
  ukCafcass: {
    label: "Cafcass",
    url: "https://www.cafcass.gov.uk/parent-carer-or-family-member/applying-order-gives-you-parental-responsibility/parental-orders-surrogacy",
  },
  australia: {
    label: "Smartraveller AU",
    url: "https://www.smartraveller.gov.au/before-you-go/activities/surrogacy",
  },
  eu: {
    label: "European Parliament",
    url: "https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2025)769508",
  },
  georgia: {
    label: "Smartraveller Georgia",
    url: "https://www.smartraveller.gov.au/destinations/europe/georgia",
  },
  georgiaLaw: {
    label: "Georgia Health Law",
    url: "https://www.chachava.ge/en/134-Law-of-Georgia/",
  },
  ukraine: {
    label: "Ukraine ART law note",
    url: "https://ukrainesurrogacy.com/the-law/",
  },
  ukraineTravel: {
    label: "Smartraveller Ukraine",
    url: "https://www.smartraveller.gov.au/destinations/europe/ukraine",
  },
  greece2025: {
    label: "Greece 2025 change",
    url: "https://www.growingfamilies.org/blog/major-change-to-greek-surrogacy-laws-what-it-means-for-international-intended-parents/",
  },
  mexicoTravel: {
    label: "Smartraveller Mexico",
    url: "https://www.smartraveller.gov.au/destinations/americas/mexico",
  },
  colombia: {
    label: "Colombia T-968 note",
    url: "https://surrogacycolombia.com/surrogacy-law/",
  },
  colombiaRisk: {
    label: "Colombia risk note",
    url: "https://pageprovan.com.au/should-you-go-to-colombia-for-surrogacy/",
  },
  argentina: {
    label: "Smartraveller Argentina",
    url: "https://www.smartraveller.gov.au/destinations/americas/argentina",
  },
  argentinaLaw: {
    label: "HHR Argentina courts",
    url: "https://www.hhrjournal.org/2023/12/06/assisted-regulation-argentine-courts-address-regulatory-gaps-on-surrogacy/",
  },
  indiaAct: {
    label: "India Act PDF",
    url: "https://prsindia.org/files/bills_acts/acts_parliament/2021/The%20Surrogacy%20%28Regulation%29%20Act%2C%202021.pdf",
  },
  indiaReview: {
    label: "India critique",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9816354/",
  },
  thailand: {
    label: "Thailand ART Act review",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5753847/",
  },
  southAfrica: {
    label: "South Africa law review",
    url: "https://samajournals.co.za/index.php/sajbl/article/view/2482",
  },
  california: {
    label: "California Family Code",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=&division=12.&lawCode=FAM&part=7.&title=",
  },
  nevada: {
    label: "Nevada NRS 126",
    url: "https://www.leg.state.nv.us/nrs/nrs-126.html",
  },
  newYork: {
    label: "NY Health Dept",
    url: "https://www.health.ny.gov/community/pregnancy/surrogacy/",
  },
  kazakhstan: {
    label: "Kazakhstan 2026 change",
    url: "https://www.growingfamilies.org/blog/kazakhstan-bans-access-to-surrogacy-for-foreigners/",
  },
  armenia: {
    label: "Armenia overview",
    url: "https://www.growingfamilies.org/surrogacy-in-armenia/",
  },
  kyrgyzstan: {
    label: "Kyrgyzstan law note",
    url: "https://nccconline.org/blog/article/surrogacy-in-kyrgyzstan",
  },
  italy: {
    label: "Italian consulate",
    url: "https://conshouston.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/stato-civile/nascita-derivata-da-maternita-surrogata/",
  },
};

const countries = [
  {
    name: "United States",
    region: "North America",
    status: "State-dependent",
    statusClass: "state",
    foreigner: "open",
    risk: "medium",
    posture: "Compensated gestational surrogacy is legal and enforceable in many states, but not federally uniform.",
    users: "Varies by state; California, Nevada, and New York are generally inclusive for married/unmarried, same-sex, and single intended parents.",
    parentage: "State court parentage order, often pre-birth in friendly states.",
    risks: "State selection, insurance exclusions, costs, and home-country recognition.",
    sourceIds: ["california", "nevada", "newYork"],
  },
  {
    name: "Canada",
    region: "North America",
    status: "Altruistic only",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "medium",
    posture: "Surrogacy is permitted, but paying a surrogate beyond permitted reimbursements is a criminal offence.",
    users: "Foreign intended parents may use Canadian surrogacy in practice, but matching and provincial parentage rules matter.",
    parentage: "Provincial parentage process after birth; counsel required.",
    risks: "No paid matching market; reimbursement compliance; province-by-province parentage.",
    sourceIds: ["canada"],
  },
  {
    name: "United Kingdom",
    region: "Europe",
    status: "Altruistic only",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "medium",
    posture: "Surrogacy agreements are not enforceable; payment is limited to reasonable expenses.",
    users: "Mostly domestic altruistic route; international arrangements require UK parental-order planning.",
    parentage: "Parental Order transfers legal parenthood from surrogate after birth.",
    risks: "Surrogate consent, unenforceable agreement, and parental order criteria.",
    sourceIds: ["ukGov", "ukCafcass"],
  },
  {
    name: "Australia",
    region: "Oceania",
    status: "Altruistic only",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "high",
    posture: "Commercial surrogacy is criminal across states and territories.",
    users: "Domestic altruistic routes exist by state/territory; outbound commercial surrogacy is criminal for ACT, NSW, and QLD residents.",
    parentage: "State/territory parentage-transfer process.",
    risks: "Criminal exposure for some residents using overseas commercial routes; parentage transfer may fail.",
    sourceIds: ["australia"],
  },
  {
    name: "Georgia",
    region: "Caucasus",
    status: "Commercial / compensated",
    statusClass: "commercial",
    foreigner: "open",
    risk: "medium",
    posture: "Permitted for married heterosexual couples; regulations may change quickly.",
    users: "Foreign married heterosexual couples are currently a known market.",
    parentage: "Georgian framework can recognize intended parents and exclude surrogate parental rights.",
    risks: "Possible sudden reforms, exit-document issues if arrangement is non-compliant.",
    sourceIds: ["georgia", "georgiaLaw"],
  },
  {
    name: "Ukraine",
    region: "Europe",
    status: "Commercial / compensated",
    statusClass: "commercial",
    foreigner: "restricted",
    risk: "high",
    posture: "Known surrogacy jurisdiction for married heterosexual couples with genetic link requirements.",
    users: "Foreign married heterosexual couples only in practice; war makes new arrangements high-risk.",
    parentage: "Intended spouses listed as parents under ART/Family Code framework.",
    risks: "Active war, consular limitations, exit documents, logistics, and safety.",
    sourceIds: ["ukraine", "ukraineTravel"],
  },
  {
    name: "Greece",
    region: "Europe",
    status: "Regulated altruistic",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "high",
    posture: "Court-approved altruistic surrogacy exists, but 2025 changes reportedly require legal residence in Greece.",
    users: "Primarily women applicants with medical indication; male singles/same-sex male couples are not a straightforward route.",
    parentage: "Pre-conception court approval is central.",
    risks: "Residency restriction, eligibility limits, and recent law change.",
    sourceIds: ["eu", "greece2025"],
  },
  {
    name: "Armenia",
    region: "Caucasus",
    status: "Commercial / compensated",
    statusClass: "commercial",
    foreigner: "restricted",
    risk: "medium",
    posture: "Surrogacy is legal and used internationally, with genetic-link and eligibility constraints.",
    users: "Reportedly available to married heterosexual couples and some singles; same-sex routes are poor.",
    parentage: "Intended-parent recognition depends on compliance and home-country documents.",
    risks: "Citizenship/travel documents and evolving eligibility rules.",
    sourceIds: ["armenia"],
  },
  {
    name: "Kyrgyzstan",
    region: "Central Asia",
    status: "Commercial / compensated",
    statusClass: "commercial",
    foreigner: "open",
    risk: "medium",
    posture: "Surrogacy is regulated under reproductive-health law and marketed to foreigners.",
    users: "Reportedly broad access, including international intended parents.",
    parentage: "Clinic and civil-registration practice must be verified locally.",
    risks: "Lower visibility legal system; embassy and citizenship planning required.",
    sourceIds: ["kyrgyzstan"],
  },
  {
    name: "Kazakhstan",
    region: "Central Asia",
    status: "Closed to foreigners",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "Foreign access reportedly banned in July 2026.",
    users: "Only legally married citizens of Kazakhstan reportedly eligible.",
    parentage: "Not viable for foreign intended parents.",
    risks: "Recent ban; avoid as international route.",
    sourceIds: ["kazakhstan"],
  },
  {
    name: "Mexico",
    region: "Latin America",
    status: "State-dependent / grey",
    statusClass: "grey",
    foreigner: "restricted",
    risk: "high",
    posture: "Supreme Court precedent is favorable to access, but there is no single protective federal framework and state law varies.",
    users: "Foreigners and diverse family structures may be accepted by some clinics/states.",
    parentage: "State civil registration and court practice drive outcomes.",
    risks: "State inconsistency, lack of uniform parentage protection, and exit-document uncertainty.",
    sourceIds: ["mexicoTravel"],
  },
  {
    name: "Colombia",
    region: "Latin America",
    status: "Unregulated / grey",
    statusClass: "grey",
    foreigner: "restricted",
    risk: "high",
    posture: "Not expressly regulated or prohibited; court precedent exists but no comprehensive statute.",
    users: "Marketed to foreigners and diverse family structures, but legal framework is unstable.",
    parentage: "Court/civil-registration route varies by case.",
    risks: "Legislative change, parentage uncertainty, child travel documents.",
    sourceIds: ["colombia", "colombiaRisk"],
  },
  {
    name: "Argentina",
    region: "Latin America",
    status: "Unregulated / high risk",
    statusClass: "grey",
    foreigner: "closed",
    risk: "high",
    posture: "No unified surrogacy framework; authorities may treat arrangements as illegal.",
    users: "Not advisable for foreign intended parents after recent administrative/court uncertainty.",
    parentage: "Court-filled gap; recent rulings and administrative pauses create risk.",
    risks: "Refused entry, birth-certificate issues, exit restrictions, local enforcement risk.",
    sourceIds: ["argentina", "argentinaLaw"],
  },
  {
    name: "India",
    region: "South Asia",
    status: "Closed to foreigners",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "Commercial surrogacy is banned; altruistic surrogacy is tightly limited.",
    users: "Foreign intended parents are effectively excluded.",
    parentage: "Domestic statutory process only for eligible Indian intended parents.",
    risks: "Not an international route.",
    sourceIds: ["indiaAct", "indiaReview"],
  },
  {
    name: "Thailand",
    region: "Southeast Asia",
    status: "Closed to foreigners",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "2015 ART law ended the former commercial foreign surrogacy market.",
    users: "Foreign commercial route is not viable; domestic eligibility is restricted.",
    parentage: "Thai ART Act compliance required.",
    risks: "Illegal arrangement risk, parentage and exit-document problems.",
    sourceIds: ["thailand"],
  },
  {
    name: "South Africa",
    region: "Africa",
    status: "Regulated altruistic",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "medium",
    posture: "Chapter 19 of the Children's Act regulates altruistic surrogacy with High Court confirmation.",
    users: "Protection is mainly domestic; domicile/residence and genetic-link requirements matter.",
    parentage: "High Court-confirmed agreement before fertilization.",
    risks: "Commercial payment ban, pre-approval, domicile limits.",
    sourceIds: ["southAfrica"],
  },
  {
    name: "Portugal",
    region: "Europe",
    status: "Regulated altruistic",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "high",
    posture: "Altruistic surrogacy law exists but implementation has been legally difficult.",
    users: "Not a simple foreign-intended-parent route.",
    parentage: "Prior authorization model, but operational status needs current Portuguese counsel.",
    risks: "Implementation gaps and constitutional-law complexity.",
    sourceIds: ["eu"],
  },
  {
    name: "Ireland",
    region: "Europe",
    status: "Emerging altruistic",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "medium",
    posture: "Legislation permitting altruistic surrogacy has been introduced, but transition and implementation details matter.",
    users: "Not a mature international commercial route.",
    parentage: "Domestic recognition framework developing.",
    risks: "Implementation timing and home-country recognition.",
    sourceIds: ["eu"],
  },
  {
    name: "Cyprus",
    region: "Europe",
    status: "Regulated altruistic",
    statusClass: "altruistic",
    foreigner: "restricted",
    risk: "medium",
    posture: "Altruistic surrogacy is part of the EU group with permissive legislation.",
    users: "Medical and legal eligibility must be confirmed before any embryo transfer.",
    parentage: "Prior legal approvals are central.",
    risks: "Local approvals and foreign recognition.",
    sourceIds: ["eu"],
  },
  {
    name: "France",
    region: "Europe",
    status: "Prohibited",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "Domestic surrogacy agreements are void/prohibited.",
    users: "Not a surrogacy destination.",
    parentage: "Recognition of children born abroad is a separate human-rights/civil-status issue.",
    risks: "Contract invalidity and public-policy barriers.",
    sourceIds: ["eu"],
  },
  {
    name: "Germany",
    region: "Europe",
    status: "Prohibited",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "Surrogacy is prohibited; legal mother is generally the birth mother.",
    users: "Not a destination.",
    parentage: "Foreign recognition needs German counsel.",
    risks: "Criminal/professional sanctions and parentage recognition issues.",
    sourceIds: ["eu"],
  },
  {
    name: "Italy",
    region: "Europe",
    status: "Prohibited / extraterritorial crime",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "Law No. 169 of 4 November 2024 extends criminal exposure to Italian citizens using surrogacy abroad.",
    users: "Not viable for Italian citizens; not a destination.",
    parentage: "Births abroad raise civil-status recognition issues.",
    risks: "Extraterritorial criminal prosecution for Italian citizens.",
    sourceIds: ["italy", "eu"],
  },
  {
    name: "Spain",
    region: "Europe",
    status: "Prohibited",
    statusClass: "closed",
    foreigner: "closed",
    risk: "high",
    posture: "Domestic surrogacy is prohibited/void under the EU comparison framework.",
    users: "Not a destination.",
    parentage: "Recognition of foreign births is separate and contentious.",
    risks: "Public-policy and parentage recognition barriers.",
    sourceIds: ["eu"],
  },
];

const statusFilter = document.querySelector("#statusFilter");
const foreignerFilter = document.querySelector("#foreignerFilter");
const riskFilter = document.querySelector("#riskFilter");
const search = document.querySelector("#search");
const rows = document.querySelector("#countryRows");

function badge(text, cls) {
  return `<span class="badge ${cls}">${text}</span>`;
}

function renderSources(ids) {
  return `<div class="source-list">${ids
    .map((id) => `<a href="${sources[id].url}" target="_blank" rel="noreferrer">${sources[id].label}</a>`)
    .join("")}</div>`;
}

function renderRows() {
  const status = statusFilter.value;
  const foreigner = foreignerFilter.value;
  const risk = riskFilter.value;
  const term = search.value.trim().toLowerCase();

  const filtered = countries.filter((country) => {
    const haystack = Object.values(country).join(" ").toLowerCase();
    return (
      (status === "all" || country.status === status) &&
      (foreigner === "all" || country.foreigner === foreigner) &&
      (risk === "all" || country.risk === risk) &&
      (!term || haystack.includes(term))
    );
  });

  rows.innerHTML = filtered
    .map(
      (country) => `
        <tr>
          <td class="country"><strong>${country.name}</strong><span>${country.region}</span></td>
          <td>${badge(country.status, country.statusClass)}<p>${country.posture}</p></td>
          <td>${badge(country.foreigner, country.foreigner === "open" ? "lower" : country.foreigner === "restricted" ? "medium" : "high")}</td>
          <td>${country.users}</td>
          <td>${country.parentage}</td>
          <td>${badge(country.risk, country.risk)}<p>${country.risks}</p></td>
          <td>${renderSources(country.sourceIds)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderFilters() {
  [...new Set(countries.map((country) => country.status))]
    .sort()
    .forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = status;
      statusFilter.append(option);
    });
}

function renderSummary() {
  document.querySelector("#countCountries").textContent = countries.length;
  document.querySelector("#countOpen").textContent = countries.filter((c) =>
    c.status.includes("Commercial"),
  ).length;
  document.querySelector("#countAltruistic").textContent = countries.filter((c) =>
    c.status.includes("Altruistic") || c.status.includes("altruistic"),
  ).length;
  document.querySelector("#countHigh").textContent = countries.filter((c) => c.risk === "high").length;
}

function renderMap() {
  const regionMap = document.querySelector("#regionMap");
  const regions = [...new Set(countries.map((country) => country.region))].sort();
  regionMap.innerHTML = regions
    .map((region) => {
      const dots = countries
        .filter((country) => country.region === region)
        .map((country) => `<span class="dot ${country.statusClass}" title="${country.name}: ${country.status}"></span>`)
        .join("");
      return `<div class="region-tile"><strong>${region}</strong><div class="dots">${dots}</div></div>`;
    })
    .join("");
}

[statusFilter, foreignerFilter, riskFilter, search].forEach((input) => {
  input.addEventListener("input", renderRows);
});

renderFilters();
renderSummary();
renderMap();
renderRows();
