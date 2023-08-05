var technologyIcons = [
  {
    type: 'fa',
    class: 'fa-brands fa-js',
    title: 'JavaScript',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-react',
    title: 'React',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-angular',
    title: 'Angular',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-node-js',
    title: 'Node.js',
  },
  {
    type: 'text',
    content: 'TS',
    title: 'TypeScript',
  },
  {
    type: 'text',
    content: 'C#',
    title: 'C#',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-microsoft',
    title: 'ASP.NET',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-python',
    title: 'Python',
  },
  {
    type: 'text',
    content: 'dj',
    title: 'Django',
  },
  {
    type: 'text',
    content: 'C++',
    title: 'C++',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-java',
    title: 'Java',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-unity',
    title: 'Unity',
  },
  {
    type: 'img',
    src: './godot-icon.svg',
    width: 50,
    title: 'Godot',
  },
  {
    type: 'fa',
    class: 'fa-solid fa-database',
    title: 'SQL',
  },
  {
    type: 'fa',
    class: 'fa-brands fa-linux',
    title: 'Linux',
  },
];

function renderTechnologyIcons() {
  var elements = technologyIcons.map(function (item) {
    var iconContainer = $('<div></div>')
      .addClass('tech-icon');

    var icon = null;

    switch (item.type) {
      case 'fa':
        icon = $('<i></i>')
          .addClass(item.class);
        break;
      case 'text':
        icon = $('<span></span>')
          .text(item.content);
        break;
      case 'img':
        var img = $('<img />')
          .prop('src', item.src)
          .prop('title', item.title)
          .prop('alt', item.title)
          .prop('width', item.width);

        icon = $('<span></span>')
          .append(img);

        break;
      default:
        break;
    }

    if (icon !== null) {
      icon.prop('title', item.title);
      iconContainer.append(icon);
    }

    var text = $('<small></small>')
      .text(item.title);

    iconContainer.append(text);

    return iconContainer;
  });

  $('#techList').append(elements);
}

function run() {
  $(function () {
    renderTechnologyIcons();
  });
}

run();
