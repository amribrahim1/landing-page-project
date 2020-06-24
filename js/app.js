/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
for (const section of sections) {  
    // build the nav
    const li = document.createElement('li'); 
    ul.appendChild(li);   
    const a = document.createElement('a'); 
    a.setAttribute('href', `#${section.id}`);    

    // Add class 'active' to section when near top of viewport
    addEventListener('scroll', function onScroll() { 
        const scrollPos = $(document).scrollTop();
        $('.navbar__menu a').each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr("href"));
            if (refElement.position().top-200 <= scrollPos && refElement.position().top-200 + refElement.height() > scrollPos) {
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    })

    // Scroll to anchor ID using scrollTO event
    function scrollTo(aid){
        var aTag = $(`section[id='${aid}']`);
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }


    /**
     * End Main Functions
    * Begin Events
     * 
    */

    // Build menu 

    // Scroll to section on link click
    a.addEventListener('click', function clickHandler() {    
        scrollTo(`${section.id}`);          
        // remove active from another sections
        const activeSection = $(`#${section.id}`);
        const allLi = ul.querySelectorAll('a');      
        allLi.forEach((a) => {               
            a.classList.remove('active');    
            $('section').removeClass('active-class'); 
        })        
        // Set section as active
        this.classList.add('active');
        activeSection.addClass('active-class');  
        
      
    });
    a.textContent = section.dataset.nav;    
    li.appendChild(a);
    
};
