const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
const data = {
    labels: labels,
    datasets: [{
      label: 'UV',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  
  const d=new Date();
  $(".search").keydown(function (e) {
    if (e.key == "Enter") {
      let a = $(".search").val();
      console.log(a);
      $.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=cdb5aa9a2283bc68d4bf857b2e0baae7`,
        function (data, status) {
          $(".mount").text(`${data.name},`);
          $(".count").text(`${data.sys.country}`);
         
          $.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=hourly,minutely&appid=cdb5aa9a2283bc68d4bf857b2e0baae7`,
            function (data) {
             // $(".weather_main").text(`${data.current.weather[0].main}`);
              $(".meter").html(`${data.current.temp}&#8451;`);
             // $(".day").html(`${d.getDay() }`);
              $(".visb").html(`${data.current.visibility}`);
              $(".hdty").text(`${data.current.humidity}`);
             // $("#UVI_value").text(`${data.current.uvi}  UVI`);
              $(".wind").text(`${data.current.wind_speed} `);
             // $(".feel_like").text(`${data.current.feels_like} `);
              $(".sun").html(`${data.daily[0].temp.max}&#176; `);
              $(".mon").html(`${data.daily[1].temp.max}&#176; `);
              $(".tue").html(`${data.daily[2].temp.max}&#176; `);
              $(".wed").html(`${data.daily[3].temp.max}&#176; `);
              $(".thu").html(`${data.daily[4].temp.max}&#176; `);
              $(".fri").html(`${data.daily[5].temp.max}&#176; `);
              $(".sat").html(`${data.daily[6].temp.max}&#176; `);
              $(".rise").html(`${window.moment(data.current.sunrise).format("HH:mm A")}`);
              $(".set").html(`${window.moment(data.current.sunset).format("HH:mm P")}`);
            }
          );
        }
      );
    }
  });