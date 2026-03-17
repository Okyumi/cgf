/*!
 * CGF 2026 — Main JavaScript
 * Counter animation & intersection observer
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Animated counter for Impact section ---- */
  const counters = document.querySelectorAll('.stat-number[data-target]');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  /* ---- Growth chart bar animation ---- */
  function animateBars() {
    const bars = document.querySelectorAll('.growth-bar .bar');
    bars.forEach(function (bar) {
      const height = bar.getAttribute('data-height');
      if (height) {
        bar.style.height = height;
      }
    });
  }

  /* ---- Intersection Observer for scroll animations ---- */
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
          // Animate bars
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
});
