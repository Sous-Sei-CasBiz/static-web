const menu = document.querySelector('#menu');
const btnmenu = document.querySelector('#btnmenu');
const close = document.querySelector('#close');
let navlist = document.querySelectorAll('.navlist');


btnmenu.addEventListener('click', function() {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        btnmenu.classList.add('hidden');
        close.classList.remove('hidden');
    }
})
close.addEventListener('click', function(){
    if(btnmenu.classList.contains('hidden')){
        menu.classList.add('hidden');
        close.classList.add('hidden');
        btnmenu.classList.remove('hidden');
    }
})
function toggleMenu(className){
    var menu = document.querySelector('.'+className);
       menu.childNodes[3].classList.toggle('hidden');
       menu.childNodes[5].classList.toggle('hidden');
}

// ===== slide========
$('.slider').slick({
    infinite: true,
    lazyLoad: 'ondemand',
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.arrow-pre',
    nextArrow: '.arrow-next',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
});
// =============

for (let i = 0; i < navlist.length; i++) {
	navlist[i].addEventListener('click', function() {
		for (let x = 0; x < navlist.length; x++) {
			if (navlist[x] == this) {
				navlist[x].classList.add('active');
			} else {
				navlist[x].classList.remove('active');
			}
		}
	});
    // navlist.addEventListener('click', function(){
    //     alert(1);
    //     for (let y = 0; y < navlist.length; y++){
    //         if (navlistdoc[y] == this){

    //             this.childNodes[3].classList.add('hidden');
    //             this.childNodes[5].classList.remove('hidden');
    //         }else{
    //             this.childNodes[3].classList.remove('hidden');
    //             this.childNodes[5].classList.add('hidden');
        
    //         }
    //     }
    // })
}

// console value class
// var doc = document.querySelector('.navlistdoc');
// doc.addEventListener('click' ,function(){
//     doc.childNodes[3].classList.add('hidden')
//     doc.childNodes[5].classList.remove('hidden')
//     console.log(doc.childNodes);
// })

