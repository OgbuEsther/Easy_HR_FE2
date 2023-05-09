import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';


interface CalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}
const Inputdate: React.FC<CalendarProps> = ({ selectedDate, onDateChange }) => {
    const [startDate, setStartDate] = useState<Date>(selectedDate);

    const handleDateChange = (date: Date) => {
    setStartDate(date);
    onDateChange(date);
  };
    
  return (
    <Container>
      <DatePicker className='pick'
      selected={startDate}
      onChange={handleDateChange}
      dateFormat="yyyy/MM/dd"
    />
    </Container>
  )
}

export default Inputdate
const Container = styled.div`
  .pick{
     height: 100%;
  border: none;
  outline: none;
  width: 250px;
  color: rgb(26, 26, 26);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  padding-left: 10px;
  }
`