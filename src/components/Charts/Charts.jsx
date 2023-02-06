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
                className="box-shadow1 rounded-3 p-3"
                style={{ width: "100%" }}
              >
                <canvas id="acquisitions" className="box-shadow-inset p-3"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charts;
(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "نمودار فروش یک سال",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
