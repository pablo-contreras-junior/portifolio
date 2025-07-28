function scroll_content(id) {
  const container = document.getElementsByClassName('content')[0];
  const target = document.getElementById(id);

  if (container && target) {
    const offsetTop = target.offsetTop;
    container.scrollTo({
      top: offsetTop - 45,
      behavior: "smooth"
    });
  }
}