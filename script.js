const loco = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        reloadOnContextChange: true,
        lerp: 0.04,
        touchMultiplier: 4,
        smoothMobile: 0,
        smartphone: {
            smooth: !0,
            breakpoint: 600
        },
        tablet: {
            smooth: !1,
            breakpoint: 1024
        }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();


    // NAVLINKS

    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                locoScroll.scrollTo(target);
            }
        });
    });


}
loco();

// MOUSE FOLLOWER

const mouseFollower = () => {
    window.addEventListener("mousemove", function (dets) {
        gsap.to("#circle", {
            x: dets.clientX,
            y: dets.clientY,
            ease: Expo,
            duration: 0.6
        })
    })
}
mouseFollower();

// SCALE CIRCLE

const scaleCircle = () => {
    const scale = document.querySelectorAll(".scale");
    scale.forEach(elem => {
        elem.addEventListener("mousemove", () => {
            gsap.to("#circle", {
                mixBlendMode: "normal",
                backgroundColor: "#1a1818",
                scale: 13,
                ease: Expo
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to("#circle", {
                mixBlendMode: "difference",
                backgroundColor: "#999",
                scale: 1,
                ease: Expo
            })
        })
    })
}
scaleCircle();

// LANDING PAGE

const landingPageAnim = () => {
    gsap.to(".navbar", {
        display: "none"
    })
    var tl = gsap.timeline();

    tl
        .to(".loader3 img, .loader3 p", {
            delay: 0.5,
            y: 0,
            ease: Expo,
            stagger: 0.2
        })
        .to(".loader3", {
            delay: 1,
            height: "0",
            ease: Power2,
            borderRadius: "0 0 50% 50%"
        })
        .to(".loader2", {
            height: "0",
            ease: Power2,
            delay: -0.3,
            borderRadius: "0 0 50% 50%"
        })
        .to(".loader1", {
            height: "0",
            ease: Power2,
            delay: -0.3,
            borderRadius: "0 0 50% 50%"
        }, "a")
        .to(".navbar", {
            display: "flex"
        }, "a")
        .from(".navbar, .navbar-mob", {
            y: -25,
            duration: 1.7,
            opacity: 0,
            ease: Expo.easeInOut
        })
        .to("#landing-page .boundingelem", {
            y: 0,
            duration: 1.7,
            stagger: 0.2,
            ease: Expo.easeInOut
        }, "a")
        .from(".profile-img", {
            opacity: 0,
            ease: Power2
        })
        .to("#landing-page", {
            backgroundColor: "#1a1818",
            ease: Power3,
            scrollTrigger: {
                trigger: "#landing-page .boundingelem",
                scroller: "#main",
                start: "top 30%",
                scrub: 1
            }
        })
}
landingPageAnim();

// ABOUT

const aboutAnim = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            scroller: "#main",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tl.to("#about .boundingelem", {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
    });
}
aboutAnim();

const aboutDets = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-dets .right",
            scroller: "#main",
            start: "top 45%"
        }
    })

    tl
        .from("#about-dets .right h1, #about-dets .right p, #about-dets .right h4, #about-dets .right a", {
            x: "-75%",
            opacity: 0,
            stagger: 0.09,
            ease: Expo
        })
}
aboutDets();

// PROJECT

const projectAnim = () => {

    document.querySelectorAll(".project").forEach((project) => {

        project.addEventListener("mouseleave", () => {
            gsap.to(circle, {
                backgroundColor: "#999",
                scale: 1,
                duration: 0.2,
                ease: Expo
            })
            circle.innerHTML = ``
            circle.style.mixBlendMode = "difference"
            gsap.to(project.querySelector("img"), {
                opacity: 0,
                ease: Power3,
            })
        });

        var rotate = 0;
        var diffrot = 0;
        project.addEventListener("mousemove", (dets) => {
            var top = dets.clientY - project.getBoundingClientRect().top;
            var left = dets.clientX - project.getBoundingClientRect().left;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(circle, {
                backgroundColor: "#dadada",
                scale: 12,
                duration: 0.2,
                ease: Expo
            });

            circle.innerHTML = `<p>view</p>`
            circle.style.mixBlendMode = "normal"
            gsap.to(project.querySelector("img"), {
                opacity: 1,
                top: top,
                left: left,
                ease: Power3,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.3),
            });
        });
    });
}
projectAnim();

