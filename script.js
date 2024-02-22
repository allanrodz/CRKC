document.addEventListener('DOMContentLoaded', function() {
    const schedule = {
        // Your schedule object here
        "Monday": [
            {"start": "08:00", "show": "Ceol agus Comra"},
            {"start": "09:00", "show": "Good Morning Kilkenny - Pat Treacy"},
            {"start": "12:00", "show": "Good Afternoon Kilkenny - Pat Kelly"},
            {"start": "14:00", "show": "Afternoon Outlook - Ann Marie Hogan"},
            {"start": "16:00", "show": "The Four O'Clock Show - Caomh Breen Allen"},
            {"start": "17:00", "show": "Kilkenny Today - Frank Tynan"},
            {"start": "18:00", "show": "TC Tyres World of Gaelic Games"},
            {"start": "19:00", "show": "Country Time"},
            {"start": "20:30", "show": "Windows of Wonder - Cathal Cullen"},
            {"start": "21:00", "show": "Cultural Cafe"},
            {"start": "22:00", "show": "Night Moves - Paddy (The Dub) Kelly"},
            {"start": "23:00", "show": "Lights Out"}
          ],
          "Tuesday": [
            {"start": "08:00", "show": "Kilkenny Today - Frank Tynan"},
            {"start": "09:00", "show": "Good Morning Kilkenny - Des Murphy"},
            {"start": "11:00", "show": "Mid Morning Mix - Colin Kennedy"},
            {"start": "14:00", "show": "Afternoon Outlook - Mick Cummins"},
            {"start": "16:00", "show": "Radio Active - John Kelly"},
            {"start": "17:00", "show": "Kilkenny Today - Maurice O'Connor"},
            {"start": "18:00", "show": "Off Side Soccer - Jim Cashin & Ber Scott"},
            {"start": "19:00", "show": "The Country Store - Kevin Leefarr"},
            {"start": "20:00", "show": "The Hit Zone - Kevin Leefarr"},
            {"start": "21:30", "show": "Bookline - Theresa Quinn"},
            {"start": "22:00", "show": "Midnight Melodies, with Larry Dowd"}
          ],
          "Wednesday": [
            {"start": "08:00", "show": "Kilkenny Today - Maurice O'Connor"},
            {"start": "09:00", "show": "Good Morning Kilkenny - Tom Phelan"},
            {"start": "11:00", "show": "Birds on the Wire"},
            {"start": "12:00", "show": "Good Afternoon Kilkenny - John Bergin"},
            {"start": "14:00", "show": "Afternoon Outlook - Don Devlin"},
            {"start": "18:00", "show": "A Country Road"},
            {"start": "20:00", "show": "City Sounds - Tommy Dowd"},
            {"start": "22:00", "show": "Night Time Classics"}
          ],
          "Thursday": [
            {"start": "08:00", "show": "Kilkenny Today - Frank Tynan"},
            {"start": "09:00", "show": "Good Morning Kilkenny - Des Murphy"},
            {"start": "11:00", "show": "Conversations"},
            {"start": "12:00", "show": "Kilkenny Greats - Kay B."},
            {"start": "14:00", "show": "Afternoon Outlook - Colin Kennedy"},
            {"start": "17:00", "show": "Kilkenny Today - Declan Gibbons"},
            {"start": "18:00", "show": "Country Kitchen, with Martin Morris"},
            {"start": "20:00", "show": "Rockin the Clubs, with Ann Nolan"},
            {"start": "22:00", "show": "Night Time Radio, with Dave Gallagher"}
          ],
          "Friday": [
            {"start": "08:00", "show": "Kilkenny Today - Declan Gibbons"},
            {"start": "09:00", "show": "Good Morning Kilkenny - Ber Scott"},
            {"start": "11:00", "show": "Live at Lunchtime - Con Maloney"},
            {"start": "14:00", "show": "Sounds Classical - Pat Shortall"},
            {"start": "17:00", "show": "Kilkenny Today - Eugene Doyle"},
            {"start": "18:00", "show": "Friday TalkSport - CRKC Sports Team"},
            {"start": "19:00", "show": "Communities in Action - Paul Brophy"},
            {"start": "20:00", "show": "9pm Ping Island - Joey, Nic & Steve"},
            {"start": "21:30", "show": "New & Old Skool Dance Classics - John Maher"}
          ],
          "Saturday": [
            {"start": "08:00", "show": "Kilkenny Today - Eugene Doyle"},
            {"start": "09:00", "show": "Ceol agus Comhra"},
            {"start": "10:00", "show": "Spirit Alive"},
            {"start": "11:00", "show": "The Ballad Hour - Pat Tracey"},
            {"start": "12:00", "show": "City Sports with CRKC Sports Team"},
            {"start": "14:00", "show": "Saturday Music & Sport"},
            {"start": "18:00", "show": "Rhythm & Roots"},
            {"start": "20:00", "show": "The Pod"},
            {"start": "21:00", "show": "New & Old Skool Dance Classics - John Maher"},
            {"start": "22:00", "show": "Classic Hits"}
          ],
          "Sunday": [
            {"start": "08:30", "show": "Service From St. Canices Cathedral"},
            {"start": "09:00", "show": "Sunday Serendipity"},
            {"start": "10:00", "show": "Mass from St. Canices Church"},
            {"start": "12:00", "show": "Sunday Requests"},
            {"start": "14:00", "show": "Sunday Music & Sport"},
            {"start": "19:00", "show": "Country & Irish"},
            {"start": "21:00", "show": "Ceol sa Chistin- Tommy Dowd"},
            {"start": "22:00", "show": "The Love Zone"}
          ]
    };

    // Slideshow Functionality
    let slideIndex = 0;
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
    showSlides();

    // Now Playing Banner
    function getCurrentShow() {
        const now = new Date();
        const dayOfWeek = now.toLocaleString('en-us', {weekday: 'long'});
        const currentTime = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
        const todaysSchedule = schedule[dayOfWeek];
        let currentShow = "Show information not available";

        for (let i = 0; i < todaysSchedule.length; i++) {
            const show = todaysSchedule[i];
            if (currentTime >= show.start && (i === todaysSchedule.length - 1 || currentTime < todaysSchedule[i + 1].start)) {
                currentShow = show.show;
                break;
            }
        }
        return currentShow;
    }

    function updateBanner() {
        const textSpan = document.getElementById('now-playing-text');
        textSpan.textContent = "Now Playing: " + getCurrentShow();
    }
    updateBanner();
    setInterval(updateBanner, 60000);

    // Schedule Carousel Functionality
    const carouselContainer = document.querySelector('.carousel-items');
    Object.keys(schedule).forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'carousel-item';
        dayDiv.innerHTML = `<h3>${day}</h3>` + schedule[day].map(show => `<p>${show.start}: ${show.show}</p>`).join('');
        carouselContainer.appendChild(dayDiv);
    });

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].style.display = 'block';

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    function changeSlide(move) {
        items[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + move + items.length) % items.length;
        items[currentIndex].style.display = 'block';
    }

    // Radio Player Toggle
    const toggleButton = document.getElementById('togglePlayer');
    const icon = toggleButton.querySelector('i'); // Select the icon within the button
    const playerContainer = document.getElementById('playerContainer');
    let playerActive = true;

    toggleButton.addEventListener('click', function() {
        if (playerActive) {
            // Stop and remove the iframe
            playerContainer.innerHTML = '';
            toggleButton.innerHTML = '<i class="fas fa-power-off" style="color: green;"></i> Turn ON Radio'; // Update button text and icon color to green
            playerActive = false;
        } else {
            // Re-create and append the iframe
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://tunein.com/embed/player/s80564/');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.frameBorder = 'no';
            iframe.scrolling = 'no';
            iframe.allowFullscreen = true;
            playerContainer.appendChild(iframe);
            toggleButton.innerHTML = '<i class="fas fa-power-off" style="color: red;"></i> Turn OFF Radio'; // Update button text back and icon color to red
            playerActive = true;
        }
    });


    // Schedule and Podcasts Overlay Functionality
    const openScheduleButton = document.getElementById('openSchedule');
    const scheduleOverlay = document.getElementById('scheduleOverlay');
    openScheduleButton.onclick = function() {
        scheduleOverlay.style.display = 'block';
    };
    scheduleOverlay.onclick = function(event) {
        if (event.target == scheduleOverlay) {
            scheduleOverlay.style.display = "none";
        }
    };

    function showPodcastsOverlay() {
        const podcastsOverlay = document.getElementById('podcastsOverlay');
        podcastsOverlay.style.display = 'flex';
    }
    const podcastBanner = document.querySelector('.podcast-banner-slide');
    podcastBanner.addEventListener('click', showPodcastsOverlay);

    podcastsOverlay.addEventListener('click', function(event) {
        if (event.target == podcastsOverlay) {
            podcastsOverlay.style.display = 'none';
        }
    });
});
