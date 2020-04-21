import React from 'react';
import moment from 'moment';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            alert("hello world");
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;
        if(this.state.hours === null && this.state.minutes === null && this.state.seconds === null ){
            return (
                <div>
                    <h1>Happy Birthday</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h3 className="h1">Time Remaining</h3>
                    <div className="countdown-wrapper">
                        <div className="countdown-item">
                            {hours}
                            <span><h3><u>hours</u></h3></span>
                        </div>
                        <div className="countdown-item">
                            {minutes}
                            <span><h3><u>minutes</u></h3></span>
                        </div>
                        <div className="countdown-item">
                            {seconds}
                            <span><h3><u>seconds</u></h3></span>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Countdown;