$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in', 1000)
    ;

    $('.left.demo.sidebar')
      .sidebar('toggle')
    ;
    setInterval(changeSides, 3000);

    $("#button_evo").click(function(){
      $("#scratch_evo").show();
      $("#scratch_vol").hide();
      $("#scratch_green").hide();
      $("#scratch_dragon").hide();
      $("#scratch_poke").hide();
    });  

    $("#button_vol").click(function(){
      $("#scratch_evo").hide();
      $("#scratch_vol").show();
      $("#scratch_green").hide();
      $("#scratch_dragon").hide();
      $("#scratch_poke").hide();
    });

    $("#button_green").click(function(){
      $("#scratch_evo").hide();
      $("#scratch_vol").hide();
      $("#scratch_green").show();
      $("#scratch_dragon").hide();
      $("#scratch_poke").hide();
    });  

    $("#button_dragon").click(function(){
      $("#scratch_evo").hide();
      $("#scratch_vol").hide();
      $("#scratch_green").hide();
      $("#scratch_dragon").show();
      $("#scratch_poke").hide();
    }); 

    $("#button_poke").click(function(){
      $("#scratch_evo").hide();
      $("#scratch_vol").hide();
      $("#scratch_green").hide();
      $("#scratch_dragon").hide();
      $("#scratch_poke").show();
    });   
});