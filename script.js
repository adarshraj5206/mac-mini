
// Toggle mobile menu
document.querySelector('.upper-nav button').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Model details functionality
document.addEventListener('DOMContentLoaded', function () {
  const modelRows = document.querySelectorAll('.mac-model');
  const detailsPanel = document.getElementById('model-details');
  const modelTitle = document.getElementById('model-title');
  const modelDescription = document.getElementById('model-description');

  // Model data for dynamic content
  const modelData = {
    'm2-base': {
      title: 'Mac mini with M2',
      description: 'The M2 chip begins the next generation of Apple silicon, with enhanced performance and capabilities.',
      features: [
        {
          title: 'Performance',
          text: 'Up to 12× faster than previous Mac mini models for complex workflows and professional applications.'
        },
        {
          title: 'Connectivity',
          text: 'Thunderbolt 4 ports, HDMI 2.1, USB-A, Gigabit Ethernet, and Wi-Fi 6E for versatile connectivity options.'
        },
        {
          title: 'Power Efficiency',
          text: 'Industry-leading performance per watt enables sustained performance while remaining energy efficient.'
        }
      ]
    },
    'm2-pro': {
      title: 'Mac mini with M2 Pro',
      description: 'The pro-level M2 Pro chip delivers extraordinary performance for demanding professional workflows.',
      features: [
        {
          title: 'Performance',
          text: 'Up to 18× faster than previous Intel-based models with 12-core CPU and 19-core GPU configurations.'
        },
        {
          title: 'Advanced Connectivity',
          text: 'Additional Thunderbolt 4 ports, support for multiple high-resolution displays, and 10Gb Ethernet option.'
        },
        {
          title: 'Professional Workflows',
          text: 'Handles demanding tasks like 8K ProRes video editing and 3D rendering with ease.'
        }
      ]
    }
  };

  // Add click event to each model row
  modelRows.forEach(row => {
    row.addEventListener('click', function () {
      const model = this.dataset.model;
      const data = modelData[model];

      // Update panel content
      modelTitle.textContent = data.title;
      modelDescription.textContent = data.description;

      // Update features (in a real implementation, you'd dynamically generate these)
      // For now, we're just showing the panel with the first set of features

      // Show the panel
      detailsPanel.classList.remove('hidden');

      // Scroll to the panel if it's not fully visible
      detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Update aria-expanded on all rows
      modelRows.forEach(r => {
        r.setAttribute('aria-expanded', r === this ? 'true' : 'false');
      });
    });
  });

  // Back to top button functionality
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible');
      backToTopButton.classList.add('opacity-100', 'visible');
    } else {
      backToTopButton.classList.remove('opacity-100', 'visible');
      backToTopButton.classList.add('opacity-0', 'invisible');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Hero text animation on scroll
  const heroTextLines = document.querySelectorAll('.hero-text-line');
  
  const heroTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Uncomment below if you want the animation to reset when scrolling back up
        // entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.5
  });

  heroTextLines.forEach(line => {
    heroTextObserver.observe(line);
  });

  // Stats animation in performance section
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.getElementById('performance');
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(number => {
          number.classList.add('active');
        });
      } else {
        // Uncomment below if you want the animation to reset when scrolling back up
        // statNumbers.forEach(number => {
        //   number.classList.remove('active');
        // });
      }
    });
  }, {
    threshold: 0.5
  });

  statsObserver.observe(statsSection);

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
