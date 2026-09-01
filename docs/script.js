const weeks = [
  [1, 'Orientation and background'],
  [2, 'Basic Formal Ontology 101', 'https://www.youtube.com/watch?v=7sbzF9p7qvk'],
  [3, 'BFO tutorial series', 'https://www.youtube.com/playlist?list=PLyngZgIl3WTj6tWcypTLpCnYXu6o93kD4'],
  [4, 'Realism and ontology engineering', 'https://www.youtube.com/watch?v=GWkk5AfRCpM'],
  [5, 'The ontology of science', 'https://www.youtube.com/watch?v=PwsBxRs9kns'],
  [6, 'Information artifacts, aboutness, and language', 'https://www.youtube.com/watch?v=sTx_rRWmTqE'],
  [7, 'Ontology of terrorism', 'https://www.youtube.com/watch?v=G4lg1_-XpiE'],
  [8, 'Capabilities, functions, and dispositions', 'https://www.youtube.com/watch?v=jH1sc7FTs3w'],
  [9, 'BFO and DOLCE', 'https://www.youtube.com/watch?v=XTVR7k63_VA'],
  [10, 'Relatively isolated systems', 'https://www.youtube.com/watch?v=-OUr0tuFloM'],
  [11, 'ISO/IEC 21838', 'https://www.youtube.com/watch?v=_0masZPGLb0'],
  [12, 'Tutorials and temporalized relations', 'https://www.youtube.com/watch?v=VYDe09TOw2M'],
  [13, 'The Emotion Ontology', 'https://www.youtube.com/watch?v=18php_34s-M'],
  [14, 'Learner presentations I'],
  [15, 'Learner presentations II']
];

const list = document.querySelector('#week-list');
weeks.forEach(([number, title, url]) => {
  const row = document.createElement('article');
  row.className = 'week';
  const label = document.createElement('span');
  label.textContent = `W${String(number).padStart(2, '0')}`;
  const heading = document.createElement('h3');
  heading.textContent = title;
  row.append(label, heading);
  if (url) {
    const link = document.createElement('a');
    link.href = url;
    link.textContent = 'Watch ↗';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    row.append(link);
  }
  list.append(row);
});

