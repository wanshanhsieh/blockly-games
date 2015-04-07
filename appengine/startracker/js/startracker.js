/**
 * Blockly Games: Startracker

/**
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Startracker');

goog.require('Startracker.soy');
goog.require('Startracker.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'Startracker';

/**
 * Initialize Blockly and the startracker.  Called on page load.
 */
Startracker.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Startracker.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML}); // produce html file

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
    blocklyDiv.style.height =
        (window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
  };
  onresize();
  window.addEventListener('resize', onresize);  

  Blockly.inject(document.getElementById('blockly'),
      {toolbox: document.getElementById('toolbox')});

  $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;
  
};

window.addEventListener('load', Startracker.init);

