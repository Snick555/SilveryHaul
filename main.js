$(document).ready(function(){
  var cars_start = 0;
  var cars = JSON.parse('[{"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}, {"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}, {"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}, {"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}, {"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}, {"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}, {"image": "images/truck.jpg", "title": "Scania R480 8x2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum tortor sed leo gravida ultrices. Nunc pretium, orci sed lobortis iaculis, mauris turpis facilisis augue, vitae pulvinar mi neque id nisl.", "class": "C", "distance": "300 000", "trips": "121", "km": "300 000", "vc": "112"}]');

  function renderCars(cars, cars_start){
    var fleets = '';
    var cars_end = cars_start + 4;
    for (var i = cars_start; i < cars_end; i++) {
      if (typeof cars[i] === 'undefined') {
        break;
      }
      fleets += '\
        <div class="col-md-6 fleet">\
          <div class="row">\
            <div class="col-md-6">\
              <img src="' + cars[i]['image'] + '" alt="Truck" class="truck-img"/>\
            </div>\
            <div class="col-md-6">\
              <div class="truck-title">\
                ' + cars[i]['title'] + '\
              </div>\
              <div class="truck-description">\
                ' + cars[i]['description'] + '\
              </div>\
              <div class="truck-class">\
                Class\
                <span>' + cars[i]['class'] + '</span>\
              </div>\
              <div class="truck-distance">\
                Distance\
                <span>' + cars[i]['distance'] + '</span>\
              </div>\
              <div class="truck-details-button">\
                Details\
              </div>\
            </div>\
          </div>\
          <div class="truck-more">\
            <hr />\
            <div class="row">\
              <div class="col-md-3">\
                <div class="truck-trips">\
                  Trips\
                  <br />\
                  <span>' + cars[i]['trips'] + '</span>\
                </div>\
              </div>\
              <div class="col-md-6">\
                <div class="truck-km">\
                  Km\
                  <br />\
                  <span>' + cars[i]['km'] + '</span>\
                </div>\
              </div>\
              <div class="col-md-3">\
                <div class="truck-vc">\
                  Visited countries\
                  <br />\
                  <span>' + cars[i]['vc'] + '</span>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      ';
    }
    $('.our-fleets .fleets').append(fleets);
  };

  renderCars(cars, cars_start);

  $('.more-trucks').click(function(){
    cars_start += 4;
    renderCars(cars, cars_start);
  });

  $('.our-fleets .fleet').hover(
    function(){
      $(this).find('.truck-more').show();
    },
    function(){
      $(this).find('.truck-more').hide();
    }
  );
  // $.getJSON('cars.json', function(data){
  //   cars = JSON.parse(data);
  //   console.log(cars);
  // });
  // $('object').each(function(){
  //   var svgDoc = this.contentDocument;
  //   var styleElement = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
  //   styleElement.textContent = "svg { fill: red }"; // add whatever you need here
  //   svgDoc.getElementById("Capa_1").appendChild(styleElement);
  // });
});
