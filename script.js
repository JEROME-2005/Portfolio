document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       1. PRELOADER
       ========================================================================== */
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 800); // Allow preloader animation to be visible briefly
    });

    /* ==========================================================================
       2. NAVIGATION & STICKY HEADER
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       3. MOBILE MENU TOGGLE
       ========================================================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger animation if desired
            menuToggle.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    /* ==========================================================================
       4. INTERSECTION OBSERVER FOR ACTIVE NAV LINKS & FADE-IN
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    // Add fade-in classes to sections
    sections.forEach((sec, idx) => {
        if (idx > 0) { // Don't animate hero section to prevent flash
            sec.classList.add('fade-in-section');
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger near middle of viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Active nav indicator
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                // Fade-in animation triggers
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* ==========================================================================
       5. LIBRARY CAROUSEL SLIDER
       ========================================================================== */
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.book-card');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    if (track && cards.length > 0) {
        let currentIndex = 0;
        
        function getCardsPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function updateCarousel() {
            const cardsPerView = getCardsPerView();
            const maxIndex = cards.length - cardsPerView;
            
            // Bounds check
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;
            
            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
            const amountToMove = currentIndex * (cardWidth + gap);
            
            track.style.transform = `translateX(-${amountToMove}px)`;
            
            // Button states
            prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
            
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
            nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
        }

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        
        // Initial setup
        setTimeout(updateCarousel, 300);
    }

    /* ==========================================================================
       6. 3D BACKGROUND ANIMATION (THREE.JS)
       ========================================================================== */
    const canvas = document.getElementById('bg-canvas');
    if (canvas && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particle Geometry
        const particlesCount = window.innerWidth < 768 ? 40 : 80;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        const velocities = [];

        // Realistic color palette: Warm Amber, Soft Teal, Muted Blue, Space White, Muted Purple
        const palette = [
            { r: 0.95, g: 0.60, b: 0.15 }, // Amber
            { r: 0.10, g: 0.70, b: 0.60 }, // Teal
            { r: 0.20, g: 0.50, b: 0.90 }, // Blue
            { r: 0.90, g: 0.90, b: 0.95 }, // White
            { r: 0.40, g: 0.40, b: 0.85 }  // Purple
        ];

        for(let i = 0; i < particlesCount * 3; i += 3) {
            // Distribute particles in a 3D space
            positions[i] = (Math.random() - 0.5) * 60;
            positions[i+1] = (Math.random() - 0.5) * 60;
            positions[i+2] = (Math.random() - 0.5) * 60;

            velocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            });

            // Random color from palette
            const randColor = palette[Math.floor(Math.random() * palette.length)];
            colors[i] = randColor.r;
            colors[i+1] = randColor.g;
            colors[i+2] = randColor.b;
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Particle Material - multi-color enabled
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.7,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        // Points
        const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleMesh);

        // Lines connecting close particles (Plexus effect with vertex colors)
        const lineMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.06,
            blending: THREE.AdditiveBlending
        });

        let lineMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
        scene.add(lineMesh);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - window.innerWidth / 2) / 100;
            mouseY = (event.clientY - window.innerHeight / 2) / 100;
        });

        // Scroll interaction
        let scrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
        });

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update particle positions based on velocity
            const positionsArray = particleGeometry.attributes.position.array;
            for(let i = 0; i < particlesCount; i++) {
                const idx = i * 3;
                positionsArray[idx] += velocities[i].x;
                positionsArray[idx+1] += velocities[i].y;
                positionsArray[idx+2] += velocities[i].z;

                // Bounce off boundaries
                if(Math.abs(positionsArray[idx]) > 30) velocities[i].x *= -1;
                if(Math.abs(positionsArray[idx+1]) > 30) velocities[i].y *= -1;
                if(Math.abs(positionsArray[idx+2]) > 30) velocities[i].z *= -1;
            }
            particleGeometry.attributes.position.needsUpdate = true;

            // Rebuild plexus connections
            const linePositions = [];
            const lineColors = [];
            for(let i = 0; i < particlesCount; i++) {
                const idxA = i * 3;
                const ax = positionsArray[idxA];
                const ay = positionsArray[idxA+1];
                const az = positionsArray[idxA+2];
                const ar = colors[idxA];
                const ag = colors[idxA+1];
                const ab = colors[idxA+2];

                for(let j = i + 1; j < particlesCount; j++) {
                    const idxB = j * 3;
                    const bx = positionsArray[idxB];
                    const by = positionsArray[idxB+1];
                    const bz = positionsArray[idxB+2];
                    const br = colors[idxB];
                    const bg = colors[idxB+1];
                    const bb = colors[idxB+2];

                    // Distance check
                    const dist = Math.sqrt((ax-bx)**2 + (ay-by)**2 + (az-bz)**2);
                    if(dist < 10) {
                        linePositions.push(ax, ay, az);
                        linePositions.push(bx, by, bz);

                        lineColors.push(ar, ag, ab);
                        lineColors.push(br, bg, bb);
                    }
                }
            }

            // Remove old line geometry and add new one
            scene.remove(lineMesh);
            const lineGeometry = new THREE.BufferGeometry();
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
            lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
            scene.add(lineMesh);

            // Mouse ease animation
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            // Apply rotations based on scroll & mouse
            particleMesh.rotation.y = targetX * 0.2 + scrollY * 0.0005;
            particleMesh.rotation.x = -targetY * 0.2 + scrollY * 0.0002;
            lineMesh.rotation.y = targetX * 0.2 + scrollY * 0.0005;
            lineMesh.rotation.x = -targetY * 0.2 + scrollY * 0.0002;

            renderer.render(scene, camera);
        };

        animate();
    }
});
