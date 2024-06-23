(function() {
  const widget = document.getElementById('accessibility-widget');
  const menu = document.getElementById('accessibility-menu');
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const declarationBtn = document.getElementById('accessibility-declaration');
  const textColors = document.getElementById('text-colors');
  const titleColors = document.getElementById('title-colors');
  const backgroundColors = document.getElementById('background-colors');

  openMenuBtn.addEventListener('click', function() {
    menu.classList.add('visible');
  });

  closeMenuBtn.addEventListener('click', function() {
    menu.classList.remove('visible');
  });

  declarationBtn.addEventListener('click', function() {
    alert('Accessibility Declaration');
  });

  // Function to mute sounds
  document.getElementById('mute-sounds').addEventListener('click', function() {
    document.querySelectorAll('audio, video').forEach(media => {
      media.muted = true;
    });
  });

  // Function to hide images
  document.getElementById('hide-images').addEventListener('click', function() {
    document.querySelectorAll('img').forEach(img => {
      img.style.display = 'none';
    });
  });

  // Function for read mode (focus on text)
  document.getElementById('read-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.color = '#000';
  });

  // Function to stop animations
  document.getElementById('stop-animations').addEventListener('click', function() {
    const style = document.createElement('style');
    style.innerHTML = `* { 
      animation: none !important; 
      transition: none !important;
    }`;
    document.head.appendChild(style);
  });

  // Function for reading mask
  document.getElementById('reading-mask').addEventListener('click', function() {
    alert('Reading mask activated');
  });

  // Function to highlight hover
  document.getElementById('highlight-hover').addEventListener('click', function() {
    const style = document.createElement('style');
    style.innerHTML = `*:hover { 
      background-color: yellow !important;
    }`;
    document.head.appendChild(style);
  });

  // Function to highlight focus
  document.getElementById('highlight-focus').addEventListener('click', function() {
    const style = document.createElement('style');
    style.innerHTML = `*:focus { 
      outline: 3px solid yellow !important;
    }`;
    document.head.appendChild(style);
  });

  // Function for big black cursor
  document.getElementById('big-black-cursor').addEventListener('click', function() {
    document.body.style.cursor = 'url(bigblackcursor.png), auto';
  });

  // Function for big white cursor
  document.getElementById('big-white-cursor').addEventListener('click', function() {
    document.body.style.cursor = 'url(bigwhitecursor.png), auto';
  });

  // Function for dark contrast
  document.getElementById('dark-contrast').addEventListener('click', function() {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
  });

  // Function for light contrast
  document.getElementById('light-contrast').addEventListener('click', function() {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
  });

  // Function for high contrast
  document.getElementById('high-contrast').addEventListener('click', function() {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#ffff00';
  });

  // Function for high saturation
  document.getElementById('high-saturation').addEventListener('click', function() {
    document.body.style.filter = 'saturate(2)';
  });

  // Function for monochrome
  document.getElementById('monochrome').addEventListener('click', function() {
    document.body.style.filter = 'grayscale(100%)';
  });

  // Function for low saturation
  document.getElementById('low-saturation').addEventListener('click', function() {
    document.body.style.filter = 'saturate(0.5)';
  });

  // Function to adjust text colors
  function createColorOptions(container, colors, target, property) {
    colors.forEach(color => {
      const button = document.createElement('button');
      button.style.backgroundColor = color;
      button.addEventListener('click', function() {
        document.querySelectorAll(target).forEach(element => {
          element.style[property] = color;
        });
      });
      container.appendChild(button);
    });
  }

  const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
  createColorOptions(textColors, colors, 'body', 'color');
  createColorOptions(titleColors, colors, 'h1, h2, h3, h4, h5, h6', 'color');
  createColorOptions(backgroundColors, colors, 'body', 'backgroundColor');

  // Function for content scaling
  document.getElementById('content-scaling').addEventListener('click', function() {
    document.body.style.transform = 'scale(1.2)';
  });

  // Function for readable font
  document.getElementById('readable-font').addEventListener('click', function() {
    document.body.style.fontFamily = 'Arial, sans-serif';
  });

  // Function to highlight titles
  document.getElementById('highlight-titles').addEventListener('click', function() {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(title => {
      title.style.backgroundColor = 'yellow';
    });
  });

  // Function to highlight links
  document.getElementById('highlight-links').addEventListener('click', function() {
    document.querySelectorAll('a').forEach(link => {
      link.style.backgroundColor = 'yellow';
    });
  });

  // Function for text magnifier
  document.getElementById('text-magnifier').addEventListener('click', function() {
    document.body.style.zoom = '150%';
  });

  // Function to adjust font sizing
  document.getElementById('adjust-font-sizing').addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
  });

  // Function to align center
  document.getElementById('align-center').addEventListener('click', function() {
    document.body.style.textAlign = 'center';
  });

  // Function to adjust line height
  document.getElementById('adjust-line-height').addEventListener('click', function() {
    document.body.style.lineHeight = '2';
  });

  // Function to align left
  document.getElementById('align-left').addEventListener('click', function() {
    document.body.style.textAlign = 'left';
  });

  // Function to adjust letter spacing
  document.getElementById('adjust-letter-spacing').addEventListener('click', function() {
    document.body.style.letterSpacing = '2px';
  });

  // Function to align right
  document.getElementById('align-right').addEventListener('click', function() {
    document.body.style.textAlign = 'right';
  });

  // Reset to default
  document.getElementById('reset-default').addEventListener('click', function() {
    console.log('Resetting to default...');
    document.body.classList.add('default-styles');
    document.querySelectorAll('img').forEach(img => {
      img.style.display = '';
      console.log('Image display reset:', img.style.display);
    });
    document.querySelectorAll('audio, video').forEach(media => {
      media.muted = false;
      console.log('Media muted reset:', media.muted);
    });
  });

})();
