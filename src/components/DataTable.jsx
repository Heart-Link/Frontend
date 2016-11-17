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
      dataList: this.props.data
    };
  }

  componentWillUpdate (nextProps) {
    if(this.props.data === nextProps.data) return;
    this.setState({ dataList: nextProps.data });
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
            return b.bpHigh - a.bpHigh 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.bpHigh - b.bpHigh 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'bp',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.bpHigh - b.bpHigh 
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
            return b.averageHR - a.averageHR 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.averageHR - b.averageHR 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'hr',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.averageHR - b.averageHR 
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
            return b.stressLevel - a.stressLevel
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.stressLevel - b.stressLevel 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'stress',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.stressLevel - b.stressLevel 
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
            return b.alcoholIntake - a.alcoholIntake 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.alcoholIntake - b.alcoholIntake 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'alcohol',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.alcoholIntake - b.alcoholIntake 
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
            return b.smoke - a.smoke 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.smoke - b.smoke 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'smoke',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.smoke - b.smoke 
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
            return b.weight - a.weight 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          dataList: this.state.dataList.sort((a, b) => { 
            return a.weight - b.weight 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'weight',
      direction: 0,
      dataList: this.state.dataList.sort((a, b) => { 
                     return a.weight - b.weight 
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

  renderRows () {
    if(this.state.dataList === null || this.state.dataList.length === 0) return <h3>No Data</h3>;

    return this.state.dataList.map((dailyEntry, index) => {
      return <DataRow dailyEntry={dailyEntry}
                      key={index} />
    });
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

        {this.renderRows()}
      </div>
    );
  }
};


export default DataTable;
