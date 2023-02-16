import Chart from "chart.js/auto";
const Charts = () => {

  return (
    <>
      <section id="charts" className="my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <table className="table box-shadow1 fs-6 text-center rounded-2">
                <thead>
                  <tr>
                    <th>دسته</th>
                    <th>عنوان</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="box-shadow-inset">
                    <td>دسته شماره یک</td>
                    <td>محصول یک</td>
                    <td>پایان یافته</td>
                    <td>
                      <i className="fas fa-times btn-icon-close"></i>
                    </td>
                  </tr>
                  <tr className="box-shadow-inset">
                    <td>دسته شماره یک</td>
                    <td>محصول یک</td>
                    <td>پایان یافته</td>
                    <td>
                      <i className="fas fa-times btn-icon-close"></i>
                    </td>
                  </tr>
                  <tr className="box-shadow-inset">
                    <td>دسته شماره یک</td>
                    <td>محصول یک</td>
                    <td>پایان یافته</td>
                    <td>
                      <i className="fas fa-times btn-icon-close"></i>
                    </td>
                  </tr>
                  <tr className="box-shadow-inset">
                    <td>دسته شماره یک</td>
                    <td>محصول یک</td>
                    <td>پایان یافته</td>
                    <td>
                      <i className="fas fa-times btn-icon-close"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end table */}
            {/* chart */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="box-shadow-inset rounded-3 p-3"
                style={{ width: "100%" }}
              >
                <canvas id="acquisitions"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("acquisitions", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
export default Charts;
