import React, {useState, useContext} from 'react';
import BusinessContext from '../../context/business/businessContext';
import useLocation from '../location/useLocation';
import M from 'materialize-css/dist/js/materialize.min.js'

const Search = (props) => {
    const [text, setText] = useState('');
    const businessContext = useContext(BusinessContext);

    const {getBusinesses} = businessContext;
    const [lat, long, errorMessage] = useLocation();

    const onChange = e => {
        e.preventDefault();
        if (e.key === 'Enter') searchBusiness(text);
        else setText(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        searchBusiness(text)
    };

    const searchBusiness = (query) => {
        if (text === '' || lat === '' || long === '') {
            M.toast({html: 'Enter a field & allow location!'}, 3600)
        } else {
            getBusinesses({text, lat, long});
        }
    };

    if (errorMessage) {
        M.toast({html: 'Geolocation acces denied!'}, 3600)
    }

    return (
        <header className="page-header" style={headerStyle}>
            <div className="container">
                <div className="header-padding">
                    <div className="row">
                        <form autoComplete="off" onSubmit={onSubmitHandler}>
                            <div style={{display: 'flex'}}>
                                <div className="input-field" style={{width: '100%'}}>
                                    <input id="search" type="search" maxLength="25" value={text} onChange={onChange}/>
                                    <label className="label-icon" htmlFor="search">
                                        <i className="material-icons search-icon">search</i></label>
                                    <i className="material-icons close-icon">close</i>
                                </div>
                                <input type="submit" value="Search"
                                       className="btn-large waves-effect waves-light search-btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

const headerStyle = {
    background: "#2980b9"
}

export default Search;
