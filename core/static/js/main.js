var ctx = document.getElementsByClassName("line-chart");

const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#CCB3F5';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

// Type, Data e options
var chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
    datasets: [
      {
        label: "PERCENTUAL DE AUMENTO NAS AÇÕES",
        data: [5,6,15,18,13,21,26,34,49,69,78,95],
        borderWidth: 6,
        borderColor: 'rgb(40,49,219,0.86)',
        backgroundColor: 'transparent',
      },
      
      {
        label: "NOVOS CLIENTES",
        data: [4,8,10,17,12,13,19,25,32,31,33,35],
        borderWidth: 6,
        borderColor: 'rgb(235,24,228,0.92)',
        backgroundColor: 'transparent',
      },
    ]
  },
  plugins: [plugin],
});
