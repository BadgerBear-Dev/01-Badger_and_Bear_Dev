anime({
        targets: '.logo_svg',
        opacity: 1,
        duration: 300,
        loop: false,
        translateY: 42,
        delay: 450,
        easing: 'easeInOutExpo',
    

});


anime({
        targets: ['.head_logo', '.headline_one'],
        opacity: 1,
        duration: 2200,
        loop: false,
        translateY: -10,

});


anime({
        targets: ['.svgDiv'],
        opacity: 1,
        duration: 1800,
        loop: false,
        translateY: [13, 0],
        height: 2.4,
        width: '100%' ,
        backgroundColor: '#FFF',
        easing: 'easeInOutQuad',
        borderRadius: ['100%', '0%'],
        delay: 250
  

});
