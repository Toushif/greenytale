import React, {Component} from 'react';
import './index.scss'

class GlobalLoader extends Component{
    render(){
        return(
            <div className="loading-content">
                <div className="progress-indicator" />
            </div>
        );
    }
}

export default GlobalLoader;