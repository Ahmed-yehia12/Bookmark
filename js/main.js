var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var sites = [];
function addSite() {
  var name = siteNameInput.value;
  var url = siteUrlInput.value;
  if (!name || !url) return window.alert("Cannot submit empty data!!");
  var site = { name, url };
  sites.push(site);
  displaySites();
  resetValues();
}

function visit(url) {
  window.open(url);
}

function deleteSite(index) {
  sites.splice(index, 1);
  displaySites();
}

function displaySites() {
  var tableBody = "";

  for (var i = 0; i < sites.length; i++) {
    tableBody += `
    <tr>
        <td >${i}</td>
        <td>${sites[i].name}</td>
        <td>
          <button class="btn btn-warning" onclick="visit('${sites[i].url}')"><i class="fa-solid fa-eye pe-2"></i>
          Visit
          </button>
        </td>
        <td>
          <button class="btn btn-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can "></i> Delete</button>
        </td>
    </tr>
`;
  }

  document.getElementById("tableBody").innerHTML = tableBody;
}
function resetValues() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}


/**
 * use case: ${visit(sites[i].url)}
 * use case 2: onclick="visit(${sites[i].url})" => visit(https://ur/....) // syntax error
 *  use case 3: converting https/ ... to string by wrapping the value with two single qoutes.
 */