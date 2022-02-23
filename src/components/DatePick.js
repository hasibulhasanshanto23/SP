import React,{Component} from 'react'
import {SingleDatePicker } from "react-dates";
import moment from 'moment'

class DatePick extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate:null,
            endDate:null,
        }
        this.date=moment().format("Do MMM YY");
        this.state.startDate=moment().format("Do MMM YY")
        this.state.endDate=moment().format("Do MMM YY")

        
        this.new_date = moment().add(7, 'days').format('Do MMM YY');
        //console.log(this.new_date)
   
    }



    

    render(){
        return(
        <SingleDatePicker
            date={this.state.date} 
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused} 
            onFocusChange={({ focused }) => this.setState({ focused })}
            noBorder
            placeholder={this.props.addDays ? this.new_date : this.date}             
/>
        )
    }
}



export default DatePick