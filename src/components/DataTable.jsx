import React, {Component} from 'react';
import DataRow from './DataRow';

class DataTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      direction: 0,
      sort: 'date',
      dataList: props.data
    }
    this.dateClickHandler = this.dateClickHandler.bind(this);
    this.dataClickHandler = this.dataClickHandler.bind(this);
  }

  componentWillUpdate(nextProps){
    if(this.props.data === nextProps.data) return;
    this.setState({
      dataList: nextProps.data
    })
  }

  dateClickHandler(){
    this.setState({sort: 'date'});

    if(this.state.direction === 0){
      this.setState({
        direction: 1,
        dataList: this.state.dataList.sort((a,b)=>{
          return new Date(b.entryInfo) - new Date(a.entryInfo);
        })
      });
    }
    else{
      this.setState({
        direction: 0,
        dataList: this.state.dataList.sort((a,b)=>{
          return new Date(a.entryInfo) - new Date(b.entryInfo);
        })
      });
    }
    return;
}

  dataClickHandler(){
    this.setState({sort: 'data'});

    switch(this.props.requestedData){
      case 'Blood Pressure':
        this.bloodPressureSort();
        break;
      case 'Heart Rate':
        this.heartRateSort();
        break;
      case 'Stress':
        this.stressSort();
        break;
      case 'Alcohol':
        this.alcoholSort();
        break;
      case 'Smoking':
        this.smokeSort();
        break;
      case 'Weight':
        this.weightSort();
        break;
    }
    return;
}

bloodPressureSort(){
  if(this.state.direction === 0){
    this.setState({
      direction: 1,
      dataList: this.state.dataList.sort((a,b)=>{
        return b.bpHigh - a.bpHigh;
      })
    });
  } else{
    this.setState({
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.bpHigh - b.bpHigh;
      })
    });
  }
}

heartRateSort(){
  if(this.state.direction === 0){
    this.setState({
      direction: 1,
      dataList: this.state.dataList.sort((a,b)=>{
        return b.averageHR - a.averageHR;
      })
    });
  } else{
    this.setState({
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.averageHR - b.averageHR;
      })
    });
  }
}

stressSort(){
  if(this.state.direction === 0){
    this.setState({
      direction: 1,
      dataList: this.state.dataList.sort((a,b)=>{
        return b.stressLevel - a.stressLevel;
      })
    });
  } else{
    this.setState({
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.stressLevel - b.stressLevel;
      })
    });
  }
}

alcoholSort(){
  if(this.state.direction === 0){
    this.setState({
      direction: 1,
      dataList: this.state.dataList.sort((a,b)=>{
        return b.alcoholIntake - a.alcoholIntake;
      })
    });
  } else{
    this.setState({
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.alcoholIntake - b.alcoholIntake;
      })
    });
  }
}

smokeSort(){
  if(this.state.direction === 0){
    this.setState({
      direction: 1,
      dataList: this.state.dataList.sort((a,b)=>{
        return b.smoke - a.smoke;
      })
    });
  } else{
    this.setState({
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.smoke - b.smoke;
      })
    });
  }
}

weightSort(){
  if(this.state.direction === 0){
    this.setState({
      direction: 1,
      dataList: this.state.dataList.sort((a,b)=>{
        return b.weight - a.weight;
      })
    });
  } else{
    this.setState({
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.weight - b.weight;
      })
    });
  }
}

  dateClassName(){
    if(this.state.sort === 'date'){
      if(this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }
    return 'DownArrow';
  }

  dataClassName(){
    if(this.state.sort === 'data'){
      if(this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }
    return 'DownArrow';
  }

  renderRows(){
    return(
      this.state.dataList.map((dataEntry, index)=>{
        return <DataRow key={index} dataEntry={dataEntry} requestedData={this.props.requestedData}/>;
      })
    );
  }

  render(){
    console.log(this.state, "DataTable - State");
    return(
      <div className='DataTable'>
        <div className='Headers'>
          <div onClick={this.dateClickHandler}>
            <p>Date</p>
            <div className={this.dateClassName()} />
          </div>
          <div onClick={this.dataClickHandler}>
            <p>Data</p>
            <div className={this.dataClassName()} />
          </div>
        </div>
        {this.renderRows()}
      </div>
    );
  }
}
export default DataTable;
