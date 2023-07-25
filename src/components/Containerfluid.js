import Earning from "./Earning";
import Pageheading from "./Pageheading";

import Navbar from "../Navbar";
export default function Containerfluid() {
  return (
    <div className="container-fluid">
      <Pageheading />
      <Earning />
      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Content Column --> */}
       
        <div className="col-lg-6 mb-4">
          {/* <!-- Illustrations --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                students and teachers
              </h6>
            </div>
            <div className="card-body">
              <p>
                <Navbar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
