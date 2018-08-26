$( document ).ready(function(){ 

            /*-------------------------- Scroll --------------------------*/

            var lastPos = document.body.scrollTop || document.documentElement.scrollTop,
                perspective = 300,
                zSpacing = -500,
                sequenceNum = 1, // Number of the current frame
                scrollCount = 0; // This variable here controls how fast the animation by controling the animation is play every how many ties scroll is triggered
            zVals = [],
                $frames = $(".frame"),
                frames = $frames.toArray(),
                scrollMsg = document.getElementById("instructions-overlay");
            numFrames = $frames.length;

            for (var i = 0; i < numFrames; i++) {
                zVals.push((numFrames - i) * zSpacing);
            }
            
            
            $(window).scroll(function(d, e) {
                var top = document.body.scrollTop || document.documentElement.scrollTop,
                    delta = lastPos - top;
                lastPos = top;
                for (var i = 0; i < numFrames; i++) {
                    var newZVal = (zVals[i] += (delta * -1.5)),
                        frame = frames[i],
                        transform = "translateZ(" + newZVal + "px)",
                        opacity = newZVal < 200 ? 1 : 1 - parseInt((newZVal - 200) / (perspective - 200) * 10) / 5,
                                            display = newZVal > perspective ? "none" : "block";      
//                    opacity = 1,
//                        display = "block";
                    // The original code causes frames to disappear earlier


                    frame.setAttribute("style",
                        "-webkit-transform:" + transform + ";-moz-transform:" + transform + ";display:" + display + ";opacity:" + opacity);
                    //                $(frame).css("filter", "blur(" + ( Math.abs(zVals[i]))/70 + "px)");

                    if (document.documentElement.scrollTop != 0) {
                        $("#scroll-down").css("opacity", "0");
                    } else {
                        $("#scroll-down").css("opacity", "1");
                    }
            
            

                   

                    /*-------------------------- Walk cycle --------------------------*/

                    var images = [
                        "images/walk_cycle/walk_1.svg",
                        "images/walk_cycle/walk_2.svg",
                        "images/walk_cycle/walk_3.svg",
                        "images/walk_cycle/walk_4.svg",
                        "images/walk_cycle/walk_5.svg",
                        "images/walk_cycle/walk_6.svg",
                        "images/walk_cycle/walk_7.svg",
                        "images/walk_cycle/walk_8.svg",
                        "images/walk_cycle/walk_9.svg",
                        "images/walk_cycle/walk_10.svg",
                        "images/walk_cycle/walk_11.svg",
                        "images/walk_cycle/walk_12.svg",
                    ];

                    if (scrollCount == 15) { // The number here controls how fast the animation is played. The larger it is, the slower.
                        if (sequenceNum < images.length) {
                            sequenceNum += 1;
                        } else {
                            sequenceNum = 1;
                        }
                        scrollCount = 0;
                    }
                    $("#walk").attr("src", "images/walk_cycle/walk_" + sequenceNum + ".png");
                    //                console.log(scrollCount);

                    scrollCount += 1;
                }
            });

            
            /*-------------------------- Mousemove parallx --------------------------*/

            $(window).mousemove(function(e) {
                parallaxIt(e, "#korea-ball", -50);
                parallaxIt(e, "#walk", -20);
                //          parallaxIt(e, "#panda-front", -30);
            });


            function parallaxIt(e, target, movement) {
                var $this = $("#fixed-container");
                var relX = e.pageX - $this.offset().left;
                var relY = e.pageY - $this.offset().top;

                TweenMax.to(target, 1, {
                    x: (relX - $this.width() / 2) / $this.width() * movement - $(target).width() / 2,
                    y: (relY - $this.height() / 2) / $this.height() * movement - $(target).height()/2
                });
                //              And be aware that to get the dimensions of target, we have to select it with $() otherwise the browser'll report errors
                //              console.log($(target).width());
            }

          
})



                 /*-------------------------- Logo hover --------------------------*/

                    var $korea = $("#korea-symbol"),
                        $japan = $("#japan-symbol");

                    function japanHover() {
                        TweenMax.to($japan, .5, {
                            scale: 2,
                            transformOrigin: "center center",
                            ease: Power2.sine
                        });
                    }

                    function japanHoverOff() {
                        TweenMax.to($japan, .5, {
                            scale: 1,
                            transformOrigin: "center center",
                            ease: Power2.sine
                        });
                    }

                    function koreaHover() {
                        TweenMax.to($korea, .5, {
                            scale: 2,
                            transformOrigin: "center center",
                            ease: Power2.sine
                        });

                    }

                    function koreaHoverOff() {
                        TweenMax.to($korea, .5, {
                            scale: 1,
                            transformOrigin: "center center",
                            ease: Power2.sine
                        });

                    }

                     /*-------------------------- Title hover --------------------------*/
                    

                    var $imageLayers = $(".image-layer");

                    $("p")
                        .on( "mouseover", function() {
                            TweenMax.to($imageLayers, .5, {opacity:0,ease: Power2.sine});
                        })
                        .on( "mouseleave", function() {
                            TweenMax.to($imageLayers, .5, {opacity:1,ease: Power2.sine});
                        })
                        .on( "mouseover", function() {
                            TweenMax.to($h2, .3, {opacity:0,ease: Power2.sine});
                        })
                        .on( "mouseleave", function() {
                            TweenMax.to($h2, .3, {opacity:1,ease: Power2.sine});
                        });

                    function titleHover(x) {
//                        var $title = $("h2");
                        
                        TweenMax.to(x, .5, {opacity:0,ease: Power2.sine});
                    }

                    function titleHoverOff() {
                        
                        TweenMax.to($title, .5, {opacity:1,ease: Power2.sine});
                    }
