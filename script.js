console.log('Accessibility Script is running');

document.addEventListener('DOMContentLoaded', function() {
  const widget = document.getElementById('accessibility-widget');
  const menu = document.getElementById('accessibility-menu');
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const declarationBtn = document.getElementById('accessibility-declaration');
  const textColors = document.getElementById('text-colors');
  const titleColors = document.getElementById('title-colors');
  const backgroundColors = document.getElementById('background-colors');

  console.log({ widget, menu, openMenuBtn, closeMenuBtn, declarationBtn, textColors, titleColors, backgroundColors });

  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', function() {
      menu.classList.add('visible');
      console.log('Menu opened');
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', function() {
      menu.classList.remove('visible');
      console.log('Menu closed');
    });
  }

  if (declarationBtn) {
    declarationBtn.addEventListener('click', function() {
      alert('Accessibility Declaration');
      console.log('Accessibility Declaration shown');
    });
  }

  const muteSoundsBtn = document.getElementById('mute-sounds');
  if (muteSoundsBtn) {
    muteSoundsBtn.addEventListener('click', function() {
      document.querySelectorAll('audio, video').forEach(media => {
        media.muted = true;
        console.log('Media muted');
      });
    });
  }

  const hideImagesBtn = document.getElementById('hide-images');
  if (hideImagesBtn) {
    hideImagesBtn.addEventListener('click', function() {
      document.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
        console.log('Images hidden');
      });
    });
  }

  const readModeBtn = document.getElementById('read-mode');
  if (readModeBtn) {
    readModeBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = '#f4f4f4';
      document.body.style.color = '#000';
      console.log('Read mode activated');
    });
  }

  const stopAnimationsBtn = document.getElementById('stop-animations');
  if (stopAnimationsBtn) {
    stopAnimationsBtn.addEventListener('click', function() {
      const style = document.createElement('style');
      style.innerHTML = `* { 
        animation: none !important; 
        transition: none !important;
      }`;
      document.head.appendChild(style);
      console.log('Animations stopped');
    });
  }

  const readingMaskBtn = document.getElementById('reading-mask');
  if (readingMaskBtn) {
    readingMaskBtn.addEventListener('click', function() {
      alert('Reading mask activated');
      console.log('Reading mask activated');
    });
  }

  const highlightHoverBtn = document.getElementById('highlight-hover');
  if (highlightHoverBtn) {
    highlightHoverBtn.addEventListener('click', function() {
      const style = document.createElement('style');
      style.innerHTML = `*:hover { 
        background-color: yellow !important;
      }`;
      document.head.appendChild(style);
      console.log('Highlight hover activated');
    });
  }

  const highlightFocusBtn = document.getElementById('highlight-focus');
  if (highlightFocusBtn) {
    highlightFocusBtn.addEventListener('click', function() {
      const style = document.createElement('style');
      style.innerHTML = `*:focus { 
        outline: 3px solid yellow !important;
      }`;
      document.head.appendChild(style);
      console.log('Highlight focus activated');
    });
  }

  const bigBlackCursorBtn = document.getElementById('big-black-cursor');
  if (bigBlackCursorBtn) {
    bigBlackCursorBtn.addEventListener('click', function() {
      document.body.style.cursor = 'url(bigblackcursor.png), auto';
      console.log('Big black cursor activated');
    });
  }

  const bigWhiteCursorBtn = document.getElementById('big-white-cursor');
  if (bigWhiteCursorBtn) {
    bigWhiteCursorBtn.addEventListener('click', function() {
      document.body.style.cursor = 'url(bigwhitecursor.png), auto';
      console.log('Big white cursor activated');
    });
  }

  const darkContrastBtn = document.getElementById('dark-contrast');
  if (darkContrastBtn) {
    darkContrastBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
      console.log('Dark contrast activated');
    });
  }

  const lightContrastBtn = document.getElementById('light-contrast');
  if (lightContrastBtn) {
    lightContrastBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      console.log('Light contrast activated');
    });
  }

  const highContrastBtn = document.getElementById('high-contrast');
  if (highContrastBtn) {
    highContrastBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#ffff00';
      console.log('High contrast activated');
    });
  }

  const highSaturationBtn = document.getElementById('high-saturation');
  if (highSaturationBtn) {
    highSaturationBtn.addEventListener('click', function() {
      document.body.style.filter = 'saturate(2)';
      console.log('High saturation activated');
    });
  }

  const monochromeBtn = document.getElementById('monochrome');
  if (monochromeBtn) {
    monochromeBtn.addEventListener('click', function() {
      document.body.style.filter = 'grayscale(100%)';
      console.log('Monochrome activated');
    });
  }

  const lowSaturationBtn = document.getElementById('low-saturation');
  if (lowSaturationBtn) {
    lowSaturationBtn.addEventListener('click', function() {
      document.body.style.filter = 'saturate(0.5)';
      console.log('Low saturation activated');
    });
  }

  function createColorOptions(container, colors, target, property) {
    colors.forEach(color => {
      const button = document.createElement('button');
      button.style.backgroundColor = color;
      button.addEventListener('click', function() {
        document.querySelectorAll(target).forEach(element => {
          element.style[property] = color;
        });
        console.log(`Color ${color} applied to ${target}`);
      });
      container.appendChild(button);
    });
  }

  const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
  if (textColors) createColorOptions(textColors, colors, 'body', 'color');
  if (titleColors) createColorOptions(titleColors, colors, 'h1, h2, h3, h4, h5, h6', 'color');
  if (backgroundColors) createColorOptions(backgroundColors, colors, 'body', 'backgroundColor');

  const contentScalingBtn = document.getElementById('content-scaling');
  if (contentScalingBtn) {
    contentScalingBtn.addEventListener('click', function() {
      document.body.style.transform = 'scale(1.2)';
      console.log('Content scaling activated');
    });
  }

  const readableFontBtn = document.getElementById('readable-font');
  if (readableFontBtn) {
    readableFontBtn.addEventListener('click', function() {
      document.body.style.fontFamily = 'Arial, sans-serif';
      console.log('Readable font activated');
    });
  }

  const highlightTitlesBtn = document.getElementById('highlight-titles');
  if (highlightTitlesBtn) {
    highlightTitlesBtn.addEventListener('click', function() {
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(title => {
        title.style.backgroundColor = 'yellow';
        console.log('Titles highlighted');
      });
    });
  }

  const highlightLinksBtn = document.getElementById('highlight-links');
  if (highlightLinksBtn) {
    highlightLinksBtn.addEventListener('click', function() {
      document.querySelectorAll('a').forEach(link => {
        link.style.backgroundColor = 'yellow';
        console.log('Links highlighted');
      });
    });
  }

  const textMagnifierBtn = document.getElementById('text-magnifier');
  if (textMagnifierBtn) {
    textMagnifierBtn.addEventListener('click', function() {
      document.body.style.zoom = '150%';
      console.log('Text magnifier activated');
    });
  }

  const adjustFontSizingBtn = document.getElementById('adjust-font-sizing');
  if (adjustFontSizingBtn) {
    adjustFontSizingBtn.addEventListener('click', function() {
      document.body.style.fontSize = 'larger';
      console.log('Font sizing adjusted');
    });
  }

  const alignCenterBtn = document.getElementById('align-center');
  if (alignCenterBtn) {
    alignCenterBtn.addEventListener('click', function() {
      document.body.style.textAlign = 'center';
      console.log('Text aligned center');
    });
  }

  const adjustLineHeightBtn = document.getElementById('adjust-line-height');
  if (adjustLineHeightBtn) {
    adjustLineHeightBtn.addEventListener('click', function() {
      document.body.style.lineHeight = '2';
      console.log('Line height adjusted');
    });
  }

  const alignLeftBtn = document.getElementById('align-left');
  if (alignLeftBtn) {
    alignLeftBtn.addEventListener('click', function() {
      document.body.style.textAlign = 'left';
      console.log('Text aligned left');
    });
  }

  const adjustLetterSpacingBtn = document.getElementById('adjust-letter-spacing');
  if (adjustLetterSpacingBtn) {
    adjustLetterSpacingBtn.addEventListener('click', function() {
      document.body.style.letterSpacing = '2px';
      console.log('Letter spacing adjusted');
    });
  }

  const alignRightBtn = document.getElementById('align-right');
  if (alignRightBtn) {
    alignRightBtn.addEventListener('click', function() {
      document.body.style.textAlign = 'right';
      console.log('Text aligned right');
    });
  }

  const resetDefaultBtn = document.getElementById('reset-default');
  if (resetDefaultBtn) {
    resetDefaultBtn.addEventListener('click', function() {
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
  }
});
