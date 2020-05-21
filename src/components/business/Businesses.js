import React,{useContext} from 'react'
import BusinessItem from './BusinessItem'

import BusinessContext from '../../context/business/businessContext';

const Bussinesses = (props) =>{
    const businessContext = useContext(BusinessContext);
    const {businesses} = businessContext;

    if(businessContext.loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="row">
            {businesses && !!businesses.length && businesses.map(business => (
                <BusinessItem key={business.id} business={business}/>
            ))}
            </div>
        </div>
    )
};

export default Bussinesses;
