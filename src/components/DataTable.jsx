import React, { Component, PropTypes } from 'react';
import DataRow from './DataRow';

class DataTable extends Component {
  constructor (props) {
    super(props);

    this.dateClickHandler = this.dateClickHandler.bind(this);
    this.bpClickHandler = this.bpClickHandler.bind(this);
    this.hrClickHandler = this.hrClickHandler.bind(this);
    this.stressClickHandler = this.stressClickHandler.bind(this);
    this.alcoholClickHandler = this.alcoholClickHandler.bind(this);
    this.smokeClickHandler = this.smokeClickHandler.bind(this);
    this.weightClickHandler = this.weightClickHandler.bind(this);


    this.state = {
      direction: 0,
      sort: 'date',
      dataList: []
    };
  }

  dateClickHandler () {
    if(this.state.sort === 'date') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'date',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  dateClassName () {
    if (this.state.sort === 'date') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  bpClickHandler () {
    if(this.state.sort === 'bp') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'bp',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  bpClassName () {
    if (this.state.sort === 'bp') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  hrClickHandler () {
    if(this.state.sort === 'hr') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'hr',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  hrClassName () {
    if (this.state.sort === 'hr') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  stressClickHandler () {
    if(this.state.sort === 'stress') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'stress',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  stressClassName () {
    if (this.state.sort === 'stress') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  alcoholClickHandler () {
    if(this.state.sort === 'alcohol') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'alcohol',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  alcoholClassName () {
    if (this.state.sort === 'alcohol') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  smokeClickHandler () {
    if(this.state.sort === 'smoke') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'smoke',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  smokeClassName () {
    if (this.state.sort === 'smoke') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  weightClickHandler () {
    if(this.state.sort === 'weight') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          dataList: this.state.dataList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'weight',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  weightClassName () {
    if (this.state.sort === 'weight') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }
  
  render () {
    return (
      <div className="DataTable">
        <div className="Headers">
          <div>
            <p>Date</p>
            <div className={this.dateClassName()} onClick={this.dateClickHandler} />
          </div>
          <div>
            <p>BP</p>
            <div className={this.bpClassName()} onClick={this.bpClickHandler} />
          </div>
          <div>
            <p>HR</p>
            <div className={this.hrClassName()} onClick={this.hrClickHandler} />
          </div>
          <div>
            <p>Stress</p>
            <div className={this.stressClassName()} onClick={this.stressClickHandler} />
          </div>
          <div>
            <p>Alcohol</p>
            <div className={this.alcoholClassName()} onClick={this.alcoholClickHandler} />
          </div>
          <div>
            <p>Smoke</p>
            <div className={this.smokeClassName()} onClick={this.smokeClickHandler} />
          </div>
          <div>
            <p>Weight</p>
            <div className={this.weightClassName()} onClick={this.weightClickHandler} />
          </div>
        </div>

      </div>
    );
  }
};


export default DataTable;
