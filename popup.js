const RULESET_ID = "ruleset_1";
const checkbox = document.getElementById("enabled");

async function syncState() {
  const enabledRulesets = await chrome.declarativeNetRequest.getEnabledRulesets();
  checkbox.checked = enabledRulesets.includes(RULESET_ID);
}

checkbox.addEventListener("change", async () => {
  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: checkbox.checked ? [RULESET_ID] : [],
    disableRulesetIds: checkbox.checked ? [] : [RULESET_ID]
  });
});

syncState();
