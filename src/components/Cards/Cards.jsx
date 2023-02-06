import "./assets/css/cards.css";
const Cards = () => {
  return (
    <>
      <section id="cards-dashboard">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <a href="#" className="card box-shadow1 back-color-primary border-0 text-black">
            <div className="card-body">
                <div className="d-flex  align-items-center justify-content-between">
                <div className="">
                    <h5 className="">7</h5>
                    <div className="card-title">سبدهای خرید امروز</div>
                    <div className="card-text">سبدهای خرید مانده امروز</div>
                </div>
                    <div className="box-shadow-inset p-2 px-3 rounded-2 card-icon">
                        <i className="fas fa-shopping-cart fa-2x text-danger"></i>
                    </div>
                </div>
            </div>
            
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <a href="#" className="card box-shadow1 back-color-primary border-0 text-black">
            <div className="card-body">
                <div className="d-flex  align-items-center justify-content-between">
                <div className="">
                    <h5 className="">5</h5>
                    <div className="card-title">سفارشات مانده امروز</div>
                    <div className="card-text">سفارشات معلق و فاقد پرداختی</div>
                </div>
                    <div className="box-shadow-inset p-2 px-3 rounded-2 card-icon">
                        <i className="fas fa-shopping-basket fa-2x text-success"></i>
                    </div>
                </div>
            </div>
            
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <a href="#" className="card box-shadow1 back-color-primary border-0 text-black">
            <div className="card-body">
                <div className="d-flex  align-items-center justify-content-between">
                <div className="">
                    <h5 className="">45</h5>
                    <div className="card-title">سفارشات امروز</div>
                    <div className="card-text">سفارشات کامل و دارای پرداختی</div>
                </div>
                    <div className="box-shadow-inset p-2 px-3 rounded-2 card-icon">
                        <i className="fas fa-money-bill-wave fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
            
          </a>
        </div>
        {/* <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card box-shadow1 back-color-primary border-0">
            <div className="card-body">
                <div className="d-flex  align-items-center justify-content-between">
                <div className="">
                    <h5 className="">1,500,000</h5>
                    <div className="card-title">درآمد امروز</div>
                    <div className="card-text">جمع مبالغ پرداختی (تومان)</div>
                </div>
                    <div className="box-shadow-inset p-2 px-3 rounded-2">
                        <i className="fas fa-shopping-cart fa-2x text-danger"></i>
                    </div>
                </div>
            </div>
            
          </div>
        </div> */}
      </div>
        </div>
      </section>
    </>
  );
};
export default Cards;
