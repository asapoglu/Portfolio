/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("ul li a");

        function changeActiveMenu() {
            let index = sections.length;

            while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

            navLinks.forEach((link) => link.parentNode.classList.remove("active"));
            navLinks[index].parentNode.classList.add("active");
        }

        changeActiveMenu();  // İlk yüklemede doğru menü öğesini aktif et
        window.addEventListener("scroll", changeActiveMenu);
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Tüm linkleri seç
        const links = document.querySelectorAll('a[href^="#"]');

        // Her bir link için bir event listener ekle
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                // Varsayılan hareketi önle
                e.preventDefault();
                // Hedef elementi al
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                // Hedef elemente yumuşak kaydırma yap
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    });

    document.addEventListener("scroll", function () {
        var header = document.getElementById('headerSection');
        if (window.scrollY > 50) { // 50px'den fazla kaydırıldığında
            header.style.backgroundColor = 'rgba(16, 0, 40, 1)'; // Arka planı hafif opak yap
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Arka planı tekrar saydam yap
        }
    });
    /*------------------
        Portfolio filter
    --------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        const itemsPerPage = 8;
        let currentPage = 1;
        const items = [
            {
                img: "img/portfolio/SoldierSiegeSS.png",
                title: "Soldier Siege",
                promotional: "Place your soldiers in slots, roll the dice, spawn soldiers, dominate the battlefield!",
                href: "img/portfolio/SoldierSiegeVid.mp4"
            }
            , {
                img: "img/portfolio/HatsOnHeadsSS.png",
                title: "Hats on Heads",
                promotional: "Drag and release to throw hats. Try to put hats on heads. Clone your hats. Upgrade your hats count and income. Reach the end. And most importantly don't forget to have fun!",
                href: "img/portfolio/HatsOnHeadsVid.mp4"
            },
            {
                img: "img/portfolio/ConnectDefenceSS.png",
                title: "Connect Defence",
                promotional: "Combine elements with bullets!  Use turrets to protect your base. Keep playing by unlocking new elements and projectiles. Combine elements to make different combinations.",
                href: "img/portfolio/ConnectDefenceVid.mp4"
            },
            {
                img: "img/portfolio/PixelTornadoSS.png",
                title: "Pixel Tornado",
                promotional: "Devour objects with your tornado. Earn money. Upgrade your level and buy orbits. Fell the satisfying sensation of destroying the city. Reach the end. And most importantly don't forget to have fun!",
                href: "img/portfolio/PixelTornadoVid.mp4"
            },
            {
                img: "img/portfolio/CannonadeSS.png",
                title: "Cannonade!",
                promotional: "Buy cannons. Paint your canvas. Sell your art. Upgrade yourself by buying and merging cannons. Don't let the enemy cannon trying to stop you. And most importantly don't forget to have fun!",
                href: "img/portfolio/CannonadeVid.mp4"
            },
            {
                img: "img/portfolio/StealthAndStealSS.png",
                title: "Stealth and Steal",
                promotional: "Embark on an adrenaline-pumping adventure with Stealth and Steal, the ultimate top-down action stealth game! Take on the role of a skilled thief, infiltrate high-security buildings, and steal priceless treasures without ever being detected by the guards. Freeze time, control the ghost form, and execute strategic actions to achieve the perfect heist. Watch as your character performs high-speed escapes after completing objectives or running out of ghost form energy.",
                href: "img/portfolio/StealthAndStealVid.mp4"
            },
            {
                img: "img/portfolio/DiepIdleSS.png",
                title: "Diep Idle",
                promotional: "Upgrade your towers and defeat enemies!  Start upgrading your tower! Enemies are coming from all sides. Try to stand against them. Get upgrades as you level up. Choose the type of tower. Be careful which features you get! Bullet speed, how many bullets you shoot, sniper or auto gun?",
                href: "img/portfolio/DiepIdleVid.mp4"
            },
            {
                img: "img/portfolio/DragTheDotSS.png",
                title: "Drag The Dot",
                promotional: "Use your fingers, drag the dots to pass the levels. That is all you got to do!",
                href: "img/portfolio/DragTheDotVid.mp4"
            },
            {
                img: "img/portfolio/PullAndGrindSS.png",
                title: "Pull and Grind",
                promotional: "Pull objects to the grinder with your rope. Add stickman. Merge them. Grind objects to earn money. And most importantly don't forget to have fun!",
                href: "img/portfolio/PullAndGrindVid.mp4"
            },
            {
                img: "img/portfolio/ClickerAirlinesSS.png",
                title: "Clicker Airlines",
                promotional: " Tap the screen to accelerate the planes. Open new airports. Buy new planes. Make money.Become the best airline in the world. Have fun while managing your airlines!",
                href: ""
            }, {
                img: "img/portfolio/MallSecuritySS.png",
                title: "Mall Security",
                promotional: "The thieves are about to come! Keep your eyes on them and catch thieves.",
                href: ""
            }, {
                img: "img/portfolio/FlexyMakeupSS.png",
                title: "Flexy Makeup",
                promotional: "Turn your head left and right. Collect the right cosmetics and become the most beauty in the city! ",
                href: ""
            }, {
                img: "img/portfolio/DrawNPunchSS.png",
                title: "Draw N Punch",
                promotional: "Keep your guard up and beat some enemies! Improve your boxer by drawing your fists according to the obstacles. Punch them in the face!",
                href: ""
            }, {
                img: "img/portfolio/ArcherGangSS.png",
                title: "Archer Gang!",
                promotional: "Take aim and recruit new warriors to your team. Take aim at your enemies. Be careful not to damage your vehicle!",
                href: ""
            }, {
                img: "img/portfolio/StylistBattleSS.png",
                title: "Stylist Battle",
                promotional: "Gorgeous parade is up to you! These beauties need your direction! Get them ready for the fashion show and ready to compete!",
                href: ""
            }, {
                img: "img/portfolio/HeistGangSS.png",
                title: "Heist Gang",
                promotional: "Let's make some cash!  Increase your level by collecting money bags. Rob people on the street according to your level. Grow your team and discover different heist ways.",
                href: ""
            }, {
                img: "img/portfolio/SmashingTouchSS.png",
                title: "Smashing Touch",
                promotional: "You can destroy lots of things from a simple cube to the mighty pyramids, just by your touch.  Feel the satisfaction of destroying objects.  Upgrade your power, get helpers and destroy faster! Get ready to crumble them to dust!",
                href: ""
            }
            , {
                img: "img/portfolio/HamstersOnWheelsSS.png",
                title: "Hamsters Wheels",
                promotional: "You have to work hard and also smart to manage the production line of your tasty hamster foods. Harvest the crops. Put them in the production machine. Pack them, and sell them to your customers.",
                href: ""
            }
            , {
                img: "img/portfolio/DressedUpSS.png",
                title: "Dressed Up!",
                promotional: "Let's get ready. Design your outfit and be the most beautiful girl in the city!",
                href: ""
            }
            , {
                img: "img/portfolio/CrystalSeekerSS.png",
                title: "Crystal Seeker",
                promotional: "Crystal Seeker is eager to find some precious things. Are you ready to help him on his journey? Find your way throughout the path. Avoid obstacles. Upgrade your hero. Collect boosts. Find crystals. Trade your crystals to get better ones. Have fun!",
                href: ""
            }
            , {
                img: "img/portfolio/SwapCurrencySS.png",
                title: "Swap Currency",
                promotional: "It's raining money to the shop! Count the money and deliver correct currencies to customers. Let's see how fast your hands are.",
                href: ""
            }
        ];

        function renderItems(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const itemsToShow = items.slice(startIndex, endIndex);

            const portfolioGallery = document.getElementById('portfolioItems');
            portfolioGallery.innerHTML = ''; // Clear existing items


            itemsToShow.forEach(item => {
                const playButtonHTML = item.href ? `<a href="${item.href}" class="play-btn video-popup"><i class="fa fa-play"></i></a>` : '';
                const itemHTML = `
                    <div class="col-lg-3 col-md-6 col-sm-6 mix branding">
                        <div class="portfolio__item">
                            <div class="portfolio__item__video" style="background-image: url('${item.img}');">
                                ${playButtonHTML}
                            </div>
                            <div class="portfolio__item__text">
                                <h4>${item.title}</h4>
                                <p>${item.promotional}</p>
                            </div>
                        </div>
                    </div>
                `;

                portfolioGallery.innerHTML += itemHTML;
            });

            initializeMagnificPopup();
        }

        document.getElementById('prev').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                renderItems(currentPage);
            }
        });

        document.getElementById('next').addEventListener('click', function (e) {
            e.preventDefault();
            if ((currentPage * itemsPerPage) < items.length) {
                currentPage++;
                renderItems(currentPage);
            }
        });

        renderItems(currentPage); // Initially render the first page
    });

    function initializeMagnificPopup() {
        $('.video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    $(document).ready(function () {
        initializeMagnificPopup(); // Sayfa yüklendiğinde popup'ı başlat
    });

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });





})(jQuery);