// SKILL

const skill = () => {
    gsap.from("#skills .bw-card", {
        opacity: 0,
        y: 45,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            scroller: "#main",
            trigger: "#skills",
            start: "top 65%",
            toggleActions: "play none none reverse"
        }
    });
}
skill();

// CRAFT

const craftAnim = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#craft",
            scroller: "#main",
            scrub: 1,
            pin: true,
            end: "+=1800"
        }
    })

    tl
        .to("#craft h1", {
            x: "-72%",
            ease: Expo
        }, "a")
        .to(".craft-img img", {
            scale: 1.2,
            ease: Power2
        }, "a")
}
craftAnim();

// CERTIFICATION

const certHover = () => {
    const circle = document.querySelector("#circle");
    document.querySelectorAll("#certifications .cert-row").forEach(row => {
        const link = row.querySelector("a.cert-verify");
        if (!link) return;
        row.addEventListener("mousemove", () => {
            circle.innerHTML = `<p><span>verify</span></p>`
        })
        row.addEventListener("mouseleave", () => {
            circle.innerHTML = ``
        })
        row.addEventListener("click", (e) => {
            if (e.target.closest("a")) return;
            window.open(link.href, "_blank", "noopener");
        })
    });
}
certHover();

// BACK TO TOP

const toTop = () => {
    document.querySelector(".back-top").addEventListener("click", () => {
        location.reload();
    })
    const logo = document.querySelectorAll("nav img");
    logo.forEach(logo => {
        logo.addEventListener("click", () => {
            location.reload();
        })
    })
}
toTop();

// MOBILE MENU

const mobMenu = () => {
    const menuBtn = document.querySelector(".navbar-mob h4");
    menuBtn.addEventListener("click", () => {
        var tl = gsap.timeline();

        tl
            .to("#menu, .bg1, .bg2", {
                height: "100%",
                ease: Power3,
                stagger: 0.2,
                borderRadius: 0
            })
            .to(".bg2 a", {
                opacity: 1,
                ease: Power2,
                stagger: 0.06
            })
            .from(".bg2 .menu-footer p", {
                opacity: 0,
                ease: Expo,
            })
    });

    const menuLink = document.querySelectorAll(".bg2 a");
    menuLink.forEach(elem => {
        elem.addEventListener("click", () => {
            var tl1 = gsap.timeline();

            tl1
                .to(".bg2 a", {
                    opacity: 0,
                    ease: Power2,
                    stagger: 0.06
                })
                .to(".bg2", {
                    height: 0,
                    ease: Power3,
                    borderRadius: "0 0 500 500"
                })
                .to(".bg1", {
                    height: 0,
                    ease: Power3,
                    borderRadius: "0 0 500 500",
                    delay: -0.3
                }).to("#menu", {
                    height: 0,
                    ease: Power3,
                    borderRadius: "0 0 500 500",
                    delay: -0.4
                })

        })
    })

}
mobMenu();

// CONTACT FORM (opens the visitor's email app with the message prefilled)

const contactForm = () => {
    const form = document.querySelector("#contact-form");
    const successMsg = document.querySelector("#submit-success");
    const submitBtn = document.querySelector("#submit-btn");
    const TO = "ameersubhan568@gmail.com";

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = form.querySelector("#name").value.trim();
            const email = form.querySelector("#email").value.trim();
            const message = form.querySelector("#message").value.trim();

            const subject = encodeURIComponent("Portfolio message from " + name);
            const body = encodeURIComponent(message + "\n\n--\n" + name + "\n" + email);

            if (submitBtn) {
                submitBtn.innerText = "Opening mail...";
                submitBtn.style.opacity = "0.7";
                submitBtn.style.pointerEvents = "none";
            }

            window.location.href = "mailto:" + TO + "?subject=" + subject + "&body=" + body;

            setTimeout(() => {
                form.style.display = "none";
                if (successMsg) {
                    successMsg.style.display = "flex";
                }
            }, 600);
        });
    }
};
contactForm();

