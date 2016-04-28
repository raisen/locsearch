import { SITES } from './sites.js'

function onSiteClick (e) {
  let el = e.target
  let link = el.dataset.link
  link = link.replace('@KW@', document.getElementById('query').value)
  window.open(link)
  window.focus()
}

function displaySites (siteType, sites) {
  let elAllSites = document.getElementById('all-sites')

  let elSites = document.createElement('div')
  elSites.className = 'sites'

  let elSitesCategoryDiv = document.createElement('div')
  elSitesCategoryDiv.className = 'site-category'

  let elSitesCategoryHeader = document.createElement('span')
  elSitesCategoryHeader.className = 'site-category-header'
  elSitesCategoryHeader.textContent = siteType

  elSitesCategoryDiv.appendChild(elSitesCategoryHeader)

  elSites.appendChild(elSitesCategoryDiv)

  for (var siteName in sites) {
    let site = sites[siteName]

    let elSite = document.createElement('div')
    elSite.className = 'site'
    elSite.dataset.link = site.url
    elSite.addEventListener('click', onSiteClick)

    if (site.icon) {
      let img = document.createElement('img')
      img.src = site.icon
      img.dataset.link = site.url
      elSite.appendChild(img)
    }

    let elSiteName = document.createElement('span')
    elSiteName.textContent = siteName
    elSiteName.dataset.link = site.url
    elSiteName.className = 'site-name'

    elSite.appendChild(elSiteName)
    elSites.appendChild(elSite)
  }

  elAllSites.appendChild(elSites)
}

for (var siteType in SITES) {
  displaySites(siteType, SITES[siteType])
}
