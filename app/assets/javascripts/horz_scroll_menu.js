

  // duration of scroll animation
  let scrollDuration = 300;
  // paddles
  let leftPaddle = document.getElementsByClassName('left-paddle');
  let rightPaddle = document.getElementsByClassName('right-paddle');
  // get items dimensions
  let itemsLength = $('.item').length;
  let itemSize = $('.item').outerWidth(true);
  // get some relevant size for the paddle triggering point
  let paddleMargin = 20;

  // get wrapper width
  const getMenuWrapperSize = () => (
    $('.menu-wrapper').outerWidth()
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
    $('.menu').scrollLeft()
  );

  // finally, what happens when we are actually scrolling the menu
  $('.menu').on('scroll', function () {

    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled so far
    let menuPosition = getMenuPosition();

    let menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= paddleMargin) {
      $(leftPaddle).addClass('hidden');
      $(rightPaddle).removeClass('hidden');
    } else if (menuPosition < menuEndOffset) {
      // show both paddles in the middle
      $(leftPaddle).removeClass('hidden');
      $(rightPaddle).removeClass('hidden');
    } else if (menuPosition >= menuEndOffset) {
      $(leftPaddle).removeClass('hidden');
      $(rightPaddle).addClass('hidden');
    }

    // print important values
    $('#print-wrapper-size span').text(menuWrapperSize);
    $('#print-menu-size span').text(menuSize);
    $('#print-menu-invisible-size span').text(menuInvisibleSize);
    $('#print-menu-position span').text(menuPosition);

  });

  // scroll to left
  $(rightPaddle).on('click', function () {
    $('.menu').animate({ scrollLeft: menuInvisibleSize }, scrollDuration);
  });

  // scroll to right
  $(leftPaddle).on('click', function () {
    $('.menu').animate({ scrollLeft: '0' }, scrollDuration);
  });


