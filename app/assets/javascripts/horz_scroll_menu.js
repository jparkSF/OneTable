$(document).ready(() => {
  
  // duration of scroll animation
  let scrollDuration = 300;
  // paddles
  let leftArrow = document.getElementsByClassName('left-arrow');
    
  let rightArrow = document.getElementsByClassName('right-arrow');
  
  // get items dimensions
  let itemsLength = document.getElementsByClassName('list-item');
  let test = document.getElementsByTagName('li');
  // console.log(test);
  

  
  let itemSize = $('.list-item').outerWidth(true);
  // get some relevant size for the paddle triggering point
  let paddleMargin = 20;

  // get wrapper width
  const getMenuWrapperSize = () => (
    $('.content-block-body').outerWidth()
  );

  let menuWrapperSize = getMenuWrapperSize();

  // the wrapper is responsive
  $(window).on('resize', function () {
    menuWrapperSize = getMenuWrapperSize();
  });

  // size of the visible part of the menu is equal as the wrapper size 
  let menuVisibleSize = menuWrapperSize;

  // get total width of all menu items
  const getMenuSize = () => (
    itemsLength * itemSize
  );

  let menuSize = getMenuSize();
  // get how much of menu is invisible

  let menuInvisibleSize = menuSize - menuWrapperSize;

  // get how much have we scrolled to the left
  const getMenuPosition = () => (
    $('.restaurant-lists').scrollLeft()
  );

  // finally, what happens when we are actually scrolling the menu
  $('.restaurant-lists').on('scroll', function () {

    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled so far
    let menuPosition = getMenuPosition();

    let menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= paddleMargin) {
      $(leftArrow).addClass('hidden');
      $(rightArrow).removeClass('hidden');
    } else if (menuPosition < menuEndOffset) {
      // show both paddles in the middle
      $(leftArrow).removeClass('hidden');
      $(rightArrow).removeClass('hidden');
    } else if (menuPosition >= menuEndOffset) {
      $(leftArrow).removeClass('hidden');
      $(rightArrow).addClass('hidden');
    }

    // print important values
    // $('#print-wrapper-size span').text(menuWrapperSize);
    // $('#print-menu-size span').text(menuSize);
    // $('#print-menu-invisible-size span').text(menuInvisibleSize);
    // $('#print-menu-position span').text(menuPosition);

  });

  // scroll to left
  $(rightArrow).on('click', function () {
    $('.restaurant-lists').animate({ scrollLeft: menuInvisibleSize }, scrollDuration);
  });

  // scroll to right
  $(leftArrow).on('click', function () {
    $('.restaurant-lists').animate({ scrollLeft: '0' }, scrollDuration);
  });
});
