import React, {Component} from 'react';
import DataRow from './DataRow';

class DataTable extends Component{
  constructor(){
    super();
    this.state = {
      direction: 0,
      sort: 'date',
      dataList: []
    }
    this.dateClickHandler = this.dateClickHandler.bind(this);
    this.dataClickHandler = this.dataClickHandler.bind(this);
  }

  dateClickHandler(){
    if(this.state.sort === 'date'){
      if(this.state.direction === 0){
        this.setState({
          direction: 1,
          dataList: this.state.dataList.sort((a,b)=>{
            return b.pid-a.pid;
          })
        });
      }
      else{
        this.setState({
          direction: 0,
          dataList: this.state.dataList.sort((a,b)=>{
            return a.pid-b.pid;
          })
        });
      }
      return;
    }
    this.setState({
      sort: 'date',
      direction: 0,
      dataList: this.state.dataList.sort((a,b)=>{
        return a.pid-b.pid;
      })
    });
  }
  dataClickHandler(){
    if(this.state.sort === 'data'){
      if(this.state.direction === 0){
        this.setState({
          direction: 1,
          dataList: this.state.dataList.sort((a,b)=>{
            return b.pid-a.pid;
          })
        });
      }
      else{
        this.setState({
          direction: 0,
          dataList: this.state.dataList.sort((a,b)=>{
            return a.pid-b.pid;
          })
        });
      }
      return;
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
    return <DataRow />;
  }
  render(){
    return(
      <div className='DataTable'>
        <div className='Headers'>
          <div>
            <p>Date</p>
            <div className={this.dateClassName()} />
          </div>
          <div>
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
