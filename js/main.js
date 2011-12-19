jQuery.fn.ahah = function()
{
  this
    .animate({
    fontSize: "125px",
    opacity: 1
    }, 250)
    .animate({
    fontSize: "75px"
    }, 250);
}

jQuery.animateAhah = function()
{
  document.getElementById('audio').play();
  jQuery('#ha-1').ahah();
  jQuery('#ha-1').queue(function(){jQuery('#ha-2').ahah(); jQuery(this).dequeue()});
}

jQuery(document).ready(function()
  {
    jQuery('#nelson').click(function(){jQuery.animateAhah();});
  }
);

jQuery(window).load(function()
{
  jQuery('#loader').fadeOut('slow', function()
  {
    jQuery('#animation').fadeIn('slow', function()
    {
      jQuery.animateAhah();
    });
  });
});

