import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Settings() {
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
        <main className="content">
          <div className="container-fluid px-3">
            <h1 className="h3 mb-3">Settings</h1>
            <div className="row">
              <div className="col-md-3 col-xl-2">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Profile Settings</h5>
                  </div>
                  <div className="list-group list-group-flush" role="tablist">
                    <a
                      className="list-group-item list-group-item-action active"
                      data-bs-toggle="list"
                      href="#account"
                      role="tab"
                    >
                      Account
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      data-bs-toggle="list"
                      href="#password"
                      role="tab"
                    >
                      Password
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      data-bs-toggle="list"
                      href="#"
                      role="tab"
                    >
                      Delete account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-xl-10">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="account"
                    role="tabpanel"
                  >
                    <div className="card">
                      <div className="card-header">
                        <div className="card-actions float-end">
                          <div className="dropdown position-relative">
                            <a
                              href="#"
                              data-bs-toggle="dropdown"
                              data-bs-display="static"
                            >
                              <i
                                className="align-middle"
                                data-feather="more-horizontal"
                              />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                        <h5 className="card-title mb-lg-0">Public info</h5>
                      </div>
                      <div className="card-body">
                        <form className="ms-auto ">
                          <div className="row">
                            <div>
                              <div className="mb-3">
                                <label
                                  htmlFor="inputUsername"
                                  className="form-label"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputUsername"
                                  placeholder="Username"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="inputUsername"
                                  className="form-label"
                                >
                                  Biography
                                </label>
                                <textarea
                                  rows={2}
                                  className="form-control"
                                  id="inputBio"
                                  placeholder="Tell something about yourself"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Save changes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="password" role="tabpanel">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Password</h5>
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="inputPasswordCurrent"
                              className="form-label"
                            >
                              Current password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPasswordCurrent"
                            />
                            <small>
                              <a href="/reset-password">
                                Forgot your password?
                              </a>
                            </small>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="inputPasswordNew"
                              className="form-label"
                            >
                              New password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPasswordNew"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="inputPasswordNew2"
                              className="form-label"
                            >
                              Verify password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPasswordNew2"
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Save changes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Settings;
