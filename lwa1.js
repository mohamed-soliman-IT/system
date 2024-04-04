




document.addEventListener('DOMContentLoaded', function () {
    const lightIcon = document.getElementById('light-icon');

    const body = document.body;

    lightIcon.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            // Change icon to sun
            lightIcon.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // Change icon back to lightbulb
            lightIcon.innerHTML = '<i class="fas fa-lightbulb"></i>';
        }
    });
  });





  ///////////////////////////////////////////////////////////////////////////




  document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            // Modify the initial state to open the desktop navigation by default
            nav.classList.add('show');
            // Modify the initial state of the toggle icon to close
            toggle.classList.add('bx-x');
            bodypd.classList.add('body-pd');
            headerpd.classList.add('body-pd');

            toggle.addEventListener('click', () => {
                // Show or hide the navbar
                nav.classList.toggle('show');
                // Change the toggle icon from the hamburger to the close icon
                toggle.classList.toggle('bx-x');
                // Add or remove padding to the body
                bodypd.classList.toggle('body-pd');
                // Add or remove padding to the header
                headerpd.classList.toggle('body-pd');
            });
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));

    // Adjust menu and close icon for mobile view
    const toggle = document.getElementById('header-toggle');
    const closeIcon = document.querySelector('.bx-x');

    function adjustToggleIcon() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            toggle.style.display = 'block'; // Display the menu icon in mobile view
            closeIcon.style.display = 'none'; // Hide the close icon in mobile view
        } else {
            toggle.style.display = 'none'; // Hide the menu icon in desktop view
            closeIcon.style.display = 'block'; // Display the close icon in desktop view
        }
    }

    adjustToggleIcon(); // Call the function initially

    // Call the function on window resize to adjust the icons accordingly
    window.addEventListener('resize', adjustToggleIcon);

    // Your code to run since DOM is loaded and ready
  });






  /////// EVENTS //////////////////////
  c.addEventListener("mousemove", function(e) {
    label.innerHTML = "";
    label.style.display = "none";
    this.style.cursor = "default";

    var m = oMousePos(this, e);
    for (var i = 0; i < oDots.length; i++) {

      output(m, i);
    }

  }, false);

  function output(m, i) {
    ctx.beginPath();
    ctx.arc(oDots[i].x, oDots[i].y, 20, 0, 2 * Math.PI);
    if (ctx.isPointInPath(m.x, m.y)) {
      //console.log(i);
      label.style.display = "block";
      label.style.top = (m.y + 10) + "px";
      label.style.left = (m.x + 10) + "px";
      label.innerHTML = "<strong>" + propsRy[i] + "</strong>: " + valuesRy[i] + "%";
      c.style.cursor = "pointer";
    }
  }

  // CURVATURE
  function controlPoints(p) {
    // given the points array p calculate the control points
    var pc = [];
    for (var i = 1; i < p.length - 1; i++) {
      var dx = p[i - 1].x - p[i + 1].x; // difference x
      var dy = p[i - 1].y - p[i + 1].y; // difference y
      // the first control point
      var x1 = p[i].x - dx * t;
      var y1 = p[i].y - dy * t;
      var o1 = {
        x: x1,
        y: y1
      };

      // the second control point
      var x2 = p[i].x + dx * t;
      var y2 = p[i].y + dy * t;
      var o2 = {
        x: x2,
        y: y2
      };

      // building the control points array
      pc[i] = [];
      pc[i].push(o1);
      pc[i].push(o2);
    }
    return pc;
  }

  function drawCurve(p) {

    var pc = controlPoints(p); // the control points array

    ctx.beginPath();
    //ctx.moveTo(p[0].x, B.y- 25);
    ctx.lineTo(p[0].x, p[0].y);
    // the first & the last curve are quadratic Bezier
    // because I'm using push(), pc[i][1] comes before pc[i][0]
    ctx.quadraticCurveTo(pc[1][1].x, pc[1][1].y, p[1].x, p[1].y);

    if (p.length > 2) {
      // central curves are cubic Bezier
      for (var i = 1; i < p.length - 2; i++) {
        ctx.bezierCurveTo(pc[i][0].x, pc[i][0].y, pc[i + 1][1].x, pc[i + 1][1].y, p[i + 1].x, p[i + 1].y);
      }
      // the first & the last curve are quadratic Bezier
      var n = p.length - 1;
      ctx.quadraticCurveTo(pc[n - 1][0].x, pc[n - 1][0].y, p[n].x, p[n].y);
    }

    //ctx.lineTo(p[p.length-1].x, B.y- 25);
    ctx.stroke();
    ctx.save();
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.restore();
  }

  function arrayMax(array) {
    return Math.max.apply(Math, array);
  };

  function arrayMin(array) {
    return Math.min.apply(Math, array);
  };

  function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
  }





  document.addEventListener("DOMContentLoaded", function () {
      var map = L.map("map").setView([26.8206, 30.8025], 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
      }).addTo(map);

      // Define custom icons for cameras and projects
      var cameraIcon = L.icon({
          iconUrl: 'path/to/your/cam.png', // Update with your path
          iconSize: [40, 40], // Adjust the size as needed
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
      });

      var projectIcon = L.icon({
          iconUrl: 'path/to/your/pro.png', // Update with your path
          iconSize: [40, 40], // Adjust the size as needed
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
      });

      // Loop through your cameras and add markers with camera icons
      // Add your camera related code here

      // Loop through your projects and add markers with project icons

  });





  $('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
  })
  $('#modal1').on('hidden.bs.modal', function (e) {
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
  });









