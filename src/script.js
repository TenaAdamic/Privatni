// Organic Search Menu

const menuButton = document.getElementById('menu-button');
const flyoutMenu = document.getElementById('flyout-menu');





  menuButton.addEventListener('mouseover', () => {
    const isExpanded = JSON.parse(menuButton.getAttribute('aria-expanded'));
    menuButton.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      flyoutMenu.classList.add('hide-menu');
      flyoutMenu.classList.remove('show-menu');
    } else {
      flyoutMenu.classList.remove('hide-menu');
      flyoutMenu.classList.add('show-menu');
      flyoutMenu2.classList.add('hide-menu');
    }
  });

  menuButton.addEventListener('mouseout', () => {
    flyoutMenu.classList.add('hide-menu');
    flyoutMenu.classList.remove('show-menu');
  });

  flyoutMenu.addEventListener('mouseover', () => {
    flyoutMenu.classList.add('show-menu');
    flyoutMenu.classList.remove('hide-menu');
  });

  flyoutMenu.addEventListener('mouseout', () => {
    flyoutMenu.classList.add('hide-menu');
    flyoutMenu.classList.remove('show-menu');
  });

// Paid Search Menu

const menuButton2 = document.getElementById('menu-button2');
const flyoutMenu2 = document.getElementById('flyout-menu2');


  menuButton2.addEventListener('mouseover', () => {
    const isExpanded = JSON.parse(menuButton2.getAttribute('aria-expanded'));
    menuButton2.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      flyoutMenu2.classList.add('hide-menu');
      flyoutMenu2.classList.remove('show-menu');
    } else {
      flyoutMenu2.classList.remove('hide-menu');
      flyoutMenu2.classList.add('show-menu');
      flyoutMenu.classList.add('hide-menu');
    }
  });

  menuButton2.addEventListener('mouseout', () => {
    flyoutMenu2.classList.add('hide-menu');
    flyoutMenu2.classList.remove('show-menu');
  });

  flyoutMenu2.addEventListener('mouseover', () => {
    flyoutMenu2.classList.add('show-menu');
    flyoutMenu2.classList.remove('hide-menu');
  });

  flyoutMenu2.addEventListener('mouseout', () => {
    flyoutMenu2.classList.add('hide-menu');
    flyoutMenu2.classList.remove('show-menu');
  });

  // Organic search Mobile


  const menuButton3 = document.getElementById('menu-button3');
  const flyoutMenu3 = document.getElementById('flyout-menu3');

  const menuButton4 = document.getElementById('menu-button4');
  const flyoutMenu4 = document.getElementById('flyout-menu4');

  
    menuButton3.addEventListener('click', () => {
      const isExpanded = JSON.parse(menuButton3.getAttribute('aria-expanded'));
      menuButton3.setAttribute('aria-expanded', !isExpanded);
  
      if (isExpanded) {
        flyoutMenu3.classList.add('hide-menu');
        flyoutMenu3.classList.remove('show-menu');
      } else {
        flyoutMenu3.classList.remove('hide-menu');
        flyoutMenu3.classList.add('show-menu');
        // flyoutMenu4.classList.add('hide-menu');
      }
    });
  
    menuButton3.addEventListener('mouseout', () => {
      flyoutMenu3.classList.add('hide-menu');
      flyoutMenu3.classList.remove('show-menu');
    });
  
    flyoutMenu3.addEventListener('mouseover', () => {
      flyoutMenu3.classList.add('show-menu');
      flyoutMenu3.classList.remove('hide-menu');
      flyoutMenu4.classList.add('hide-menu');
      flyoutMenu4.classList.remove('show-menu');
    });
  
    flyoutMenu3.addEventListener('mouseleave', () => {
      flyoutMenu3.classList.add('hide-menu');
      flyoutMenu3.classList.remove('show-menu');
    });

    // Paid search Mobile


 
  
  
    menuButton4.addEventListener('click', () => {
      const isExpanded = JSON.parse(menuButton4.getAttribute('aria-expanded'));
      menuButton4.setAttribute('aria-expanded', !isExpanded);
  
      if (isExpanded) {
        flyoutMenu4.classList.add('hide-menu');
        flyoutMenu4.classList.remove('show-menu');
      } else {
        flyoutMenu4.classList.remove('hide-menu');
        flyoutMenu4.classList.add('show-menu');
        // flyoutMenu3.classList.add('hide-menu');
      }
    });
  
    menuButton4.addEventListener('mouseout', () => {
      flyoutMenu4.classList.add('hide-menu');
      flyoutMenu4.classList.remove('show-menu');
    });
  
    flyoutMenu4.addEventListener('mouseover', () => {
      flyoutMenu4.classList.add('show-menu');
      flyoutMenu4.classList.remove('hide-menu');
      flyoutMenu3.classList.add('hide-menu');
      flyoutMenu3.classList.remove('show-menu');
    });
  
    flyoutMenu4.addEventListener('mouseout', () => {
      flyoutMenu4.classList.add('hide-menu');
      flyoutMenu4.classList.remove('show-menu');
    });

    // Responsive: toggle hamburger-menu & off-screen-menu; 



      const hamburgerMenu = document.getElementById('hamburger-menu');
      const offScreenmenu = document.getElementById('off-screen-menu');

      const closeButton = document.getElementById('close');

          hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            offScreenmenu.classList.toggle('active');
            closeButton.classList.toggle('active');
            console.log('Hamburger button clicked!');
          });

          // toggle close button (x);

          // closeButton.addEventListener('click', () => {
          //   closeButton.style.display = 'none';
          //   hamburgerMenu.style.display = 'block';

          // });

          // closeButton.addEventListener('click', () => {
            
          //   hamburgerMenu.classList.remove('active');
          //   hamburgerMenu.classList.add('inactive');

          //   offScreenmenu.classList.remove('active');
          //   offScreenmenu.classList.add('inactive');

          //   closeButton.classList.remove('active');
          //   closeButton.classList.add('inactive');

          //   console.log('Close button clicked!');
          // });


          closeButton.addEventListener('click', () => {
            if (hamburgerMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.classList.add('inactive');
            } else {
                hamburgerMenu.classList.remove('inactive');
                hamburgerMenu.classList.add('active');
            }
        
            if (offScreenmenu.classList.contains('active')) {
                offScreenmenu.classList.remove('active');
                offScreenmenu.classList.add('inactive');
            } else {
                offScreenmenu.classList.remove('inactive');
                offScreenmenu.classList.add('active');
            }
        
            if (closeButton.classList.contains('active')) {
                closeButton.classList.remove('active');
                closeButton.classList.add('inactive');
            } else {
                closeButton.classList.remove('inactive');
                closeButton.classList.add('active');
            }
        
            console.log('Close button clicked!');
        });







