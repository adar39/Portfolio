/**
 * ============================================
 * ADAR DEY — PORTFOLIO SCRIPT
 * ============================================
 * 
 * This file handles:
 * - Dynamic content rendering (skills, research, social links)
 * - Navigation (smooth scroll, active section highlighting)
 * - Mobile menu (open/close, accessibility)
 * - Scroll animations (fade-in on scroll)
 * - Footer year
 * 
 * DATA OBJECTS:
 * - skillsData: Add/edit skills by modifying the array below
 * - researchInterests: Add/edit research areas
 * - socialLinksData: Add/edit social media links
 * - projectsData: Template for future project entries
 * 
 * To add content in the future, simply edit the data arrays
 * and the rendering functions will handle the rest.
 * ============================================
 */

(function () {
  'use strict';

  // ============================================
  // DATA OBJECTS — Edit these to update content
  // ============================================

  const skillsData = [
    {
      category: 'Programming',
      items: ['C', 'C++', 'Java', 'Python']
    },
    {
      category: 'Web Technologies',
      items: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    {
      category: 'Computer Science',
      items: ['DSA', 'DBMS', 'DLD', 'Computer Networks', 'Operating Systems', 'Software Engineering']
    },
    {
      category: 'AI / Machine Learning',
      items: ['Machine Learning', 'Artificial Intelligence', 'Scikit-learn']
    },
    {
      category: 'Data Science',
      items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
    },
    {
      category: 'C++ / Algorithms',
      items: ['STL', 'Data Structures', 'Algorithms']
    }
  ];

  const researchInterests = [
    {
      title: 'Artificial Intelligence',
      description: 'Foundations and applications of intelligent systems.'
    },
    {
      title: 'Machine Learning',
      description: 'Supervised, unsupervised, and reinforcement learning methods.'
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks, representation learning, and architectures.'
    },
    {
      title: 'Natural Language Processing',
      description: 'Language understanding, generation, and computational linguistics.'
    },
    {
      title: 'Computer Vision',
      description: 'Visual perception, image analysis, and scene understanding.'
    },
    {
      title: 'Generative AI',
      description: 'Generative models and their applications across domains.'
    },
    {
      title: 'Large Language Models',
      description: 'Training, fine-tuning, and applications of large-scale language models.'
    },
    {
      title: 'Retrieval-Augmented Generation',
      description: 'Combining retrieval and generation for knowledge-grounded AI.'
    },
    {
      title: 'AI for Real-World Applications',
      description: 'Applied AI for practical, impactful, and ethical solutions.'
    }
  ];

  const socialLinksData = [
    {
      name: 'GitHub',
      url: '#', // TODO: Replace with your GitHub URL
      active: true,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>'
    },
    {
      name: 'LinkedIn',
      url: '#', // TODO: Replace with your LinkedIn URL
      active: true,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    },
    {
      name: 'Email',
      url: 'mailto:contact@adardey.com', // TODO: Replace with your actual email
      active: true,
      icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="12" rx="0"/><polyline points="2,4 10,11 18,4"/></svg>'
    },
    {
      name: 'Google Scholar',
      url: '#', // TODO: Replace when available
      active: false,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.524v4.762L12 24l12-9.714v-4.762L12 0z" opacity="0.5"/><circle cx="12" cy="17" r="5" fill="currentColor"/></svg>'
    },
    {
      name: 'ORCID',
      url: '#', // TODO: Replace when available
      active: false,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.5 6.75h1.5v10.5H7.5V6.75zm3.75 0h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v4.5h-1.5V6.75zm1.5 1.5v3h3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-3z"/></svg>'
    }
  ];

  // Template for future project entries (not rendered yet)
  // To use: add entries to this array and call renderProjects()
  const projectsData = [
    // Example:
    // {
    //   title: 'Project Name',
    //   description: 'Short description of the project.',
    //   technologies: ['Python', 'Scikit-learn', 'NumPy'],
    //   category: 'AI/ML',
    //   github: 'https://github.com/username/project',
    //   demo: '#',
    //   date: '2024'
    // }
  ];

  // ============================================
  // SVG ICONS for social links
  // ============================================
  function getSocialIcon(name) {
    const icons = {
      GitHub: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
      LinkedIn: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      Email: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="12"/><polyline points="2,4 10,11 18,4"/></svg>',
      'Google Scholar': '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.524v4.762L12 24l12-9.714v-4.762L12 0z" opacity="0.5"/><circle cx="12" cy="17" r="5"/></svg>',
      ORCID: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.5 6.75h1.5v10.5H7.5V6.75zm3.75 0h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v4.5h-1.5V6.75zm1.5 1.5v3h3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-3z"/></svg>'
    };
    return icons[name] || '';
  }

  // ============================================
  // RENDER FUNCTIONS
  // ============================================

  function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;

    container.innerHTML = skillsData.map(skill => `
      <div class="skill-card">
        <h3 class="skill-category">${skill.category}</h3>
        <p class="skill-items">${skill.items.join(' · ')}</p>
      </div>
    `).join('');
  }

  function renderResearch() {
    const container = document.getElementById('researchGrid');
    if (!container) return;

    container.innerHTML = researchInterests.map(area => `
      <div class="research-card">
        <h3 class="research-card-title">${area.title}</h3>
        <p class="research-card-desc">${area.description}</p>
      </div>
    `).join('');
  }

  function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;

    container.innerHTML = socialLinksData.map(link => `
      <a href="${link.url}" 
         class="social-link ${link.active ? '' : 'disabled'}" 
         aria-label="${link.name}${link.active ? '' : ' (coming soon)'}"
         ${link.url !== '#' && link.url !== 'mailto:contact@adardey.com' ? 'target="_blank" rel="noopener noreferrer"' : ''}
         title="${link.name}${link.active ? '' : ' — Coming soon'}">
        ${getSocialIcon(link.name)}
      </a>
    `).join('');
  }

  // Future: function to render projects from data
  // function renderProjects() {
  //   const container = document.querySelector('.projects-grid');
  //   if (!container || projectsData.length === 0) return;
  //   
  //   container.innerHTML = projectsData.map(project => `
  //     <article class="project-card">
  //       <div class="project-card-top">
  //         <span class="project-category">${project.category}</span>
  //       </div>
  //       <h3 class="project-title">${project.title}</h3>
  //       <p class="project-description">${project.description}</p>
  //       <div class="project-tags">
  //         ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
  //       </div>
  //       <div class="project-links">
  //         <a href="${project.github}" target="_blank" rel="noopener">GitHub ↗</a>
  //         ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Demo ↗</a>` : ''}
  //       </div>
  //     </article>
  //   `).join('');
  // }

  // ============================================
  // NAVIGATION — Smooth Scroll & Active Highlighting
  // ============================================

  function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          // Close mobile menu if open
          closeMobileMenu();
          
          // Smooth scroll to target
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, '', href);
        }
      });
    });
  }

  function setupActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-nav-link');
    
    if (sections.length === 0) return;

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // ============================================
  // MOBILE MENU
  // ============================================

  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');
  const sidebarClose = document.getElementById('sidebarClose');

  function openMobileMenu() {
    if (!sidebar) return;
    
    sidebar.classList.add('open');
    overlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Focus first navigation link for accessibility
    setTimeout(() => {
      const firstLink = sidebar.querySelector('.sidebar-nav-link, .sidebar-email');
      if (firstLink) firstLink.focus();
    }, 300);
  }

  function closeMobileMenu() {
    if (!sidebar) return;
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function setupMobileMenu() {
    if (!menuToggle || !sidebarClose || !overlay) return;

    menuToggle.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    sidebarClose.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeMobileMenu();
        menuToggle.focus();
      }
    });

    // Close menu when window resizes to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          closeMobileMenu();
        }
      }, 250);
    });
  }

  // ============================================
  // FADE-IN ANIMATION ON SCROLL
  // ============================================

  function setupFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length === 0) return;

    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      fadeElements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observerOptions = {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a slight delay for a staggered effect
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // UTILITY — Update Year
  // ============================================

  function updateYear() {
    const year = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#year, #footerYear');
    yearElements.forEach(el => {
      el.textContent = year;
    });
  }

  // ============================================
  // NAVBAR SCROLL EFFECT (subtle)
  // ============================================

  function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Add subtle shadow when scrolled
      if (currentScrollY > 10) {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)';
      } else {
        navbar.style.boxShadow = 'none';
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function init() {
    // Render dynamic content
    renderSkills();
    renderResearch();
    renderSocialLinks();
    
    // Setup interactions
    setupSmoothScroll();
    setupActiveSection();
    setupMobileMenu();
    setupFadeInAnimations();
    setupNavbarScroll();
    
    // Update year
    updateYear();
    
    // Log version
    console.log('%cAdar Dey — Portfolio', 'font-family: monospace; font-size: 14px; color: #1A1A1A;');
    console.log('%cBuilt with curiosity, code, and continuous learning.', 'font-family: monospace; font-size: 11px; color: #6B6B6B;');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();