$( document ).ready( function() {});

/*---------------------------------- HOVER EVENTS ----------------------------------*/
        
        var $nonJapan = $(".non-japan"),
            $nonKorea = $(".non-korea"),
            $flagClip = $(".flag-bg"),
            $countryName = $("#country-name"),
            $korea = $("#korea-symbol"),
            $japan = $("#japan-symbol");

        function japanHover() {
            $nonJapan.css("opacity", "0");
            $flagClip.css("animation", "flag-pop-up 1s ease both");
            TweenMax.to($japan, .8, { scale:3.5, transformOrigin:"center center", ease: Power2.sine});
            $countryName.text("JAPAN")
                        .css({"color":"#FA0064", "bottom":"30%"
                             });
        }

        function japanHoverOff() {
            $nonJapan.css("opacity", "1");
            $flagClip.css("animation", "flag-pop-up-reverse .8s ease forwards");
            TweenMax.to($japan, .8, { scale:1, transformOrigin:"center center", ease: Power2.sine});
        }

        function koreaHover() {
            $nonKorea.css("opacity", "0");
            $flagClip.stop(true).css("animation", "flag-pop-up 1s ease both");
            TweenMax.to($korea, .8, { scale:3.5, transformOrigin:"center center", ease: Power2.sine});
            $countryName.text("KOREA")
                        .css({"color": "#0041FA", "bottom":"20%"});
        }

        function koreaHoverOff() {
            $nonKorea.css("opacity", "1");
            $flagClip.css("animation", "flag-pop-up-reverse .8s ease forwards");
            TweenMax.to($korea, .8, { scale:1, transformOrigin:"center center", ease: Power2.sine});
            //          Without .stop(true) the animation works in a frantical way. Not sure why but .stop() works like charm
        }

/*---------------------------------- BLURB BUBBLES ----------------------------------*/
        
        var $blurbText = $(".blurb-text"),
            $allBubbles = $("#all-bubbles"),
            $bubble1 = $("#bubble_1"),
            $bubble2 = $("#bubble_2"),
            $bubble3 = $("#bubble_3"),
            $close = $("#close");

        function walkClicked() {
            $blurbText.css({
                "visibility": "visible",
                "animation": "shifted-pop-up 1s 1s ease forwards"
            });
            $bubble1.css("animation", "pop-up 1s ease forwards");
            $bubble2.css("animation", "pop-up 1s .3s ease forwards");
            $bubble3.css("animation", "pop-up 1s .5s ease forwards");
            $close.css("animation", "pop-up 1s ease forwards");

        }

        function closeClicked() {
            $blurbText.css("animation", "shifted-pop-up-reverse 1s 1s ease backwards");
            $bubble1.css("animation", "pop-up-reverse 1s ease backwards");
            $bubble2.css("animation", "pop-up-reverse 1s .3s ease backwards");
            $bubble3.css("animation", "pop-up-reverse 1s .5s ease backwards");
            $close.css("animation", "pop-up-reverse 1s ease backwards");

        }
        