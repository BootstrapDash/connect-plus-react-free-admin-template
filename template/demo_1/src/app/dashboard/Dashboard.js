import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Dropdown, Tabs, Tab } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';

export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      saleOptions : {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
          xAxes: [{
            display: false,
            position: 'bottom',
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .4
          }
        },
        tooltips: {
          backgroundColor: 'rgba(2, 171, 254, 1)',
        },
    
      },
      salespredictionData: {},
      salesprediction2Data : {},
      salesprediction3Data : {},
      salesprediction4Data : {},

    }
  }

  componentDidMount(){

    var gradient1 = document.getElementById('prediction1').getContext("2d")
    var gradientBg1 = gradient1.createLinearGradient(0, 0, 0, 181)
    gradientBg1.addColorStop(0, 'rgba(164,97,216, 1)');
    gradientBg1.addColorStop(1, 'rgba(255, 255, 255, 0.27)');

    var gradient2 = document.getElementById('prediction2').getContext("2d")
    var gradientBg2 = gradient2.createLinearGradient(25, 0, 25, 80)
    gradientBg2.addColorStop(0, 'rgba(164,97,216, 1)');
    gradientBg2.addColorStop(1, 'rgba(255, 255, 255, 0.27)');

    var gradient3 = document.getElementById('prediction3').getContext("2d")
    var gradientBg3 = gradient3.createLinearGradient(25, 0, 25, 80)
    gradientBg3.addColorStop(0, '#0062ff');
    gradientBg3.addColorStop(1, 'rgba(255, 255, 255, 0.27)');

    var gradient4 = document.getElementById('prediction4').getContext("2d")
    var gradientBg4 = gradient4.createLinearGradient(25, 0, 25, 80)
    gradientBg4.addColorStop(0, '#0062ff');
    gradientBg4.addColorStop(1, 'rgba(255, 255, 255, 0.27)');

    const newSalespredictionData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [5, 10, 6, 12, 7, 14, 16],
        backgroundColor: gradientBg1,
        borderColor: [
          "#a461d8"
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction2Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [16, 14, 7, 12, 6, 10, 5],
        backgroundColor: gradientBg2,
        borderColor: [
          '#a461d8'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction3Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [3, 4, 2, 3, 1, 2, 3],
        backgroundColor: gradientBg3,
        borderColor: [
          '#0062ff'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction4Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [3, 2, 1, 3, 2, 4, 3],
        backgroundColor: gradientBg4,
        borderColor: [
          '#0062ff'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    this.setState({salespredictionData: newSalespredictionData, salesprediction2Data: newSalesprediction2Data, salesprediction3Data: newSalesprediction3Data, salesprediction4Data: newSalesprediction4Data} )
  }
  totalProfitData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
      backgroundColor: [
        '#cfe1ff',
      ],
      borderColor: [
        '#0062ff'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

  totalProfitOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };
  totalExpencesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
      backgroundColor: [
        '#e1fff3',
      ],
      borderColor: [
        '#3dd597'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

  totalExpencesOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };

  deviceSaleData = {
    labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
    datasets: [{
        label: 'Demand',
        data: [450, 500, 300, 350, 200, 320, 310, 700],
        backgroundColor: [
          '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
        ],
        borderColor: [
          '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Supply',
        data: [250, 100, 310, 75, 290, 100, 500, 260],
        backgroundColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  deviceSaleOptions = {
    scales: {
      xAxes: [{
        stacked: false,
        barPercentage: .5,
        categoryPercentage: 0.4,
        position: 'bottom',
        display: true,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#a7afb7",
          fontSize: 14,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + 'k';
          },
        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  accountRetensionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
        label: 'Demand',
        data: [33, 48, 39, 36, 36],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [94, 28, 49, 25, 20],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [66, 33, 25, 36, 69],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };
  accountRetensionOptions = {
    scales: {
      xAxes: [{
        stacked: false,
        position: 'bottom',
        display: true,
        barPercentage: .7,
        categoryPercentage: 1,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#a7afb7",
          fontSize: 14,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#c31a56",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          stepSize: 40,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + 'k';
          },

        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  pageViewAnalyticData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
    datasets: [{
        label: 'This week',
        data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
        backgroundColor: [
          'rgba(216,247,234, 0.19)',
        ],
        borderColor: [
          '#3dd597'
        ],
        borderWidth: 2,
        fill: true,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#3dd597",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Current week',
        data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
        backgroundColor: [
          'rgba(216,247,234, 0.19)',
        ],
        borderColor: [
          '#3dd597'
        ],
        borderWidth: 2,
        fill: false,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#0162ff",
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ],
  };
  pageViewAnalyticOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50,
          display: true,
          padding: 10,
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 1
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };
  myBalanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
        label: 'Demand',
        data: [90, 85, 100, 105],
        backgroundColor: [
          '#0062ff', '#0062ff', '#0062ff', '#0062ff',
        ],
        borderColor: [
          '#0062ff', '#0062ff', '#0062ff', '#0062ff',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Supply',
        data: [200, 200, 200, 200],
        backgroundColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };
  myBalanceOptions = {
    scales: {
      xAxes: [{
        stacked: true,
        barPercentage: .7,
        position: 'bottom',
        display: true,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#111",
          fontSize: 12,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: false,
        gridLines: {
          drawBorder: true,
          display: false,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + 'k';
          },

        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render () {
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/connect-plus-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn purchase-button ml-auto">Check Pro Version</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div>
        <div>
          <div className="d-sm-flex justify-content-between align-items-start">
            <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
            <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
              <div className="btn-group d-none d-xl-flex bg-white p-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-link text-light py-0 font-weight-medium border-right">7 Days</button>
                <button type="button" className="btn btn-link text-dark py-0 font-weight-medium border-right">1 Month</button>
                <button type="button" className="btn btn-link text-light font-weight-medium py-0">3 Month</button>
              </div>
              <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <Dropdown alignRight>
                  <Dropdown.Toggle className="bg-white dropdown-toggle border-0 p-3 mr-0 text-muted d-flex align-items-center">
                  <i className="mdi mdi-calendar mr-1"></i>24 Mar 2019 - 24 Mar 2019
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>24 Mar 2019 - 24 Mar 2019</Dropdown.Item>
                    <Dropdown.Item>24 April 2019 - 24 May 2019</Dropdown.Item>
                    <Dropdown.Item>24 May 2019 - 24 Jun 2019</Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item>24 Jun 2019 - 24 July 2019</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="justify-content-between align-items-center tab-transparent">
                <Tabs defaultActiveKey="Business" className="nav">
                  <Tab eventKey="Users" title="Users" className="test-tab" disabled>
                    <p>1</p>
                    </Tab>
                    <Tab eventKey="Business" title="Business">
                      <div>
                        <div className="row">
                          <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <div className="card-body text-center">
                                <h5 className="mb-2 text-dark font-weight-normal">Orders</h5>
                                <h2 className="mb-4 text-dark font-weight-bold">932.00</h2>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-order">
                                        <stop offset="0%" stopColor="#1579ff"/>
                                        <stop offset="100%" stopColor="#7922e5"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <CircularProgressbarWithChildren className="progress-order"
                                  value={70}>
                                    <div>
                                      <i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">5443</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <div className="card-body text-center">
                                <h5 className="mb-2 text-dark font-weight-normal">Unique Visitors</h5>
                                <h2 className="mb-4 text-dark font-weight-bold">756,00</h2>
                                  <div className="px-4 d-flex align-items-center">
                                    <svg width="0" height="0">
                                      <defs>
                                        <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#b4ec51"/>
                                          <stop offset="100%" stopColor="#429321"/>
                                        </linearGradient>
                                      </defs>
                                  </svg>
                                  <CircularProgressbarWithChildren className="progress-visitors"
                                  value={60}>
                                    <div>
                                      <i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                  </div>
                                <p className="mt-4 mb-0">Increased since yesterday</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <div className="card-body text-center">
                                <h5 className="mb-2 text-dark font-weight-normal">Impressions</h5>
                                <h2 className="mb-4 text-dark font-weight-bold">100,38</h2>
                                  <div className="px-4 d-flex align-items-center">
                                    <svg width="0" height="0">
                                      <defs>
                                        <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#fad961"/>
                                          <stop offset="100%" stopColor="#f76b1c"/>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <CircularProgressbarWithChildren className="progress-impressions"
                                    value={90}>
                                      <div>
                                        <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  </div>                              
                                <p className="mt-4 mb-0">Increased since yesterday</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">35%</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                              <div className="card-body text-center">
                                <h5 className="mb-2 text-dark font-weight-normal">Followers</h5>
                                <h2 className="mb-4 text-dark font-weight-bold">4250k</h2>
                                  <div className="px-4 d-flex align-items-center">
                                    <svg width="0" height="0">
                                      <defs>
                                        <linearGradient id="progress-followers" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#f5515f"/>
                                          <stop offset="100%" stopColor="#9f041b"/>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <CircularProgressbarWithChildren className="progress-followers"
                                    value={45}>
                                      <div>
                                        <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  </div>  
                                <p className="mt-4 mb-0">Decreased since yesterday</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 grid-margin">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <h4 className="card-title">Recent Activity</h4>
                                      <div className="dropdown dropdown-arrow-none">
                                        <Dropdown alignRight>
                                          <Dropdown.Toggle className="btn p-0 text-dark bg-transparent border-0 hide-carret">
                                            <i className="mdi mdi-dots-vertical"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item><i className="mdi mdi-eye-outline mr-2"></i>View Project </Dropdown.Item>
                                            <Dropdown.Item><i className="mdi mdi-pencil-outline mr-2"></i>Edit Project </Dropdown.Item>
                                            <Dropdown.Item><i className="mdi mdi-delete-outline mr-2"></i>Delete Project </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 grid-margin  grid-margin-lg-0">
                                    <div className="wrapper pb-5 border-bottom">
                                      <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                                        <p className="mb-0 text-dark">Total Profit</p>
                                        <span className="text-success"><i className="mdi mdi-arrow-up"></i>2.95%</span>
                                      </div>
                                      <h3 className="mb-0 text-dark font-weight-bold">$ 92556</h3>
                                      <Line data={this.totalProfitData} options={this.totalProfitOptions} />
                                    </div>
                                    <div className="wrapper pt-5">
                                      <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                                        <p className="mb-0 text-dark">Expenses</p>
                                        <span className="text-success"><i className="mdi mdi-arrow-up"></i>52.95%</span>
                                      </div>
                                      <h3 className="mb-4 text-dark font-weight-bold">$ 59565</h3>
                                      <Line data={this.totalExpencesData} options={this.totalExpencesOptions} />
                                    </div>
                                  </div>
                                  <div className="col-lg-9 col-sm-8 grid-margin  grid-margin-lg-0">
                                    <div className="pl-0 pl-lg-4 ">
                                      <div className="d-xl-flex justify-content-between align-items-center mb-2">
                                        <div className="d-lg-flex align-items-center mb-2 mb-xl-0">
                                          <h3 className="text-dark font-weight-bold mr-2 mb-0">Devices sales</h3>
                                          <h5 className="mb-0">( growth 62% )</h5>
                                        </div>
                                        <div className="d-lg-flex">
                                          <p className="mr-2 mb-0">Timezone:</p>
                                          <p className="text-dark font-weight-bold mb-0">GMT-0400 Eastern Delight Time</p>
                                        </div>
                                      </div>
                                      <div id="visit-sale-chart-legend" className="legend-top-right float-right">
                                        <ul className="legend-horizontal">
                                          <li>
                                            <span className="legend-dots bg-info">
                                            </span>Demand
                                          </li>
                                          <li>
                                            <span className="legend-dots bg-danger">
                                            </span>Supply
                                          </li>
                                        </ul>
                                      </div>
                                      <Bar data={this.deviceSaleData} options={this.deviceSaleOptions} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 grid-margin stretch-card">
                            <div className="card card-danger-gradient">
                              <div className="card-body mb-4">
                                <h4 className="card-title mb-3 text-white">Account Retention</h4>
                                <Bar data={this.accountRetensionData} options={this.accountRetensionOptions} />
                              </div>
                              <div className="card-body bg-white p-md-1 pt-4">
                                <div className="row pt-4">
                                  <div className="col-xl-6">
                                    <div className="text-center conversion-border">
                                      <h4>Conversion</h4>
                                      <h1 className="text-dark font-weight-bold mb-md-3">$306</h1>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="text-center">
                                      <h4>Cancellation</h4>
                                      <h1 className="text-dark font-weight-bold">$1,520</h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8  grid-margin stretch-card">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-xl-flex justify-content-between mb-2">
                                  <h4 className="card-title">Page views analytics</h4>
                                  <div id="visit-sale-chart-legend" className="legend-top-right float-right">
                                    <ul className="legend-horizontal">
                                      <li>
                                        <span className="legend-dots bg-success">
                                        </span>This week
                                      </li>
                                      <li>
                                        <span className="legend-dots bg-primary">
                                        </span>Current week
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <Line data={this.pageViewAnalyticData} options={this.pageViewAnalyticOptions} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-12 col-sm-12 grid-margin grid-margin-lg-0 stretch-card">
                            <div className="card">
                              <div className="card-body recent-activity">
                                <h4 className="card-title">Recent Activity</h4>
                                <div className="d-flex mb-3">
                                  <div>
                                    <div className="activity-info bg-danger"> I </div>
                                  </div>
                                  <div className="activity-details">
                                    <h4 className="text-dark font-weight-normal">Iva Barber</h4>
                                    <p className="mb-0">added new task on trello</p>
                                    <p className="text-small mb-0">05:58AM</p>
                                  </div>
                                </div>
                                <div className="d-flex mb-3">
                                  <div className="activity-info bg-warning"> D </div>
                                  <div className="activity-details">
                                    <h4 className="text-dark font-weight-normal">Dorothy Romero</h4>
                                    <p className="mb-0">added new task on trello</p>
                                    <p className="text-small mb-0">02:50PM</p>
                                  </div>
                                </div>
                                <div className="d-flex mb-3">
                                  <div className="activity-info bg-success"> R </div>
                                  <div className="activity-details">
                                    <h4 className="text-dark font-weight-normal">Ricardo Hawkins</h4>
                                    <p className="mb-0">added new task on trello</p>
                                    <p className="text-small mb-0">05:22AM</p>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <div className="activity-info hide-border bg-info"> N </div>
                                  <div className="activity-details">
                                    <h4 className="text-dark font-weight-normal">Noah Montgomery</h4>
                                    <p className="mb-0">added new task on trello</p>
                                    <p className="text-small mb-0">08:19PM</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin grid-margin-lg-0 stretch-card">
                            <div className="card">
                              <div className="card-body">
                                <h4 className="card-title">My Balance</h4>
                                <div className="d-lg-flex justify-content-between align-items-center">
                                  <h1 className="text-dark mb-0">$3258</h1>
                                  <p className="text-success mb-0 font-weight-medium">+30.56% ($121)</p>
                                </div>
                                <p className="mb-5 pb-1">Deposit: <span className="font-weight-bold">$5430</span></p>
                                <Bar data={this.myBalanceData} options={this.myBalanceOptions} />
                                <div className="border p-3 mt-2">
                                  <div className="row">
                                    <div className="col-sm-6 mb-4 mb-lg-0">
                                      <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                        <div className="text-small text-dark">Available :</div>
                                        <span className="font-weight-bold text-dark text-small ">30.56%</span>
                                      </div>
                                        <ProgressBar variant="success" now={30}/>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                        <div className="text-small text-dark">Pending :</div>
                                        <span className="font-weight-bold text-small text-dark">69.44%</span>
                                      </div>
                                        <ProgressBar variant="info" now={70}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin grid-margin-lg-0 stretch-card">
                            <div className="card">
                              <div className="card-body">
                                <div className="dotted-border p-3 mb-3">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <h4 className="card-title mb-1">Sales Prediction</h4>
                                    </div>
                                    <div className="col-sm-6">
                                      <Line data={this.state.salespredictionData} options={this.state.saleOptions} id="prediction1"/>
                                      <h3 className="font-weight-bold mt-3 text-dark">$3258</h3>
                                      <p className="text-muted mb-0">350-985 sales</p>
                                    </div>
                                    <div className="col-sm-6">
                                    <Line data={this.state.salesprediction2Data} options={this.state.saleOptions}  id="prediction2"/>
                                      <h3 className="font-weight-bold mt-3 text-dark">$3258</h3>
                                      <p className="text-muted mb-0">350-985 sales</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="dotted-border p-3">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <h4 className="card-title mb-1">Stock History</h4>
                                    </div>
                                    <div className="col-sm-6">
                                    <Line data={this.state.salesprediction3Data} options={this.state.saleOptions}  id="prediction3"/>
                                      <h3 className="font-weight-bold mt-3 text-dark">$3258</h3>
                                      <p className="mb-0 text-muted">350-985 sales</p>
                                    </div>
                                    <div className="col-sm-6">
                                    <Line data={this.state.salesprediction4Data} options={this.state.saleOptions}  id="prediction4"/>
                                      <h3 className="font-weight-bold text-dark  mt-3">$3258</h3>
                                      <p className="mb-0 text-muted">350-985 sales</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Performance" title="Performance" disabled>
                    <p>3</p>
                    </Tab>
                    <Tab eventKey="Conversion" title="Conversion" disabled>
                    <p>4</p>
                    </Tab>
                    
                    </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
export default Dashboard;