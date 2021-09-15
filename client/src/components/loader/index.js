import React, {Component} from 'react';

class Loading extends Component{
    render(){
        return(
            <div className="loading-content">
                <div className="progress-indicator" />
            </div>
        );
    }
}

export default Loading;