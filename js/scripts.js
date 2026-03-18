/*!
 * CGF 2026 — Main JavaScript
 * Hero crossfade, scroll animations, counter animation,
 * navbar shrink, back-to-top, page load transition,
 * scroll progress, hero entrance, magnetic CTA, image reveal,
 * panel accordion, team card stagger, page transitions
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Page Load Animation ---- */
  document.body.classList.add('page-loading');
  requestAnimationFrame(function () {
    document.body.classList.remove('page-loading');
    document.body.classList.add('page-loaded');
  });

  /* ---- UPGRADE 1: Scroll Progress Indicator ---- */
  var scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = scrollPercent + '%';
    }, { passive: true });
  }

  /* ---- Hero Crossfade ---- */
  var heroImages = document.querySelectorAll('.cgf-hero .hero-img');
  if (heroImages.length > 1) {
    var currentHero = 0;
    setInterval(function () {
      heroImages[currentHero].classList.remove('active');
      currentHero = (currentHero + 1) % heroImages.length;
      heroImages[currentHero].classList.add('active');
    }, 5000);
  }

  /* ---- Hero Parallax (subtle) ---- */
  var heroImagesContainer = document.querySelector('.cgf-hero .hero-images');
  if (heroImagesContainer) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.pageYOffset;
          var heroHeight = document.querySelector('.cgf-hero') ? document.querySelector('.cgf-hero').offsetHeight : 0;
          if (scrollY < heroHeight) {
            heroImagesContainer.style.transform = 'translateY(' + (scrollY * 0.25) + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- UPGRADE 2: Hero Text Entrance Animation ---- */
  var heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(function () {
      heroContent.classList.add('hero-revealed');
    }, 300);
  }

  /* ---- UPGRADE 2b: Mouse-Tracking Parallax on Hero Content ---- */
  var heroSection = document.querySelector('.cgf-hero');
  if (heroContent && heroSection && window.innerWidth > 991) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroSection.getBoundingClientRect();
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var mouseX = e.clientX - rect.left;
      var mouseY = e.clientY - rect.top;
      var offsetX = ((mouseX - centerX) / centerX) * -10;
      var offsetY = ((mouseY - centerY) / centerY) * -10;
      heroContent.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    });
    heroSection.addEventListener('mouseleave', function () {
      heroContent.style.transform = 'translate(0, 0)';
    });
  }

  /* ---- UPGRADE 3: Magnetic Hover CTA Button ---- */
  var heroCta = document.querySelector('.hero-cta');
  if (heroCta && heroSection && window.innerWidth > 991) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroCta.getBoundingClientRect();
      var ctaCenterX = rect.left + rect.width / 2;
      var ctaCenterY = rect.top + rect.height / 2;
      var dx = e.clientX - ctaCenterX;
      var dy = e.clientY - ctaCenterY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 80) {
        var pull = (80 - distance) / 80;
        var moveX = dx * pull * 0.08;
        var moveY = dy * pull * 0.08;
        moveX = Math.max(-6, Math.min(6, moveX));
        moveY = Math.max(-6, Math.min(6, moveY));
        heroCta.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
      } else {
        heroCta.style.transform = '';
      }
    });
    heroSection.addEventListener('mouseleave', function () {
      heroCta.style.transform = '';
    });
  }

  /* ---- Navbar Scroll-Shrink ---- */
  var navbar = document.querySelector('.cgf-navbar');
  if (navbar) {
    var shrinkThreshold = 60;
    var navbarTicking = false;
    window.addEventListener('scroll', function () {
      if (!navbarTicking) {
        requestAnimationFrame(function () {
          if (window.pageYOffset > shrinkThreshold) {
            navbar.classList.add('navbar-shrink');
          } else {
            navbar.classList.remove('navbar-shrink');
          }
          navbarTicking = false;
        });
        navbarTicking = true;
      }
    }, { passive: true });
  }

  /* ---- Scroll-Triggered Animations (data-animate) ---- */
  if ('IntersectionObserver' in window) {
    var animateObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = parseInt(el.getAttribute('data-animate-delay') || '0', 10);
          if (delay > 0) {
            setTimeout(function () {
              el.classList.add('animate-visible');
            }, delay);
          } else {
            el.classList.add('animate-visible');
          }
          animateObserver.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-animate]').forEach(function (el) {
      animateObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      el.classList.add('animate-visible');
    });
  }

  /* ---- UPGRADE 4: Image Curtain Reveal on Scroll ---- */
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.img-reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---- UPGRADE 5: Panel Card Accordion ---- */
  document.querySelectorAll('.panel-accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var accordion = trigger.closest('.panel-accordion');
      if (accordion) {
        accordion.classList.toggle('open');
      }
    });
  });

  /* ---- UPGRADE 6: Team Card Staggered Entrance ---- */
  if ('IntersectionObserver' in window) {
    var teamObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var cards = entry.target.querySelectorAll('.team-card');
          cards.forEach(function (card, index) {
            setTimeout(function () {
              card.classList.add('card-visible');
            }, index * 150);
          });
          teamObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.team-section').forEach(function (section) {
      teamObserver.observe(section);
    });
  } else {
    document.querySelectorAll('.team-card').forEach(function (card) {
      card.classList.add('card-visible');
    });
  }

  /* ---- Animated counter for Impact section ---- */
  var counters = document.querySelectorAll('.stat-number[data-target]');

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var startTime = performance.now();

    function update(currentTime) {
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(ease * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  /* ---- Growth chart bar animation (sequential) ---- */
  function animateBars() {
    var bars = document.querySelectorAll('.growth-bar .bar');
    bars.forEach(function (bar, index) {
      var height = bar.getAttribute('data-height');
      if (height) {
        setTimeout(function () {
          bar.style.height = height;
          // Add glow after animation completes
          setTimeout(function () {
            bar.classList.add('bar-glow');
          }, 1500);
        }, index * 200);
      }
    });
  }

  /* ---- Intersection Observer for Impact section ---- */
  if ('IntersectionObserver' in window) {
    var impactObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Animate counters
          counters.forEach(function (counter) {
            if (!counter.classList.contains('animated')) {
              counter.classList.add('animated');
              animateCounter(counter);
            }
          });
          // Animate bars sequentially
          animateBars();
          // Animate count-up elements
          var countUps = entry.target.querySelectorAll('.count-up');
          countUps.forEach(function (el, i) {
            setTimeout(function () {
              el.classList.add('visible');
            }, i * 150);
          });
          impactObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    var impactSection = document.querySelector('.impact-section');
    if (impactSection) {
      impactObserver.observe(impactSection);
    }

    // Generic fade-in for count-up elements outside impact section
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.count-up').forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: just show everything
    counters.forEach(function (counter) {
      var target = counter.getAttribute('data-target');
      var suffix = counter.getAttribute('data-suffix') || '';
      counter.textContent = parseInt(target, 10).toLocaleString() + suffix;
    });
    animateBars();
    document.querySelectorAll('.count-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---- Back to Top Button ---- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    var backToTopTicking = false;
    window.addEventListener('scroll', function () {
      if (!backToTopTicking) {
        requestAnimationFrame(function () {
          if (window.pageYOffset > 400) {
            backToTop.classList.add('visible');
          } else {
            backToTop.classList.remove('visible');
          }
          backToTopTicking = false;
        });
        backToTopTicking = true;
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Close mobile nav on link click ---- */
  var navLinks = document.querySelectorAll('.cgf-navbar .nav-link');
  var navCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse && navCollapse.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  /* ---- Hero CTA smooth scroll ---- */
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      var href = heroCta.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  /* ---- UPGRADE 11: Smooth Page Transitions ---- */
  document.querySelectorAll('.cgf-navbar .nav-link, .footer-brand').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      // Only intercept internal page links (not anchors, not external)
      if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto:')) {
        e.preventDefault();
        document.body.classList.add('page-exit');
        setTimeout(function () {
          window.location.href = href;
        }, 300);
      }
    });
  });

});
