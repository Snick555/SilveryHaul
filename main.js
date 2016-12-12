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
      "visited_countries": {
        "Germany": 5,
        "Ukraine": 12
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
    obj.find('.truck-vc span').html(Object.keys(cars[i]['visited_countries']).length);
  }

  function renderCars(start){
    var fleets = '';
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
      modal.find('.countries').html(Object.keys(cars[id]['visited_countries']).join('<br />'));

      setTimeout(function(){
        google.charts.setOnLoadCallback(drawRegionsMap(id));
      }, 1000);
    });
  }

  function drawRegionsMap(id) {
    var countries = [['Country', '']];
    var car_data = cars[id]['visited_countries'];
    for(var i in car_data){
      countries.push([i, car_data[i]]);
    }
    var data = google.visualization.arrayToDataTable(countries);
    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('visited-countries-chart'));
    chart.draw(data, options);
  }

  function init() {
    renderCars(start);
    scrollNav();
    moreTrucks();

    // charts
    google.charts.load('upcoming', {'packages':['geochart']});
  }

  init();

  $('.more-trucks').click(function(){
    start += 4;
    renderCars(start);
    moreTrucks();
  });
});
