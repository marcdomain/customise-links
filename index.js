module.exports = () => {
  setTimeout(() => {
    const links = document.links;
    const numberOfLinks = links.length;
    for (let i = 0; i < numberOfLinks; i++) {
      if (links[i].host !== window.location.host) {
        links[i].target = "_blank";
        links[i].setAttribute("rel", "noopener");
        links[i].className += " externalLink";
      } else {
        links[i].className += " internalLink"
      }
    }
  }, 1000)
};
