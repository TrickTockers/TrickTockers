import React from 'react';
import axios from 'axios';  

class Advice extends React.Component {
    state = {
        advice: '',
      }
      componentDidMount() {
        axios.get('https://api.adviceslip.com/advice');
      }
      fetchAdvice = () => {
       axios.get('https://api.adviceslip.com/advice');
      }
    render() {
        return (
       <div>
           i am testing component
       </div>
        )
    }

}

export default Advice;