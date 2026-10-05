function onSelectTopicByName(name) {
  document
    .querySelectorAll('.quiz_zip').forEach(e => {
      if (e.className.includes(name)) {
        e.style.display = 'block';
      } else {
        e.style.display = 'none';
      }
    });
  return;
}

function restyleFilterButtons(button) {
  document.querySelectorAll('.quiz-filter').forEach(e => {
    if (e.isEqualNode(button)) {
      e.classList.add('on');
    } else {
      e.classList.remove('on');
    }
  });
  return;
}

function onFilterByName(button, name) {
  if (button.className.includes('on')) {
    // No changes if the filter is already applied.
    return;
  }
  onSelectTopicByName(name);
  restyleFilterButtons(button);
  return;
}
