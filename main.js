$(document).ready(function(){
  var start = 0;
  var cars = [
    {
      "image": "images/truck.jpg",
      "title": "Scania R480 8x2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.",
      "class": "C",
      "distance": 300000,
      "trips": 121,
      "km": 300000,
      "chart_data": {
        "countries": {
          "Germany": 5,
          "Ukraine": 12,
          "Italy": 28,
          "China": 2
        },
        "bar_chart": {
          "title": "2016",
          "data": [33, 10, 9, 28, 31, 74, 69, 47, 55, 7, 1, 23, 40, 15, 55, 38, 62, 91, 63, 43, 83, 75, 59, 6, 52, 60, 39, 24, 37, 52, 31, 12, 85, 78, 80, 62, 18, 11, 69, 30, 1, 43, 79, 85, 36, 38, 85, 96]
        }
      }
    }, {
      "image": "images/truck.jpg",
      "title": "scania r480 8x2",
      "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. etiam vestibulum tortor sed leo gravida ultrices. nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.",
      "class": "c",
      "distance": 300000,
      "trips": 121,
      "km": 300000,
      "chart_data": {
        "countries": {
          "Germany": 5,
          "Ukraine": 12,
          "Italy": 28,
          "China": 2
        },
        "bar_chart": {
          "title": "2016",
          "data": [43, 71, 46, 40, 45, 82, 14, 28, 49, 54, 59, 91, 42, 43, 60, 78, 1, 2, 21, 3, 24, 41, 40, 36, 30, 92, 4, 30, 73, 67, 46, 51, 48, 65, 87, 21, 93, 40, 55, 71, 39, 33, 25, 18, 69, 68, 31, 79]
        }
      }
    }, {
      "image": "images/truck.jpg",
      "title": "Scania R480 8x2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.",
      "class": "C",
      "distance": 300000,
      "trips": 121,
      "km": 300000,
      "chart_data": {
        "countries": {
          "Germany": 5,
          "Ukraine": 12,
          "Italy": 28,
          "China": 2
        },
        "bar_chart": {
          "title": "2016",
          "data": [68, 26, 80, 32, 81, 76, 83, 24, 11, 58, 14, 90, 3, 95, 8, 27, 63, 21, 70, 42, 74, 79, 52, 54, 91, 17, 45, 23, 35, 55, 59, 97, 3, 56, 22, 14, 88, 83, 60, 92, 18, 84, 16, 50, 63, 71, 52, 32]
        }
      }
    }, {
      "image": "images/truck.jpg",
      "title": "Scania R480 8x2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.",
      "class": "C",
      "distance": 300000,
      "trips": 121,
      "km": 300000,
      "chart_data": {
        "countries": {
          "Germany": 5,
          "Ukraine": 12,
          "Italy": 28,
          "China": 2
        },
        "bar_chart": {
          "title": "2016",
          "data": [87, 5, 94, 39, 5, 88, 98, 73, 89, 67, 18, 60, 38, 68, 49, 24, 11, 56, 13, 91, 87, 61, 100, 83, 53, 23, 79, 74, 12, 56, 66, 91, 85, 4, 73, 45, 86, 72, 82, 89, 64, 7, 85, 54, 42, 52, 49, 51]
        }
      }
    }, {
      "image": "images/truck.jpg",
      "title": "Scania R480 8x2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.",
      "class": "C",
      "distance": 300000,
      "trips": 121,
      "km": 300000,
      "chart_data": {
        "countries": {
          "Germany": 5,
          "Ukraine": 12,
          "Italy": 28,
          "China": 2
        },
        "bar_chart": {
          "title": "2016",
          "data": [91, 23, 69, 83, 86, 72, 74, 4, 77, 53, 82, 45, 27, 51, 80, 26, 77, 41, 97, 100, 77, 41, 30, 49, 40, 88, 84, 92, 60, 66, 72, 34, 89, 9, 8, 40, 23, 55, 88, 5, 30, 77, 66, 78, 64, 17, 31, 60]
        }
      }
    }, {
      "image": "images/truck.jpg",
      "title": "Scania R480 8x2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.",
      "class": "C",
      "distance": 300000,
      "trips": 121,
      "km": 300000,
      "chart_data": {
        "countries": {
          "Germany": 5,
          "Ukraine": 12,
          "Italy": 28,
          "China": 2
        },
        "bar_chart": {
          "title": "2016",
          "data": [65, 52, 73, 51, 29, 10, 34, 87, 66, 67, 46, 51, 4, 20, 18, 2, 36, 65, 69, 40, 9, 44, 28, 63, 12, 37, 64, 61, 19, 23, 63, 38, 68, 67, 11, 89, 21, 48, 14, 32, 85, 99, 80, 7, 87, 28, 45, 86]
        }
      }
    }
  ];
  var team = [
    {
      "image": "images/face.jpg",
      "name": "Joshua Ross",
      "position": "Founder, CEO",
      "email": "joshua@gmail.com",
      "phone": "1234567890",
      "socials": {
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
      }
    }, {
      "image": "images/face.jpg",
      "name": "Jayden Joseph",
      "position": "Founder, CEO",
      "email": "jayden@gmail.com",
      "phone": "1234567890",
      "socials": {
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
      }
    }
  ];

  function setValues(obj, i){
    obj.find('.truck-img').attr('src', cars[i]['image']);
    obj.find('.truck-title').html(cars[i]['title']);
    obj.find('.truck-description').html(cars[i]['description']);
    obj.find('.truck-class span').html(cars[i]['class']);
    obj.find('.truck-distance span').html(cars[i]['distance']);
    obj.find('.truck-trips span').html(cars[i]['trips']);
    obj.find('.truck-km span').html(cars[i]['km']);
    obj.find('.truck-vc span').html(Object.keys(cars[i]['chart_data']['countries']).length);
  }

  function renderCars(start){
    var end = start + 4;
    for (var i = start; i < end; i++) {
      if (typeof cars[i] === 'undefined') {
        break;
      }
      var fleet = $('.our-fleets .fleet-copy').clone();
      fleet.removeClass('fleet-copy').addClass('fleet');
      setValues(fleet, i);
      fleet.find('.truck-details-button').attr('truck-id', i);
      $('.our-fleets .fleets').append(fleet);
    }
  };

  function renderTeam(){
    for (var i = 0; i < team.length; i++) {
      var item = $('.our-team .team-item-copy').clone();
      item.removeClass('team-item-copy');
      item.find('.team-image').attr('src', team[i]['image']);
      item.find('.team-name').html(team[i]['name']);
      item.find('.team-position').html(team[i]['position']);
      item.find('.team-email').html(team[i]['email']);
      item.find('.team-phone').html(team[i]['phone']);
      item.find('.socials .facebook').attr('href', team[i]['socials']['facebook']);
      item.find('.socials .twitter').attr('href', team[i]['socials']['twitter']);
      item.find('.socials .linkedin').attr('href', team[i]['socials']['linkedin']);
      $(item).insertBefore($('.our-team .team .team-item-copy'));
    }
  };

  function scrollNav() {
    $('.nav a').click(function(){
      var self = $(this);
      //Toggle Class
      $(".active").removeClass("active");
      self.closest('li').addClass("active");
      var theClass = self.attr("class");
      $('.' + theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
        scrollTop: $(self.attr('href')).offset().top
      }, 400);
      return false;
    });
    $('.navbar-header a').scrollTop();
  }

  function moreTrucks() {
    $('.our-fleets .fleet').on('mouseover', function(){
      $(this).find('.truck-more').show();
    });

    $('.our-fleets .fleet').on('mouseout', function(){
      $(this).find('.truck-more').hide();
    });

    $('.our-fleets .truck-details-button').on('click', function(){
      var id = $(this).attr('truck-id');
      var modal = $('#truckModal');
      setValues(modal, id);
      modal.find('.countries').html(Object.keys(cars[id]['chart_data']['countries']).join('<br />'));

      // charts
      setTimeout(function(){
        google.charts.setOnLoadCallback(drawRegionsMap(id));
        google.charts.setOnLoadCallback(drawChart(id));
        google.charts.setOnLoadCallback(drawStuff(id));
      }, 200);
    });
  }

  function drawRegionsMap(id) {
    var countries = [['Country', '']];
    var car_data = cars[id]['chart_data']['countries'];
    for(var i in car_data){
      countries.push([i, car_data[i]]);
    }
    var data = google.visualization.arrayToDataTable(countries);
    var options = {
      datalessRegionColor: '#CAE5FC',
      legend: 'none',
      colors: ['#4DACFE', '#4DACFE']
    };
    var chart = new google.visualization.GeoChart(document.getElementById('visited-countries-chart'));
    chart.draw(data, options);
  }

  function drawChart(id) {
    var facts_title = $('.facts-title');
    var facts_number = $('.facts-number');
    var car_data = cars[id]['chart_data']['bar_chart']['data'];
    var sum = car_data.reduce((previous, current) => current += previous);
    var number = parseInt(sum / car_data.length);
    var data = google.visualization.arrayToDataTable([
      ['Effort', 'Amount given'],
      ['', 100 - number],
      ['', number]
    ]);
    var options = {
      pieHole: 0.7,
      slices: {
        0: { color: 'EDEEF3' },
        1: { color: '4CABFF' }
      },
      pieSliceText: 'none',
      legend: 'none',
      tooltip: {
        text: 'percentage'
      }
    };
    var chart = new google.visualization.PieChart(document.getElementById('facts-chart'));
    chart.draw(data, options);
    facts_title.find('span').html(number + '% - ');
    facts_number.html(number + '%');
    $('#facts-chart').append(facts_title);
    $('#facts-chart').append(facts_number);
  }

  function drawStuff(id) {
    var car_data = cars[id]['chart_data']['bar_chart']['data'];
    var data = new google.visualization.arrayToDataTable([
      ['', '1st', '2nd', '3rd', '4th'],
      ['January', car_data[0], car_data[1], car_data[2], car_data[3]],
      ['Fabruary', car_data[4], car_data[5], car_data[6], car_data[7]],
      ['March', car_data[8], car_data[9], car_data[10], car_data[11]],
      ['April', car_data[12], car_data[13], car_data[14], car_data[15]],
      ['May', car_data[16], car_data[17], car_data[18], car_data[19]],
      ['June', car_data[20], car_data[21], car_data[22], car_data[23]],
      ['July', car_data[24], car_data[25], car_data[26], car_data[27]],
      ['August', car_data[28], car_data[29], car_data[30], car_data[31]],
      ['September', car_data[32], car_data[33], car_data[34], car_data[35]],
      ['October', car_data[36], car_data[37], car_data[38], car_data[39]],
      ['November', car_data[40], car_data[41], car_data[42], car_data[43]],
      ['December', car_data[44], car_data[45], car_data[46], car_data[47]],
    ]);

    var options = {
      vAxis: {
        gridlines: {
          color: 'transparent'
        },
        baselineColor: 'transparent',
        textPosition: 'none'
      },
      title: cars[id]['chart_data']['bar_chart']['title'],
      titleFontSize: 24,
      titleColor: '#4B4B4B',
      colors: ['#FFB901', '#FFB901', '#FFB901', '#FFB901'],
      legend: {
        position: 'none'
      },
      focusTarget: 'category',
      chartArea: {
        width: '100%'
      },
      bar: {
        groupWidth: '90%'
      },
      fontSize: 12
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('months-chart'));
    chart.draw(data, options);
  }

  function init() {
    renderCars(start);
    renderTeam();
    scrollNav();
    moreTrucks();

    google.charts.load('current', {'packages':['corechart']});
  }

  init();

  $('.more-trucks').click(function(){
    start += 4;
    renderCars(start);
    moreTrucks();
  });
});
