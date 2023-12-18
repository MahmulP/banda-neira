import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ResetPassword() {
  return (
    <div className="d-flex">
      <div className="w-auto position-fixed  ">
        <Sidebar />
      </div>
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Topbar />
        <div className="main d-flex justify-content-center w-100">
          <main className="content d-flex p-0">
            <div className="container d-flex flex-column">
              <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                  <div className="d-table-cell align-middle">
                    <div className="text-center mt-4">
                      <h1 className="h2">Reset password</h1>
                      <p className="lead">
                        Enter your email to reset your password.
                      </p>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="m-sm-3">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">Email</label>
                              <input
                                className="form-control form-control-lg"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                              <a className="btn btn-lg btn-primary" href="/">
                                Reset password
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-3">
                      Don't have an account? <a href="/register">Sign up</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;
