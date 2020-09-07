import { useEffect } from 'react';
import { RoughEase, Linear, TweenLite, TimelineMax } from 'gsap/all';

const useStars = () => {
    useEffect(() => {
        // function starsshine() {
        // console.log('is this running');
        var width = 1500;
        var height = 800;

        var banner = document.querySelector('#banner');
        var baseStar = document.querySelector('.star');
        // console.log('basestar is', baseStar);

        var frag = document.createDocumentFragment();

        var appearMin = 0.3;
        var appearMax = 0.8;

        // var delayMin = 2;
        // var delayMax = 6;
        var delayMin = 4;
        var delayMax = 8;

        var durationMin = 0.3;
        var durationMax = 1;

        var numAnimations = 50;
        // var numStars = 300;
        var numStars = 200;

        var stars = [];
        var eases = [];

        for (var i = 0; i < numAnimations; i++) {
            var ease = new RoughEase({
                template: Linear.easeNone,
                strength: random(1, 3),
                // points: Math.floor(random(50, 200)),
                points: Math.floor(random(50, 100)),
                taper: 'both',
                randomize: true,
                clamp: true,
            });

            eases.push(ease);
        }

        // window.addEventListener('load', onLoad);

        function onLoad() {
            // console.log('in load');
            for (var i = 0; i < numStars; i++) {
                stars.push(createStar());
            }

            banner.removeChild(baseStar);
            banner.appendChild(frag);
        }

        function createStar() {
            // console.log('in create star');
            // var index = random(textures.length)|0;
            // var star = textures[index].cloneNode(true);
            var star = baseStar.cloneNode(true);
            frag.appendChild(star);

            TweenLite.set(star, {
                rotation: random(360),
                xPercent: -50,
                yPercent: -50,
                scale: 0,
                x: random(width),
                y: random(height),
            });

            var tl = new TimelineMax({ repeat: -1, yoyo: true });

            for (var i = 0; i < numAnimations; i++) {
                var ease1 = eases[Math.floor(random(numAnimations))];
                var ease2 = eases[Math.floor(random(numAnimations))];

                var alpha = random(0.7, 1);
                var scale = random(0.15, 0.4);

                var appear = '+=' + random(appearMin, appearMax);
                var delay = '+=' + random(delayMin, delayMax);
                var duration1 = random(durationMin, durationMax);
                var duration2 = random(durationMin, durationMax);

                tl.to(
                    star,
                    duration1,
                    { autoAlpha: alpha, scale: scale, ease: ease1 },
                    delay
                ).to(
                    star,
                    duration2,
                    { autoAlpha: 0, scale: 0, ease: ease2 },
                    appear
                );
            }

            tl.progress(random(1));

            return {
                element: star,
                timeline: tl,
            };
        }

        function random(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }
            if (min > max) {
                var tmp = min;
                min = max;
                max = tmp;
            }
            return min + (max - min) * Math.random();
        }

        onLoad();
        // }
    }, []);
};

export default useStars;
