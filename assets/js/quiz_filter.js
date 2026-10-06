function onSelectTopicByName(attribute, targetName) {
  document
    .querySelectorAll('.' + targetName).forEach(e => {
      if (e.className.includes(attribute)) {
        e.style.display = 'block';
      } else {
        e.style.display = 'none';
      }
    });
  return;
}

function restyleFilterButtons(button, buttonName) {
  document.querySelectorAll('.' + buttonName).forEach(e => {
    if (e.isEqualNode(button)) {
      e.classList.add('on');
    } else {
      e.classList.remove('on');
    }
  });
  return;
}

function onFilterByAttribute(button, attribute, targetName, buttonName) {
  if (button.classList.contains('on')) {
    // No changes if the filter is already applied.
    return;
  }
  onSelectTopicByName(attribute, targetName);
  restyleFilterButtons(button, buttonName);
  return;
}
