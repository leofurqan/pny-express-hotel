import React from "react";

export default function Booking() {
  return (
    <div>
      <div className="booking-area">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <form>
                <div className="booking-wrap d-flex justify-content-between align-items-center">
                  <div className="single-select-box mb-30">
                    <div className="boking-tittle">
                      <span> Check In Date:</span>
                    </div>
                    <div className="boking-datepicker">
                      <input id="datepicker1" placeholder="10/12/2020" />
                    </div>
                  </div>
                  <div className="single-select-box mb-30">
                    <div className="boking-tittle">
                      <span>Check OutDate:</span>
                    </div>
                    <div className="boking-datepicker">
                      <input id="datepicker2" placeholder="12/12/2020" />
                    </div>
                  </div>
                  <div className="single-select-box mb-30">
                    <div className="boking-tittle">
                      <span>Adults:</span>
                    </div>
                    <div className="select-this">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                          </select>
                        </div>
                    </div>
                  </div>
                  <div className="single-select-box mb-30">
                    <div className="boking-tittle">
                      <span>Children:</span>
                    </div>
                    <div className="select-this">
                        <div className="select-itms">
                          <select name="select" id="select2">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                          </select>
                        </div>
                    </div>
                  </div>
                  <div className="single-select-box mb-30">
                    <div className="boking-tittle">
                      <span>Rooms:</span>
                    </div>
                    <div className="select-this">
                        <div className="select-itms">
                          <select name="select" id="select3">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                          </select>
                        </div>
                    </div>
                  </div>
                  <div className="single-select-box pt-45 mb-30">
                    <a href="/" className="btn select-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
